




import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://assignment-hotel-booking-server.vercel.app/book-room")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  // Handle Cancel Booking
  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://assignment-hotel-booking-server.vercel.app/book-room/${id}`)
          .then(() => {
            setBookings((prev) => prev.filter((booking) => booking._id !== id));
            Swal.fire("Deleted!", "The booking has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire("Error", "Failed to delete the booking. Try again.", "error");
          });
      }
    });
  };

  if (loading) {
    return <p className="text-center text-gray-500 mt-4"><Loading></Loading></p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Bookings</h1>
      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((room) => (
            <div
              key={room._id}
              className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={room.image || "/default-room.jpg"}
                alt={room.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-800">{room.name}</h2>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <p className="font-bold text-gray-700">Price: ${room.price}</p>
              <p className="text-gray-500 mt-2">
                <strong>Booking Date:</strong> {room.bookingDate || "Not Specified"}
              </p>
              <div className="flex space-x-4 mt-6">
                <button
                  className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={() => handleCancelBooking(room._id)}
                >
                  Cancel Booking
                </button>
                <Link to={`/updatedate/${room._id}`}>
                  <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                    Update Date
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">You have no bookings available.</p>
      )}
    </div>
  );
};

export default Bookings;
