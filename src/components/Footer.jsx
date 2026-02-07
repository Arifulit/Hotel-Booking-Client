import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ink-900 text-white pt-16 pb-10 mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left: Website Name & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-3 text-white">Hotel Explorer</h3>
            <p className="text-sm text-ink-200">
              &copy; {new Date().getFullYear()} Hotel Explorer. All Rights Reserved.
            </p>
            <p className="text-sm text-ink-400 mt-4">
              Curated stays, premium amenities, and a seamless booking experience built for you.
            </p>
          </div>

          {/* Center: Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-3 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-ink-200">
              <li>
                Email:
                <a href="mailto:support@hotel.com" className="text-white hover:text-brand-200 ml-1">
                  support@hotel.com
                </a>
              </li>
              <li>
                Phone:
                <a href="tel:+1234567890" className="text-white hover:text-brand-200 ml-1">
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: 123 Hotel St, City, Country</li>
            </ul>
          </div>

          {/* Right: Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-3 text-white">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              
              <a href="https://www.facebook.com/arifuliit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-brand-200 transition duration-300">
                <FaFacebook size={30} />
              </a>

              <a href="https://github.com/Arifulit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-brand-200 transition duration-300">
                <FaGithub size={30} />
              </a>

              <a href="https://www.linkedin.com/in/ariful-islam15" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-brand-200 transition duration-300">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Navigation Links */}
        <div className="mt-10 text-center">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-ink-300">
            <li>
              <a href="#home" className="hover:text-white transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition duration-300">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition duration-300">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
