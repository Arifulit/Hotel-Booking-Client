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
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="section-title">Update Booking Date</h1>
        <p className="section-subtitle">Choose a new date for your upcoming stay.</p>
      </div>

      <div className="card-surface p-8 max-w-xl mx-auto">
        <form onSubmit={handleUpdateBooking} className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-ink-700 mb-2 block">Select New Booking Date</label>
            <DatePicker
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              minDate={new Date()}
              name="time"
              dateFormat="yyyy/MM/dd"
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Update Booking Date
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDate;
