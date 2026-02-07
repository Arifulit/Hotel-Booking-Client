/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]); // State to store room data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State to manage error

  // Fetch all rooms data from the server
  useEffect(() => {
    axios
      .get("http://localhost:4000/rooms") // Replace with your backend URL
      .then((response) => {
        setRooms(response.data); // Set room data to state
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error); // Log error for debugging
        setError("There was an issue loading the rooms. Please try again later.");
        setLoading(false); // Stop loading in case of error
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500 text-lg"><Loading /></p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  // No rooms available
  if (!rooms || rooms.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500 text-lg">No rooms available.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="section-title">Explore Our Rooms</h2>
        <p className="section-subtitle">Choose from curated rooms designed for every journey.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Link
            to={`/rooms/${room._id}`} // Link to room details page
            key={room._id}
            className="card-surface overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative">
              {/* Room Image */}
              <img
                src={room.image || "/default-room.jpg"} // Fallback image
                alt={room.name}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-ink-800">{room.name}</h3>
                <span className="text-sm text-ink-500">${room.price || "--"}/night</span>
              </div>
              <p className="text-ink-600 text-sm">{room.description}</p>
              <div className="flex items-center justify-between text-sm text-ink-500">
                <p>Rating: {room.rating || "4.8"}★</p>
                <p>{room.reviews ? room.reviews.length : 0} Reviews</p>
              </div>
              <span className="badge-pill">View details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
