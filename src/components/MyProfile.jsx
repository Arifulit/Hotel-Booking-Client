
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Access user information from context

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="section-title">My Profile</h1>
        <p className="section-subtitle">Manage your personal details and preferences.</p>
      </div>

      <div className="card-surface p-8 text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border border-ink-200"
        />
        <p className="text-2xl font-semibold text-ink-900 mt-4">{user?.displayName || "User Name"}</p>
        <p className="text-ink-500 text-sm mt-1">{user?.email}</p>

        <div className="mt-6">
          <Link to="/update-profile" className="btn-primary">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
