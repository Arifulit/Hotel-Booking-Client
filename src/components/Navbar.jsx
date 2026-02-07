
import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Sun, Moon } from "lucide-react"; // Professional Icons

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Handle Theme Toggle
  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Apply Theme on Mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((err) => console.error("Logout Error:", err));
  };

  return (
    <nav className="glass-nav fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl overflow-hidden ring-2 ring-brand-200">
            <img
              src="https://media.istockphoto.com/id/1049008198/photo/booking-hotel-on-internet-travel-planning.jpg?s=612x612&w=0&k=20&c=xLeYQE8WooOKhZzCYI2OG4Do_Hgxl_CPhIFgcgg4DYo="
              alt="HotelBooking"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-ink-900">HotelBooking</p>
            <p className="text-xs text-ink-500">Luxury stays, curated</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-brand-700"
                : "nav-link hover:text-brand-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/room"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-brand-700"
                : "nav-link hover:text-brand-700"
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-brand-700"
                : "nav-link hover:text-brand-700"
            }
          >
            My Bookings
          </NavLink>
          {user && user.email && (
            <NavLink
              to="/my-profile"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-brand-700"
                  : "nav-link hover:text-brand-700"
              }
            >
              Profile
            </NavLink>
          )}
        </div>

        {/* Right Side: Theme Toggle & Auth */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleToggle}
            className="h-10 w-10 rounded-full border border-ink-200 bg-white text-ink-600 hover:text-brand-700 hover:border-brand-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user && user.email ? (
            <>
              <div className="relative group cursor-pointer">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border border-ink-200"
                />
              </div>
              <button onClick={handleLogout} className="btn-outline">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn-outline">
                Login
              </NavLink>
              <NavLink to="/register" className="btn-primary">
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden h-10 w-10 rounded-full border border-ink-200 bg-white text-ink-700"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-5 h-5 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-ink-900/40 z-40 flex justify-end md:hidden">
          <div className="bg-white w-72 p-6 space-y-6 flex flex-col shadow-xl">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink-800">Menu</p>
              <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-ink-500">&times;</button>
            </div>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="nav-link-mobile">Home</NavLink>
            <NavLink to="/room" onClick={() => setIsMenuOpen(false)} className="nav-link-mobile">Rooms</NavLink>
            <NavLink to="/bookings" onClick={() => setIsMenuOpen(false)} className="nav-link-mobile">My Bookings</NavLink>
            {user && user.email && (
              <NavLink to="/my-profile" onClick={() => setIsMenuOpen(false)} className="nav-link-mobile">Profile</NavLink>
            )}

            <div className="h-px bg-ink-100" />

            <button
              onClick={handleToggle}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600"
            >
              {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
              Toggle theme
            </button>

            <div className="flex flex-col gap-3">
              {user && user.email ? (
                <>
                  <div className="flex items-center gap-3">
                    <img src={user.photoURL || "/default-avatar.png"} alt="User" className="w-10 h-10 rounded-full border border-ink-200" />
                    <div>
                      <p className="text-sm font-semibold text-ink-800">{user.displayName || "Guest"}</p>
                      <p className="text-xs text-ink-500">{user.email}</p>
                    </div>
                  </div>
                  <button onClick={handleLogout} className="btn-outline w-full">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="btn-outline w-full">Login</NavLink>
                  <NavLink to="/register" className="btn-primary w-full">Register</NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
