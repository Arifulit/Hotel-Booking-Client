
# Hotel Booking Platform  

A modern Hotel Booking Platform designed to provide users with a seamless experience for discovering and booking hotel rooms. This platform ensures an engaging, responsive, and secure interface for users to make reservations with ease.  

## Live URL  
[Visit the Live Website](https://hotel-booking-2ecdd.web.app/)  

---

## Project Purpose  
The purpose of this project is to demonstrate the ability to build a fully functional hotel booking platform. It highlights skills in React development, secure user authentication, and responsive design.  

---

## Key Features  

### Homepage 🏡  
- **Banner Section**: Features a slider with a title, short description, and a "Rooms" button.  
- **Interactive Map**: Displays hotel location using `react-leaflet`.  
- **Featured Rooms**: Highlights six top-rated rooms with images and descriptions.  
- **Special Offers**: Pop-up showcasing discounts and promotions.  
- **User Reviews**: Displays authentic reviews sorted by timestamp.  

### User Authentication 📝  
- Secure login and registration using email/password.  
- Google or GitHub login integration.  
- Password validation with descriptive error messages.  
- Sweet alert/toast messages for successful login or registration.  

### Rooms Page 🛌  
- Displays rooms fetched from the database in card or table format.  
- Filter rooms by price range.  
- Displays review counts for each room.  
- Redirects to Room Details on click.  

### Room Details Page 🏡  
- Detailed room information and reviews.  
- Booking functionality with date picker and room summary modal.  
- Ensures room availability upon booking.  

### My Bookings Page 🛌  
- Displays the logged-in user's bookings.  
- Options to cancel bookings with confirmation modal.  
- Update booking dates.  
- Add reviews for booked rooms.  

### Other Features  
- **JWT Authentication**: Token-based access control for private routes.  
- **404 Page**: Custom-designed page with a "Back to Home" button.  
- **Optional Features**:  
  - Booking date duration.  
  - Image gallery for visualization.  
  - "About Us" and "Contact Us" pages.  

---

## Packages Used  

- **React**: For frontend development.  
- **Firebase**: For user authentication.  
- **MongoDB**: Database for storing room and user data.  
- **React Leaflet**: For displaying maps.  
- **Moment.js**: For date comparisons.  
- **JWT**: Secure user sessions and route protection.  
- **Framer Motion**: Adding animations to enhance UI/UX.  
- **Helmet**: Managing metadata and improving SEO.  

---

## Development Highlights  

- **Responsive Design**: Ensured compatibility on mobile, tablet, and desktop devices.  
- **Secure Configuration**: Protected Firebase and MongoDB credentials using environment variables.  
- **Descriptive Commits**:  

---

## Deployment  

- Hosted on [Vercel].  
- Backend deployed on [Render].  
- Properly configured CORS, ensuring no errors in production.  

---

## Future Improvements  

- Toggle between card and table views for rooms.  
- Sort by offers and date range on the Rooms page.  
- Add "About Us" and "Contact Us" pages.  

