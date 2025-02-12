import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bgimg1 from "../assets/images/carousel1.jpg";
import bgimg2 from "../assets/images/carousel2.jpg";
import bgimg3 from "../assets/images/carousel3.jpg";

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Slides data
const slides = [
  {
    image: bgimg1,
    title: "Welcome to Paradise Hotel",
    description: "Experience luxury and comfort in the heart of the city.",
    buttonText: "Explore Rooms",
  },
  {
    image: bgimg2,
    title: "Relax & Unwind",
    description: "Your perfect getaway is just a click away.",
    buttonText: "View Rooms",
  },
  {
    image: bgimg3,
    title: "Book Your Dream Stay",
    description: "Discover top-rated rooms with exclusive offers.",
    buttonText: "Browse Now",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[70vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000, // Slightly faster transitions
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {/* Slide Content */}
                <div className="text-center text-white px-6 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 opacity-90">
                    {slide.description}
                  </p>
                  <button
                    onClick={() => navigate("/room")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
