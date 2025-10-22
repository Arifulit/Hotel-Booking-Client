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
      .get("http://localhost:4000/book-room")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(() => {
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
          .delete(`http://localhost:4000/book-room/${id}`)
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
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Your Bookings</h1>
      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-6">
                <button
                  className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 w-full md:w-auto"
                  onClick={() => handleCancelBooking(room._id)}
                >
                  Cancel Booking
                </button>
                <Link to={`/updatedate/${room._id}`} className="w-full md:w-auto">
                  <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 w-full">
                    Update Date
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8 text-lg">You have no bookings available.</p>
      )}
    </div>
  );
};

export default Bookings;