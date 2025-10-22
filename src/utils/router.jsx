import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import MainLayout from "../MainLayout/MainLayout";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import Rooms from "../components/Rooms";
import Bookings from "../components/Bookings";
import RoomDetails from "../components/RoomDetails";
import ContactAddress from "../components/ContactAddress";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ErrorPage from "../components/ErrorPage";
import UpdateDate from "../components/UpdateDate";
import ReviewModal from "../components/ReviewModal";

import PrivateRoute from "./../components/PrivateRoute copy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,

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
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/room",
        element: <Rooms></Rooms>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },

      {
        path: "/rooms/:roomId",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:4000/rooms/${params.roomId}`
          ),
      },
      {
        path: "/contact-address",
        element: <ContactAddress></ContactAddress>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/updatedate/:id",
        element: <UpdateDate></UpdateDate>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:4000/book-room/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },

      {
        path: "/review/:reviewId",
        element: <ReviewModal></ReviewModal>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:4000/rooms/${params.roomId}`
          ),
      },
    ],
  },
]);

export default router;
