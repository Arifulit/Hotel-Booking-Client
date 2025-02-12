// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]); // State to store room data
//   const [loading, setLoading] = useState(true); // State for loading indicator

//   // Fetch all rooms data from the server
//   useEffect(() => {
//     axios
//       .get("https://assignment-hotel-booking-server.vercel.app/rooms") // Replace with your backend URL
//       .then((response) => {
//         setRooms(response.data); // Set room data to state
//         setLoading(false); // Stop loading after data is fetched
//       })
//       .catch((error) => {
//         // console.error("Error fetching rooms:", error);
//         setLoading(false); // Stop loading in case of error
//       });
//   }, []);

//   // Loading state
//   if (loading) {
//     return <p className="text-center text-gray-500">Loading rooms...</p>;
//   }

//   // No rooms available
//   if (!rooms || rooms.length === 0) {
//     return <p className="text-center text-gray-500">No rooms available.</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-6">Rooms</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {rooms.map((room) => (
//           <Link
//             // to={`/rooms/${room._id}`} // Link to room details page
//             to={`/rooms/${room._id}`} // Link to room details page
//             key={room._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
//           >
//             <div className="relative">
//               {/* Room Image */}
//               <img
//                 src={room.image || "/default-room.jpg"} // Fallback image
//                 alt={room.name}
//                 className="w-full h-48 object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{room.name}</h3>
//               <p className="text-gray-600 my-2">{room.description}</p>
//               <p className="text-blue-600 font-bold">Rating: {room.rating}⭐</p>
//               <p className="text-gray-500">
//                 Reviews: {room.reviews ? room.reviews.length : 0}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rooms;



/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]); // State to store room data
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch all rooms data from the server
  useEffect(() => {
    axios
      .get("https://assignment-hotel-booking-server.vercel.app/rooms") // Replace with your backend URL
      .then((response) => {
        setRooms(response.data); // Set room data to state
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        // console.error("Error fetching rooms:", error);
        setLoading(false); // Stop loading in case of error
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500 text-lg">Loading rooms...</p>
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
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Explore Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {rooms.map((room) => (
          <Link
            to={`/rooms/${room._id}`} // Link to room details page
            key={room._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="relative">
              {/* Room Image */}
              <img
                src={room.image || "/default-room.jpg"} // Fallback image
                alt={room.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{room.name}</h3>
              <p className="text-gray-600 mt-2">{room.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-blue-600 font-semibold">Rating: {room.rating}⭐</p>
                <p className="text-gray-500">
                  {room.reviews ? room.reviews.length : 0} Reviews
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
