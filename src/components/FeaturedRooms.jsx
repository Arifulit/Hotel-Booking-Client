import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]); // State to store room data
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Fetch room data using Axios
  useEffect(() => {
    axios
      .get("https://assignment-hotel-booking-server.vercel.app/rooms")
      .then((response) => {
        setRooms(response.data); // Update rooms state with fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  // Check if rooms data exists and handle edge cases
  if (loading) {
    return <p className="text-center text-gray-500">Loading featured rooms...</p>;
  }

  if (!rooms || rooms.length === 0) {
    return <p className="text-center text-gray-500">No featured rooms available.</p>;
  }

  // Filter to select top 6 featured rooms
  const featuredRooms = rooms.slice(0, 6);

  // Handle "Book Now" button click
  const handleBookNow = (roomId) => {
    // Navigate to the room detail page (adjust the URL path as needed)
    window.location.href = `/rooms/${roomId}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRooms.map((room) => (
          <div
            key={room._id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleBookNow(room._id)} // Clicking the card redirects to the room details page
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-600 my-2">{room.description}</p>
              <p className="text-blue-600 font-bold">Rating: {room.rating}⭐</p>
              <p className="text-gray-500">Reviews: {room.reviews}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click redirection
                  handleBookNow(room._id);
                }}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
   
      <div className="flex justify-center mt-8">
    <Link to="/room">
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        See All Rooms
      </button>
    </Link>
  </div>
      
    </div>
  );
};

export default FeaturedRooms;
