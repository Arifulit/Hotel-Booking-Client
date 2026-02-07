
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
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="section-title">Update Your Profile</h1>
        <p className="section-subtitle">Keep your profile details fresh and accurate.</p>
      </div>

      {error && <p className="text-rose-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleUpdate} className="card-surface p-8 space-y-6">
        <div>
          <label htmlFor="displayName" className="block text-sm font-semibold text-ink-700">
            Display Name
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="input-field mt-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="photoURL" className="block text-sm font-semibold text-ink-700">
            Profile Picture URL
          </label>
          <input
            id="photoURL"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input-field mt-2"
            placeholder="Enter image URL"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
