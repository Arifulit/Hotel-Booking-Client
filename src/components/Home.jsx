
import Banner from "./Banner";
import ContactAddress from "./ContactAddress";
import FeaturedRooms from "./FeaturedRooms";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {


    return (
    <>

        <div className="text-black"> {/* You can adjust the color as needed */}
          
        <Banner></Banner>
         <ContactAddress></ContactAddress>
        <FeaturedRooms></FeaturedRooms>
        <Services></Services>
        <Testimonials></Testimonials>
        
     
      </div></>
    );
};

export default Home;