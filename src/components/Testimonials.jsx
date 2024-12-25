
const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'The stay was amazing! The staff was friendly and the facilities were top-notch.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      feedback: 'Had a wonderful time. Highly recommend for a weekend getaway.',
      rating: 4,
    },
    {
      name: 'Alice Johnson',
      feedback: 'A perfect place to relax and rejuvenate. Great value for money!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section py-12 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item p-6 bg-white shadow-lg rounded-lg w-80">
              <p className="text-lg italic text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <div className="flex justify-between items-center">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-yellow-500">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
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
