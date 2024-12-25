// Register.js
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

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
        alert(`Welcome, ${name.value}! Registration is complete.`);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        alert(`Welcome, ${result.user.displayName || result.user.email}!`);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Register Now!</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full mb-3"
          >
            Sign in with Google
          </button>
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

