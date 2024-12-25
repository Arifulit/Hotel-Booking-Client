import { useLoaderData, useNavigate } from "react-router-dom";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";


const UpdateDate = () => {

  const [bookingDate, setBookingDate] = useState(null);
  const updateData = useLoaderData();
  const { _id } = updateData;
  const navigate = useNavigate();

  const handleUpdateTutorial = async (e) => {
    e.preventDefault();

    // Extract form data
    const form = e.target;
    const updatedTutorial = {
      time: form.time.value,
     
    };

    // Log for debugging
    console.log("Sending updated data:", updatedTutorial);

    // Send PUT request
    fetch(`http://localhost:4000/book-room/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTutorial),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Tutorial updated successfully!", "success");
          navigate("/mytutorials");
        } else {
          Swal.fire("Info!", "No changes were made.", "info");
        }
      })
      .catch((error) => {
        console.error("Error updating tutorial:", error);
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  return (
    <div className="lg:w-3/6 mx-auto mt-20 mb-3">
      <div className="text-center p-10">
        <h1 className="text-5xl text-orange-500 font-bold">Update Tutorial</h1>
        <p className="py-6">Update your tutorial details below!</p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateTutorial} className="card-body">
          {/* User Details */}

          <div>
            <div className="form-control flex-1">
            
                
            <div className="mb-4">
              <label className="text-lg font-semibold mb-2 block">Select Booking Date:</label>
            
            <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                minDate={new Date()}
                name="time"
                dateFormat="yyyy/MM/dd"
                className="w-full p-2 border rounded-lg"
              />
           
            </div>
             
            
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDate;


