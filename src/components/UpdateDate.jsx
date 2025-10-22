import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

const UpdateDate = () => {
  const [bookingDate, setBookingDate] = useState(null);
  const updateData = useLoaderData();
  const { _id } = updateData;
  const navigate = useNavigate();

  const handleUpdateBooking = async (e) => {
    e.preventDefault();

    // Extract form data
    const form = e.target;
    const updatedBooking = {
      time: form.time.value,
    };

    // Send PUT request
    fetch(`http://localhost:4000/book-room/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Booking date updated successfully!", "success");
          navigate("/bookings");
        } else {
          Swal.fire("Info!", "No changes were made.", "info");
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        Swal.fire("Error!", "Something went wrong. Try again.", "error");
      });
  };

  return (
    <div className="lg:w-2/3 mx-auto mt-16 mb-8">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-indigo-700">Update Booking Date</h1>
        <p className="mt-4 text-xl text-gray-600">Choose a new date for your booking</p>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto">
        <form onSubmit={handleUpdateBooking} className="space-y-6">
          {/* Date Picker Section */}
          <div className="form-control">
            <label className="text-lg font-medium text-gray-700 mb-3 block">Select New Booking Date:</label>
            <DatePicker
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              minDate={new Date()}
              name="time"
              dateFormat="yyyy/MM/dd"
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Update Booking Date
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDate;
