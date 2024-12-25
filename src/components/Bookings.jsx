
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]); // State to hold booking data
//   const [loading, setLoading] = useState(true); // State to track loading
//   const [showCancelModal, setShowCancelModal] = useState(false); // Modal visibility for cancel booking
//   // eslint-disable-next-line no-unused-vars
//   const [cancelBookingId, setCancelBookingId] = useState(null); // ID of booking to cancel
//   const [newDate, setNewDate] = useState(null); // New date for the booking update
//   const [selectedBooking, setSelectedBooking] = useState(null); // Selected booking for date update

//   // Fetch booking data from the server
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/book-room");
//         setBookings(response.data); // Update state with fetched data
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         toast.error("Failed to fetch bookings.");
//       } finally {
//         setLoading(false); // Set loading to false
//       }
//     };

    
//     fetchBookings();
//   }, []);

//   // Handle cancel booking
//   const handleCancelBooking = async (bookingId) => {
//     try {
//       await axios.delete(`http://localhost:5000/book-room/${bookingId}`);
//       setBookings(bookings.filter((booking) => booking._id !== bookingId));
//       toast.success("Booking canceled successfully!");
//       setShowCancelModal(false);
//     } catch (error) {
//       console.error("Error canceling booking:", error);
//       toast.error("Failed to cancel the booking!");
//       setShowCancelModal(false);
//     }
//   };

//   // Handle update booking date
//   const handleUpdateDate = async (bookingId) => {
//     if (!newDate) {
//       toast.error("Please select a new date for the booking!");
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5000/book-room/update/${bookingId}`, {
//         newDate,
//       });
//       setBookings(
//         bookings.map((booking) =>
//           booking._id === bookingId
//             ? { ...booking, bookingDate: newDate.toISOString().split("T")[0] }
//             : booking
//         )
//       );
//       toast.success("Booking date updated successfully!");
//       setNewDate(null);
//       setSelectedBooking(null);
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       toast.error("Failed to update the booking date!");
//     }
//   };

//   // Handle review submission
//   const handleSubmitReview = async (bookingId, reviewText) => {
//     try {
//       await axios.post(`http://localhost:5000/reviews`, {
//         bookingId,
//         reviewText,
//       });
//       toast.success("Review posted successfully!");
//     } catch (error) {
//       console.error("Error posting review:", error);
//       toast.error("Failed to post review!");
//     }
//   };

//   if (loading) {
//     return <p className="text-center mt-4">Loading bookings...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Bookings</h1>
//       {bookings.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {bookings.map((room) => (

//             <div
//               key={room._id}
//               className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={room.image}
//                 alt={room.name}
//                 className="rounded-lg mb-4 w-full h-40 object-cover"
//               />
//               <h2 className="text-xl font-semibold">{room.name}</h2>
//               <p className="text-gray-600 mb-2">{room.description}</p>
//               <p className="font-bold text-gray-800">Price: ${room.Price}</p>
//               <p>
//                 <strong>Rating:</strong> {room.Rating}
//               </p>
//               <p>
//                 <strong>Comment:</strong> {room.Comment}
//               </p>
//               <p>
//                 <strong>Booking Date:</strong>{" "}
//                 {room.bookingDate || "Not Specified"}
//               </p>
//               <div className="space-x-2 mt-4">
//                 <button
//                   onClick={() => {
//                     setSelectedBooking(room);
//                     setShowCancelModal(true);
//                   }}
//                   className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => handleSubmitReview(room._id, "Review text")}
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                 >
//                   Review
//                 </button>
//                 <button
//                   onClick={() => setSelectedBooking(room)}
//                   className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
//                 >
//                   Update Date
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No bookings available.</p>
//       )}

//       {/* Update Date Modal */}
//       {selectedBooking && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Update Booking Date</h3>
//             <DatePicker
//               selected={newDate}
//               onChange={(date) => setNewDate(date)}
//               dateFormat="yyyy-MM-dd"
//               className="p-2 border"
//             />
//             <button
//               onClick={() => handleUpdateDate(selectedBooking._id)}
//               className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
//             >
//               Update Date
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Cancel Confirmation Modal */}
//       {showCancelModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Are you sure you want to cancel this booking?</h3>
//             <button
//               onClick={() => handleCancelBooking(cancelBookingId)}
//               className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//             >
//               Yes, Cancel
//             </button>
//             <button
//               onClick={() => setShowCancelModal(false)}
//               className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
//             >
//               No, Keep Booking
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;


import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // State to hold booking data
  const [loading, setLoading] = useState(true); // State to track loading
  const [showCancelModal, setShowCancelModal] = useState(false); // Modal visibility for cancel booking
  const [cancelBookingId, setCancelBookingId] = useState(null); // ID of booking to cancel
  const [newDate, setNewDate] = useState(null); // New date for the booking update
  const [selectedBooking, setSelectedBooking] = useState(null); // Selected booking for date update

  // Fetch booking data from the server
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book-room");
        setBookings(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Failed to fetch bookings.");
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchBookings();
  }, []);

  // Handle cancel booking
  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/book-room/${bookingId}`);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
      toast.success("Booking canceled successfully!");
      setShowCancelModal(false);
    } catch (error) {
      console.error("Error canceling booking:", error);
      toast.error("Failed to cancel the booking!");
      setShowCancelModal(false);
    }
  };

  // Handle update booking date
  const handleUpdateDate = async (bookingId) => {
    if (!newDate) {
      toast.error("Please select a new date for the booking!");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/book-room/update/${bookingId}`, {
        newDate,
      });
      setBookings(
        bookings.map((booking) =>
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

  // Handle review submission
  const handleSubmitReview = async (bookingId, reviewText) => {
    try {
      await axios.post(`http://localhost:5000/reviews`, {
        bookingId,
        reviewText,
      });
      toast.success("Review posted successfully!");
    } catch (error) {
      console.error("Error posting review:", error);
      toast.error("Failed to post review!");
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
              <p className="font-bold text-gray-800">Price: ${room.price}</p> {/* Fixed Price */}
              <p>
                <strong>Rating:</strong> {room.rating} {/* Fixed Rating */}
              </p>
              <p>
                <strong>Comment:</strong> {room.comment} {/* Fixed Comment */}
              </p>
              <p>
                <strong>Booking Date:</strong>{" "}
                {room.bookingDate || "Not Specified"}
              </p>
              <div className="space-x-2 mt-4">
                <button
                  onClick={() => {
                    setSelectedBooking(room);
                    setCancelBookingId(room._id); // Set cancel booking ID
                    setShowCancelModal(true);
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmitReview(room._id, "Review text")}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Review
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

      {/* Update Date Modal */}
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

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to cancel this booking?</h3>
            <button
              onClick={() => handleCancelBooking(cancelBookingId)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Yes, Cancel
            </button>
            <button
              onClick={() => setShowCancelModal(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              No, Keep Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
