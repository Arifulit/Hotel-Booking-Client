const ContactAddress = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="section-title">Contact & Location</h1>
        <p className="section-subtitle">We are here to make your stay seamless and memorable.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="card-surface p-6 space-y-4">
          <div>
            <p className="text-sm text-ink-500">Email</p>
            <p className="text-base font-semibold text-ink-800">support@hotel.com</p>
          </div>
          <div>
            <p className="text-sm text-ink-500">Phone</p>
            <p className="text-base font-semibold text-ink-800">+1 (234) 567-890</p>
          </div>
          <div>
            <p className="text-sm text-ink-500">Address</p>
            <p className="text-base font-semibold text-ink-800">123 Hotel St, City, Country</p>
          </div>
          <div>
            <p className="text-sm text-ink-500">Front Desk Hours</p>
            <p className="text-base font-semibold text-ink-800">24/7 Concierge Support</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <iframe
            className="w-full h-96 rounded-2xl shadow-soft"
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
