
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Access user information from context

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

      {/* Display profile information */}
      <div className="text-center mb-6">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p className="text-xl mt-4">{user?.displayName || "User Name"}</p>
      </div>

      {/* Button to navigate to Update Profile page */}
      <div className="text-center">
        <Link
          to="/update-profile"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Update Information
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
