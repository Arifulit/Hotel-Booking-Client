
import Banner from "./Banner";
// import ContactAddress from "./ContactAddress";
import FeaturedRooms from "./FeaturedRooms";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="bg-ink-50">
      {/* Banner Section */}
      <Banner />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* <ContactAddress /> */}
        <FeaturedRooms />
        <Services />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
