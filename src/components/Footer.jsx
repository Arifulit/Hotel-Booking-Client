import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left: Website Name & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold mb-3 text-yellow-300">Hotel Explorer</h3>
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} Hotel Explorer. All Rights Reserved.
            </p>
          </div>

          {/* Center: Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-3 text-yellow-300">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Email: 
                <a href="mailto:support@hotel.com" className="text-yellow-300 hover:underline ml-1">
                  support@hotel.com
                </a>
              </li>
              <li>Phone: 
                <a href="tel:+1234567890" className="text-yellow-300 hover:underline ml-1">
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: 123 Hotel St, City, Country</li>
            </ul>
          </div>

          {/* Right: Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-3 text-yellow-300">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              
              <a href="https://www.facebook.com/arifuliit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-yellow-300 transition duration-300">
                <FaFacebook size={30} />
              </a>

              <a href="https://github.com/Arifulit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-yellow-300 transition duration-300">
                <FaGithub size={30} />
              </a>

              <a href="https://www.linkedin.com/in/ariful-islam15" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-yellow-300 transition duration-300">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Navigation Links */}
        <div className="mt-8 text-center">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#home" className="text-sm opacity-70 hover:text-yellow-300 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="text-sm opacity-70 hover:text-yellow-300 transition duration-300">About Us</a>
            </li>
            <li>
              <a href="#services" className="text-sm opacity-70 hover:text-yellow-300 transition duration-300">Services</a>
            </li>
            <li>
              <a href="#contact" className="text-sm opacity-70 hover:text-yellow-300 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
