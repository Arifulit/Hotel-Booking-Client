const ContactAddress = () => {
  return (
    <div className="container w-full mx-auto p-6">
      <div className="flex flex-col gap-8">
        {/* Contact Information */}
        {/* <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-indigo-600">Contact Us</h3>
          <address className="text-lg text-gray-700">
            <div>
              <h4 className="font-semibold text-xl text-gray-800">Address:</h4>
              <p>Amdala</p>
              <p>Shivaloya, Manikgonj, Bangladesh</p>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Call:</span>
              <a
                href="tel:+001762407385"
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
              >
                +001762407385
              </a>
            </div>
          </address>
        </div> */}

        {/* Map Section */}
        <div>
          <iframe
            className="w-full h-96 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105851.51528677193!2d89.78135664926685!3d23.831588204279115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe176bae6fab59%3A0xf4126dc9d392f5f6!2sAmdala%20Bazar!5e0!3m2!1sen!2sbd!4v1678385821783!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
