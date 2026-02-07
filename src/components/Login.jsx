/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
    const { handleGoogleLogin, userLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle Login
    const handleLoginClick = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "Please fill in both email and password.",
            });
            return;
        }

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                const users = { email: email };
                axios.post("http://localhost:4000/jwt", users, { withCredentials: true })
                    .then((res) => {
                        // console.log(res.data);
                    });

                setUser(user);
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    text: `Welcome, ${user.displayName || user.email}!`,
                });
                navigate("/my-profile", { replace: true });
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Invalid email or password. Please try again.",
                });
            });
    };

    // Handle Google Login
    const handleGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    icon: "success",
                    title: "Google Login Successful!",
                    text: `Welcome, ${user.displayName || user.email}!`,
                });
                navigate("/my-profile", { replace: true });
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Google Login Failed",
                    text: "Something went wrong. Please try again.",
                    footer: '<a href="#">Why do I have this issue?</a>',
                });
            });
    };

    return (
        <div className="min-h-screen bg-ink-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md card-surface p-8 sm:p-10">
                <div className="text-center mb-8">
                    <p className="badge-pill">Welcome back</p>
                    <h1 className="text-3xl font-semibold text-ink-900 mt-3">Login to HotelBooking</h1>
                    <p className="text-ink-500 text-sm mt-2">Access your bookings and manage your stays.</p>
                </div>

                <form onSubmit={handleLoginClick} className="space-y-5">
                    <div>
                        <label className="text-sm font-semibold text-ink-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input-field mt-2"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-ink-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input-field mt-2"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-end">
                            <Link
                                to={`/forgot-password?email=${encodeURIComponent(email || "")}`}
                                className="text-sm text-brand-600 hover:text-brand-700 mt-2"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center space-y-4">
                    <button
                        onClick={handleGoogle}
                        className="btn-outline w-full"
                    >
                        Sign in with Google
                    </button>
                    <p className="text-ink-600 text-sm">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-brand-600 hover:text-brand-700 font-semibold">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
