
import { useState, useEffect } from "react";
import axios from "axios";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import UpdateDate from './UpdateDate';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [newDate, setNewDate] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedBooking, setSelectedBooking] = useState(null);


  useEffect(() => {
    axios
      .get("http://localhost:4000/book-room")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // console.error("Error fetching tutorials:", error);
        setLoading(false);
      });
  }, []);

  // Handle Delete Booking
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
          // eslint-disable-next-line no-unused-vars
          .catch((err) => {
            // console.error("Error deleting booking:", err.message);
            Swal.fire(
              "Error",
              "Failed to delete the booking. Try again.",
              "error"
            );
          });
      }
    });
  };

 

  if (loading) {
    return <p className="text-center mt-4">Loading bookings...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((room) => (
            <div
              key={room._id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={room.image}
                alt={room.name}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <p className="font-bold text-gray-800">Price: ${room.price}</p>
             
              <p>
                <strong>Booking Date:</strong>{" "}
                {room.bookingDate || "Not Specified"}
              </p>
              <div className="space-x-2 mt-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => handleCancelBooking(room._id)}
                >
                  Delete
                </button>
                <Link to={`/updatedate/${room._id}`}>
                  <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4">
                    Update Date
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings available.</p>
      )}

      {selectedBooking && (
        <div className="modal">
          <div className="modal-content p-4 bg-white shadow rounded-md">
            <h3 className="text-lg font-bold mb-4">Update Booking Date</h3>
            {/* <DatePicker
              selected={newDate}
              onChange={(date) => setNewDate(date)}
              dateFormat="yyyy-MM-dd"
              className="p-2 border rounded w-full"
            /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;


