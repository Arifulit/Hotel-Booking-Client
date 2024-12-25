
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8 mt-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left: Website Name and Copyright */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4">Visa Explorer</h3>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Visa Explorer. All Rights Reserved.
                        </p>
                    </div>

                    {/* Center: Contact Information */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Email: <a href="mailto:support@visaexplorer.com" className="text-yellow-300">support@visaexplorer.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="text-yellow-300">+1 (234) 567-890</a></li>
                            <li>Address: 123 Visa St, City, Country</li>
                        </ul>
                    </div>

                    {/* Right: Social Media Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M22 12a10 10 0 1 0-11.142 9.94V15.85h-2.6v-3.85h2.6v-2.9c0-3.1 1.81-4.85 4.6-4.85 1.35 0 2.6.1 2.6.1v2.8h-1.6c-1.5 0-2.2.9-2.2 1.9v2.3h3.5l-.6 3.85h-2.9v6.1A9.99 9.99 0 0 0 22 12z"></path>
                                </svg>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M23 3a10.1 10.1 0 0 1-2.9.8 4.9 4.9 0 0 0 2.2-2.7c-.8.4-1.7.6-2.7.7-1-.9-2.4-1.4-3.9-1.4-3 0-5.5 2.4-5.5 5.3 0 .4.1.8.2 1.2-4.7-.2-8.9-2.5-11.7-6.2-.5.9-.8 2-.8 3.1 0 2.1 1.1 3.9 2.8 5-.7 0-1.4-.2-2-.5.1 2.2 1.6 4 3.7 4.4-1 .3-2.2.4-3.3.4-.3 0-.6 0-.9-.1 1.9 1.2 4.1 1.9 6.5 1.9 7.8 0 12-7.4 12-13.8 0-.2 0-.5 0-.7A8.5 8.5 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M16.5 0h-9C6 0 6 0 6 0h-3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3h-3c0 0 0 0-0.5 0zm1.5 18.5h-11v-13h11v13zm-5.5-6h-6v1h6v-1zm0-2h-6v1h6v-1zm0-2h-6v1h6v-1zm4-5.5c-.9 0-1.5.6-1.5 1.5 0 .9.6 1.5 1.5 1.5 1 0 1.5-.6 1.5-1.5 0-.9-.6-1.5-1.5-1.5zm.5-1.5h-2c-1.3 0-2.5 1.2-2.5 2.5v2.5h-3v-2.5c0-1.3-1.2-2.5-2.5-2.5h-2c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-15c0-.3-.2-.5-.5-.5z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
