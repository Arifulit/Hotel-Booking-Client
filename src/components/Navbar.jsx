
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login"); // Redirect on logout
      })
      .catch(() => {
        // Handle logout error
      });
  };

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between relative">
      {/* Logo and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img
            src="https://media.istockphoto.com/id/1049008198/photo/booking-hotel-on-internet-travel-planning.jpg?s=612x612&w=0&k=20&c=xLeYQE8WooOKhZzCYI2OG4Do_Hgxl_CPhIFgcgg4DYo="
            alt="Logo"
            className="w-12 h-12 rounded-lg"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/room"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
          }
        >
          Rooms
        </NavLink>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
          }
        >
          My Bookings
        </NavLink>
      </div>

      {/* User Authentication Section */}
      <div className="flex items-center space-x-4">
        {user && user.email ? (
          <>
            {/* User Profile */}
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute right-0 hidden group-hover:block bg-orange-500 text-black p-2 rounded shadow-md z-10">
                <p className="font-bold">{user.displayName}</p>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-600 text-white px-4 py-2 rounded"
                  : "bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-600 text-white px-4 py-2 rounded"
                  : "bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-start">
          <div className="bg-blue-600 text-white w-64 p-6 space-y-6 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl mb-4"
            >
              &times;
            </button>

            {/* Mobile Links */}
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/room"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
              }
            >
              Rooms
            </NavLink>
            <NavLink
              to="/bookings"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
              }
            >
              My Bookings
            </NavLink>
            {/* If logged in, show Logout option */}
            {user && user.email && (
              <button
                onClick={handleLogout}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


