
// import Banner from "./Banner";
// import ContactAddress from "./ContactAddress";
// import FeaturedRooms from "./FeaturedRooms";
// import Services from "./Services";
// import Testimonials from "./Testimonials";


// const Home = () => {

//     return (
//     <>

//         <div className="text-black"> {/* You can adjust the color as needed */}
     
//         <Banner></Banner>
//          <ContactAddress></ContactAddress>
//         <FeaturedRooms></FeaturedRooms>
//         <Services></Services>
//         <Testimonials></Testimonials>
        
     
//       </div></>
//     );
// };



// export default Home;



import Banner from "./Banner";
import ContactAddress from "./ContactAddress";
import FeaturedRooms from "./FeaturedRooms";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="text-black bg-gray-100">
      {/* Banner Section */}
      <Banner />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        <ContactAddress />
        <FeaturedRooms />
        <Services />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
