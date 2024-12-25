
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const { handleGoogleLogin, userLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle Login
    const handleLoginClick = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill in both email and password.');
            return;
        }

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success(`Welcome, ${user.displayName || user.email}!`);
                navigate(from, { replace: true });
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // console.error("Login Error:", error.message);
                toast.error('Invalid email or password. Please try again.');
            });
    };

    // Handle Google Login
    const handleGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success(`Welcome, ${user.displayName || user.email}!`);
                navigate(from, { replace: true });
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // console.error("Google Login Error:", error.message);
                toast.error('Google login failed. Please try again.');
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full mt-16 max-w-md bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Login Now!</h1>
                </div>

                <form onSubmit={handleLoginClick} className="space-y-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-end">
                            <Link
                                to={`/forgot-password?email=${encodeURIComponent(email || '')}`}
                                className="text-sm text-blue-500 hover:underline mt-2"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <div className="form-control">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleGoogle}
                        className="w-full bg-gray-100 border border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-200 transition duration-300 mb-4"
                    >
                        Sign in with Google
                    </button>
                    <p className="text-gray-600">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;