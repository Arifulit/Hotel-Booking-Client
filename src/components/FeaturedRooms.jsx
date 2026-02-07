// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const FeaturedRooms = () => {
//   const [rooms, setRooms] = useState([]); // State to store room data
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [error, setError] = useState(null); // State to handle errors

//   // Fetch room data using Axios
//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/rooms")
//       .then((response) => {
//         setRooms(response.data); // Update rooms state with fetched data
//         setLoading(false); // Stop loading
//       })
//       .catch((error) => {
//         console.error("Error fetching rooms:", error);
//         setError("There was an error loading the rooms."); // Set error message
//         setLoading(false); // Stop loading even on error
//       });
//   }, []);

//   // Check if rooms data exists and handle edge cases
//   if (loading) {
//     return (
//       <div className="text-center text-gray-500">
//         Loading featured rooms...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500">
//         {error}
//       </div>
//     );
//   }

//   if (!rooms || rooms.length === 0) {
//     return (
//       <div className="text-center text-gray-500">
//         No featured rooms available.
//       </div>
//     );
//   }

//   // Filter to select top 6 featured rooms
//   const featuredRooms = rooms.slice(0, 6);

//   // Handle "Book Now" button click
//   const handleBookNow = (roomId) => {
//     window.location.href = `/rooms/${roomId}`;
//   };

//   return (
//     <div className="container w-full mx-auto p-6">
//       <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
//         Featured Rooms
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {featuredRooms.map((room) => (
//           <div
//             key={room._id}
//             className="bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105"
//             onClick={() => handleBookNow(room._id)}
//           >
//             <div className="relative">
//               {/* Room Image */}
//               <img
//                 src={room.image || "/default-room.jpg"} // Fallback image
//                 alt={room.name}
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold text-blue-600">{room.name}</h3>
//               <p className="text-gray-700 mt-2">{room.description}</p>
//               <p className="text-blue-500 mt-3">Rating: {room.rating}⭐</p>
//               <p className="text-gray-500">Reviews: {room.reviews || 0}</p>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent card click redirection
//                   handleBookNow(room._id);
//                 }}
//                 className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <Link to="/room">
//           <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
//             See All Rooms
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FeaturedRooms;



/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]); // State to store room data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch room data using Axios
  useEffect(() => {
    axios
      .get("http://localhost:4000/rooms") // Fetch rooms data from the server
      .then((response) => {
        setRooms(response.data); // Set room data to state
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error); // Log error for debugging
        setError("There was an error loading the rooms."); // Set error message
        setLoading(false); // Stop loading even on error
      });
  }, []);

  // Check if rooms data exists and handle edge cases
  if (loading) {
    return (
      <div className="text-center text-gray-500">
        Loading featured rooms...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!rooms || rooms.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No featured rooms available.
      </div>
    );
  }

  // Filter to select top 6 featured rooms
  const featuredRooms = rooms.slice(0, 6);

  // Handle "Book Now" button click
  const handleBookNow = (roomId) => {
    window.location.href = `/rooms/${roomId}`;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="section-title">Featured Rooms</h2>
        <p className="section-subtitle">Handpicked stays with premium comfort and exceptional service.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRooms.map((room) => (
          <div
            key={room._id}
            className="card-surface overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            onClick={() => handleBookNow(room._id)}
          >
            <div className="relative">
              <img
                src={room.image || "/default-room.jpg"}
                alt={room.name}
                className="w-full h-60 object-cover"
              />
              <span className="badge-pill absolute top-4 left-4">Top Pick</span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-ink-800">{room.name}</h3>
                <span className="text-sm text-ink-500">${room.price || "--"}/night</span>
              </div>
              <p className="text-ink-600 text-sm">{room.description}</p>
              <div className="flex items-center justify-between text-sm text-ink-500">
                <p>Rating: {room.rating || "4.8"}★</p>
                <p>{room.reviews?.length || room.reviews || 0} reviews</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookNow(room._id);
                }}
                className="btn-primary w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/room" className="btn-outline">
          See All Rooms
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRooms;
