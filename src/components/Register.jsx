import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser, handleGoogleLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = e.target.elements;

    // Password validation
    if (password.value.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[a-z]/.test(password.value)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password.value)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    setError(""); // Clear errors if validation passes

    createNewUser(email.value, password.value)
      .then((result) => {
        const user = result.user;
        setUser(user);
        return updateProfile(user, {
          displayName: name.value,
          photoURL: photoURL.value,
        });
      })
      .then(() => {
        // SweetAlert success
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: `Welcome, ${name.value}! Your account has been created.`,
        });
        navigate("/"); // Redirect to homepage
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        // SweetAlert success
        Swal.fire({
          icon: "success",
          title: "Google Sign-In Successful!",
          text: `Welcome, ${user.displayName || user.email}!`,
        });
        navigate("/"); // Redirect to homepage
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen bg-ink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md card-surface p-8 sm:p-10">
        <div className="text-center mb-8">
          <p className="badge-pill">Create your account</p>
          <h1 className="text-3xl font-semibold text-ink-900 mt-3">Register for HotelBooking</h1>
          <p className="text-ink-500 text-sm mt-2">Start planning your next unforgettable stay.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-ink-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field mt-2"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-ink-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field mt-2"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-ink-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Paste your photo URL"
              className="input-field mt-2"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-ink-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a secure password"
              className="input-field mt-2"
              required
            />
          </div>
          {error && <p className="text-rose-500 text-sm">{error}</p>}
          <button type="submit" className="btn-primary w-full">
            Register
          </button>
        </form>
        <div className="text-center mt-6 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn-outline w-full"
          >
            Sign in with Google
          </button>
          <p className="text-sm text-ink-600">
            Already have an account?{" "}
            <Link to="/login" className="text-brand-600 hover:text-brand-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
