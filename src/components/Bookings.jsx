import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newDate, setNewDate] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book-room");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Failed to fetch bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
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
          .catch((err) => {
            console.error("Error deleting booking:", err.message);
            Swal.fire("Error", "Failed to delete the booking. Try again.", "error");
          });
      }
    });
  };

  // Handle Update Booking Date
  const handleUpdateDate = async (bookingId) => {
    if (!newDate) {
      toast.error("Please select a new date for the booking!");
      return;
    }

    try {
      await axios.put(`http://localhost:4000/book-room/update/${bookingId}`, { newDate });
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === bookingId
            ? { ...booking, bookingDate: newDate.toISOString().split("T")[0] }
            : booking
        )
      );
      toast.success("Booking date updated successfully!");
      setNewDate(null);
      setSelectedBooking(null);
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Failed to update the booking date!");
    }
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
                <button
                  onClick={() => setSelectedBooking(room)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                >
                  Update Date
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings available.</p>
      )}

      {selectedBooking && (
        <div className="modal">
          <div className="modal-content">
            <h3>Update Booking Date</h3>
            <DatePicker
              selected={newDate}
              onChange={(date) => setNewDate(date)}
              dateFormat="yyyy-MM-dd"
              className="p-2 border"
            />
            <button
              onClick={() => handleUpdateDate(selectedBooking._id)}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
            >
              Update Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;