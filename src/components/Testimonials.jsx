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
    <section className="testimonials-section w-full py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item bg-white shadow-lg rounded-xl p-8 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <p className="text-lg italic text-gray-700 mb-6">{testimonial.feedback}</p>
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-900">{testimonial.name}</div>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="text-yellow-500"
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
                      className="text-gray-300"
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
      </div>
    </section>
  );
};

export default Testimonials;
