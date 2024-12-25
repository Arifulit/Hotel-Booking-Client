// import React, { useState } from "react";
// import ReactStars from "react-rating-stars-component"; // npm install react-rating-stars-component

// const ReviewModal = ({ isOpen, onClose, onSubmit, username }) => {
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState("");

//     const handleSubmit = () => {
//         if (!rating || !comment) {
//             alert("Please provide both a rating and a comment.");
//             return;
//         }
//         const review = {
//             username,
//             rating,
//             comment,
//             timestamp: new Date().toISOString(),
//         };
//         onSubmit(review);
//         setRating(0);
//         setComment("");
//         onClose();
//     };

//     return isOpen ? (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Give a Review</h2>
//                 <div className="mb-4">
//                     <label className="block font-medium text-gray-700">Username</label>
//                     <input
//                         type="text"
//                         value={username}
//                         readOnly
//                         className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-medium text-gray-700">Rating</label>
//                     <ReactStars
//                         count={5}
//                         onChange={(newRating) => setRating(newRating)}
//                         size={30}
//                         activeColor="#ffd700"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-medium text-gray-700">Comment</label>
//                     <textarea
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         placeholder="Write your review..."
//                         className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-800"
//                     />
//                 </div>
//                 <div className="flex justify-end">
//                     <button
//                         onClick={handleSubmit}
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
//                     >
//                         Submit
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="bg-gray-500 text-white py-2 px-4 rounded-md"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     ) : null;
// };

// export default ReviewModal;
