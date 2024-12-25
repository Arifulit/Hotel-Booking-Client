const ContactAddress = () => {
    return (
      <div className="contact-address flex-space-around">
        <address>
          <h4> Address:</h4>
          <p> Amdala</p>
          <p> Shivaloya, Manikgonj, Bangladesh</p>
          <br />
          <span> Call: </span>
          <a href="tel:+001762407385">+001762407385</a>
        </address>
  
        <iframe
          className="contact__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105851.51528677193!2d89.78135664926685!3d23.831588204279115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe176bae6fab59%3A0xf4126dc9d392f5f6!2sAmdala%20Bazar!5e0!3m2!1sen!2sbd!4v1678385821783!5m2!1sen!2sbd"
          style={{ border: 0, width: '100%', height: '400px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default ContactAddress;
  

