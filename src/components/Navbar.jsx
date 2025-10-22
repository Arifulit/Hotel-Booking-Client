
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
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between z-50 shadow-md">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src="https://media.istockphoto.com/id/1049008198/photo/booking-hotel-on-internet-travel-planning.jpg?s=612x612&w=0&k=20&c=xLeYQE8WooOKhZzCYI2OG4Do_Hgxl_CPhIFgcgg4DYo="
            alt="Logo"
            className="w-12 h-12 rounded-lg mr-2"
          />
          <span>HotelBooking</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-lg">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300")}>Home</NavLink>
        <NavLink to="/room" className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300")}>Rooms</NavLink>
        <NavLink to="/bookings" className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300")}>My Bookings</NavLink>
      </div>

      {/* Right Side: Theme Toggle & Auth */}
      <div className="flex items-center space-x-4">
        
        {/* Theme Toggle (Sun & Moon Icon Only) */}
        <button onClick={handleToggle} className="text-white hover:text-yellow-400 transition">
          {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* User Auth Section */}
        {user && user.email ? (
          <>
            <div className="relative group cursor-pointer">
              <img src={user.photoURL || "/default-avatar.png"} alt="User" className="w-10 h-10 rounded-full" />
            </div>
            <button onClick={handleLogout} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Login</NavLink>
            <NavLink to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Register</NavLink>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white hover:text-yellow-400 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="bg-blue-600 text-white w-64 p-6 space-y-6 flex flex-col">
            <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl mb-4">&times;</button>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg">Home</NavLink>
            <NavLink to="/room" onClick={() => setIsMenuOpen(false)} className="text-lg">Rooms</NavLink>
            <NavLink to="/bookings" onClick={() => setIsMenuOpen(false)} className="text-lg">My Bookings</NavLink>
            
            {/* Move User Auth Section to the Right in Mobile */}
            <div className="flex justify-end space-x-4 mt-4">
              {user && user.email ? (
                <>
                  <div className="relative group cursor-pointer">
                    <img src={user.photoURL || "/default-avatar.png"} alt="User" className="w-10 h-10 rounded-full" />
                  </div>
                  <button onClick={handleLogout} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Login</NavLink>
                  <NavLink to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Register</NavLink>
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
