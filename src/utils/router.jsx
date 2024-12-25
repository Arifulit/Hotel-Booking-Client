import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../components/MainLayout";

import Home from "../components/Home";


import Login from "../components/Login";
import Register from "../components/Register";
import MainLayout from "../MainLayout/MainLayout";
// import MyAddVisas from "../components/AddEquipment";
// import AddEquipment from "../components/AddEquipment";
// import MyAddVisa from "../components/AddVisa";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import Rooms from "../components/Rooms";
// import MyBookings from "../components/MyBookings";
import Bookings from "../components/Bookings";
// import RoomDetails from "../components/RoomDetails";
// import RoomsPage from "../components/RoomPage";
import RoomDetails from "../components/RoomDetails";
import ContactAddress from "../components/ContactAddress";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
// import FeaturedRooms from "../components/FeaturedRooms";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,


        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () =>fetch('https://assignment-sunflower-server.vercel.app/visa') 

            },
            
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Register></Register>,

            },
          
            {
                path:"/my-profile",
                element:<MyProfile></MyProfile>       
           } ,
           {
            path:"/update-profile",
            element:<UpdateProfile></UpdateProfile>
           },
           {
            path:"/room",
            element:<Rooms></Rooms>
           },
           {
            path:"/bookings",
            element:<Bookings></Bookings>
           },
        
        {
            path: "/rooms/:roomId",
            element: <RoomDetails />,
            loader: () =>
              fetch(`http://localhost:5000/rooms`),
          },
          {
            path:"/contact-address",
            element:<ContactAddress></ContactAddress>
          },
          {
            path:"/services",
            element:<Services></Services>
          },
          {
            path:"testimonials",
            element:<Testimonials></Testimonials>
          }

        ]
    }
])

export default router;