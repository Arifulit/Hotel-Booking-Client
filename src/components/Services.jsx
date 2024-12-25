
const Services = () => {
  const services = [
    {
      title: 'Premium Room Service',
      description: 'Enjoy a luxurious stay with 24/7 room service and personalized offerings.',
      icon: '💼',
    },
    {
      title: 'Free Wi-Fi',
      description: 'Stay connected with fast and free Wi-Fi across the hotel premises.',
      icon: '📶',
    },
    {
      title: 'Swimming Pool Access',
      description: 'Relax and unwind in our beautiful outdoor swimming pool.',
      icon: '🏊',
    },
  ];

  return (
    <section className="services-section py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-item p-6 bg-white shadow-lg rounded-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
