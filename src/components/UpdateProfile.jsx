

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, manageProfile } = useContext(AuthContext); 
  const navigate = useNavigate(); 


  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    manageProfile(displayName, photoURL)
      .then(() => {
        navigate("/my-profile"); 
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setError("Failed to update profile");
        // console.error(err.message);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Update Your Profile</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
        {/* Display Name */}
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-lg font-semibold">
            Display Name
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        {/* Profile Picture URL */}
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-lg font-semibold">
            Profile Picture URL
          </label>
          <input
            id="photoURL"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter image URL"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
