const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Services',
      description: 'Regular upkeep is the key to maintaining the value of your biggest investment.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
      services: [
        'Roof Cleaning',
        'Gutter Cleaning & Repair',
        'Cleaning Vinyl Siding',
        'Cleaning Brick & Stucco',
        'Cleaning Aluminum Siding',
        'Patio Cleaning',
        'Deck Cleaning & Staining',
        'Driveway Cleaning',
        'Sidewalk Cleaning',
      ],
      link: '/residential-services',
    },
    {
      id: 2,
      title: 'Commercial Services',
      description: 'Outward appearances are important to your business. We are experts at keeping your property clean and professional.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd"></path>
        </svg>
      ),
      services: [
        'Exterior Building Cleaning',
        'Floor Cleaning, Sealing & Coating',
        'Graffiti Removal',
        'Drive Thru & Dumpster Cleaning',
      ],
      link: '/commercial-services',
    },
    {
      id: 3,
      title: 'Property Management',
      description: 'Need someone to help keep your property clean and safe? We\'ve worked with many commercial building operators and community associations.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      ),
      services: [
        'Professional Power Washing',
        'Professional Painting',
        'Handyman Services',
        'Snow Removal',
      ],
      link: '/property-management',
    },
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide top-quality power washing services for residential, commercial, and property management clients throughout New Jersey and the Tri-State area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6 bg-primary text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.services.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.link} className="btn btn-primary w-full text-center">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 