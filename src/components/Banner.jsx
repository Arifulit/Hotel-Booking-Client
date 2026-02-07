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
    <div className="relative w-full h-[75vh]">
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
              <div className="absolute inset-0 bg-hero-gradient flex items-center">
                {/* Slide Content */}
                <div className="mx-auto max-w-7xl px-6 lg:px-10 text-white w-full">
                  <div className="max-w-2xl">
                    <span className="badge-pill bg-white/20 text-white">Premium experience</span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mt-4 text-white/80">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button
                        onClick={() => navigate("/room")}
                        className="btn-primary"
                      >
                        {slide.buttonText}
                      </button>
                      <button
                        onClick={() => navigate("/contact-address")}
                        className="btn-outline bg-white/10 border-white/30 text-white hover:text-white"
                      >
                        Contact Concierge
                      </button>
                    </div>
                  </div>
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
