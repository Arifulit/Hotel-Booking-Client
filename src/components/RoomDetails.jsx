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
    if (room) {
      setSelectedRoom(room);
    }
  }, [room]);

  useEffect(() => {
    if (selectedRoom) {
      const roomId = selectedRoom._id || selectedRoom.id;
      if (!roomId) {
        return;
      }
      fetch(`http://localhost:4000/rooms/${roomId}`)
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
      const response = await fetch("http://localhost:4000/book-room", {
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="section-title">Room Details</h1>
        <p className="section-subtitle">Discover the perfect space for your next getaway.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="card-surface overflow-hidden">
          <img
            src={room.image || "/default-room.jpg"}
            alt={room.name}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {selectedRoom && (
          <div className="card-surface p-8 space-y-6">
            <div>
              <span className="badge-pill">Signature stay</span>
              <h2 className="text-3xl font-semibold text-ink-900 mt-3">{selectedRoom.name}</h2>
              <p className="text-ink-600 mt-3">{selectedRoom.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500">
              <p>Rating: {selectedRoom.rating || "4.9"}★</p>
              <p>Reviews: {selectedRoom.reviews || 0}</p>
              <p className={selectedRoom.available ? "text-emerald-600" : "text-rose-500"}>
                {selectedRoom.available ? "Available" : "Not Available"}
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-ink-500">Price per night</p>
                <p className="text-3xl font-semibold text-ink-900">${selectedRoom.price}</p>
              </div>
              <button
                onClick={handleBookNow}
                className={`btn-primary ${
                  selectedRoom.available ? "" : "opacity-60 cursor-not-allowed"
                }`}
                disabled={!selectedRoom.available}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-ink-900/50 flex justify-center items-center z-50">
          <div className="card-surface max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            <div className="space-y-2 text-sm text-ink-600">
              <p><strong>Room:</strong> {selectedRoom.name}</p>
              <p><strong>Price:</strong> ${selectedRoom.price}</p>
              <p><strong>Description:</strong> {selectedRoom.description}</p>
            </div>
            <div className="mt-4">
              <label className="text-sm font-semibold mb-2 block text-ink-700">Select Booking Date</label>
              <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                className="input-field"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="btn-outline"
              >
                Close
              </button>
              <button
                onClick={handleConfirmBooking}
                className="btn-primary"
                disabled={loading}
              >
                {loading ? "Booking..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
