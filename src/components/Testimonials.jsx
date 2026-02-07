const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ariful Islam',
      feedback: 'The stay was amazing! The staff was friendly and the facilities were top-notch.',
      rating: 5,
    },
    {
      name: 'Abdus Salam',
      feedback: 'Had a wonderful time. Highly recommend for a weekend getaway.',
      rating: 4,
    },
    {
      name: 'Udoy Talukdar',
      feedback: 'A perfect place to relax and rejuvenate. Great value for money!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section w-full">
      <div className="text-center mb-10">
        <h2 className="section-title">What Our Guests Say</h2>
        <p className="section-subtitle">Real experiences from travelers around the world.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="card-surface p-8 transition-transform transform hover:-translate-y-1"
          >
            <p className="text-base italic text-ink-600 mb-6">“{testimonial.feedback}”</p>
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-ink-900">{testimonial.name}</div>
              <div className="flex">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-amber-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                ))}
                {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-ink-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
