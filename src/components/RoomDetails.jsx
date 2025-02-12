/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const room = useLoaderData();
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingDate, setBookingDate] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (selectedRoom) {
      fetch(`https://assignment-hotel-booking-server.vercel.app/rooms/${selectedRoom.id}`)
        .then((response) => response.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [selectedRoom]);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

  const handleBookNow = () => {
    if (!selectedRoom?.available) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This room is not available for booking.",
      });
      return;
    }
    setShowModal(true);
  };

  const handleConfirmBooking = async () => {
    if (!bookingDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a booking date.",
      });
      return;
    }

    if (!selectedRoom.available) {
      Swal.fire({
        icon: "error",
        title: "Already Booked!",
        text: "This room is already booked.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://assignment-hotel-booking-server.vercel.app/book-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: selectedRoom.name,
          image: selectedRoom.image,
          name: selectedRoom.name,
          price: selectedRoom.price,
          comment: selectedRoom.comment,
          rating: selectedRoom.rating,
          description: selectedRoom.description,
          bookingDate,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: errorData.message || "Failed to book the room.",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Booking Confirmed!",
        text: `Your booking for "${selectedRoom.name}" has been successfully confirmed.`,
      }).then(() => {
        navigate("/bookings");
      });

      setShowModal(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an issue booking the room. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Room Details</h1>
      <ul className="space-y-4">
        <li
          key={room.id}
          className={`p-4 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer ${
            room.available ? "hover:bg-green-100" : "hover:bg-red-100"
          }`}
          onClick={() => handleSelectRoom(room)}
        >
          <h2 className="text-xl font-semibold">{room.name}</h2>
          <p>{room.description}</p>
          <p className="text-gray-700">Price: ${room.price} per night</p>
          <p className={room.available ? "text-green-500" : "text-red-500"}>
            {room.available ? "Available" : "Not Available"}
          </p>
        </li>
      </ul>

      {selectedRoom && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Selected Room</h2>
          <img
            src={selectedRoom.image}
            alt={selectedRoom.name}
            className="w-full rounded-lg mb-4 shadow-lg"
          />
          <p><strong>Name:</strong> {selectedRoom.name}</p>
          <p><strong>Description:</strong> {selectedRoom.description}</p>
          <p><strong>Price:</strong> ${selectedRoom.price}</p>
          <p>
            <strong>Availability:</strong> {selectedRoom.available ? "Available" : "Not Available"}
          </p>

          <button
            onClick={handleBookNow}
            className={`bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 mt-4 ${
              selectedRoom.available ? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!selectedRoom.available}
          >
            Book Now
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            <p><strong>Room:</strong> {selectedRoom.name}</p>
            <p><strong>Price:</strong> ${selectedRoom.price}</p>
            <p><strong>Description:</strong> {selectedRoom.description}</p>
            <div className="mb-4">
              <label className="text-lg font-semibold mb-2 block">Select Booking Date:</label>
              <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleConfirmBooking}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                disabled={loading}
              >
                {loading ? "Booking..." : "Confirm"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
