import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('Thank you for your request! We will contact you shortly.');
  };

  return (
    <div className="relative">
      {/* Top Phone Banner */}
      <div className="bg-primary text-white py-2 text-center">
        <p className="text-lg">
          <span className="font-medium">Call for a Free Estimate:</span> <a href="tel:9086479274" className="font-bold">(908) 647-9274</a>
        </p>
      </div>

      {/* Hero Section with Full-Width Background Image */}
      <div className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden">
        {/* Background Image - Team of Workers */}
        <div className="absolute inset-0 z-0">
          {/* This is a placeholder for the team image - replace with your actual image */}
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop')`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 100, 0.3)'
          }}></div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Power Washing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Residential, Commercial & Industrial cleaning services in New Jersey and the Tri-State area since 1989.
            </p>
            
            {/* Request Estimate Button */}
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-accent/90 text-dark font-bold text-lg py-4 px-8 rounded-md transition-colors duration-300"
              >
                Request Estimate
              </button>
            </div>
            
            {/* Trusted Since Badge */}
            <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm rounded-lg py-3 px-5">
              <p className="text-white font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Trusted by homeowners & businesses since 1989
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div id="quote-form" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Request a Free Quote</h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-lg mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-lg mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-lg mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 text-lg mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="roof-cleaning">Roof Cleaning</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="vinyl-siding">Vinyl Siding Cleaning</option>
                    <option value="brick-stucco">Brick & Stucco Cleaning</option>
                    <option value="aluminum-siding">Aluminum Siding Cleaning</option>
                    <option value="patio-cleaning">Patio Cleaning</option>
                    <option value="deck-cleaning">Deck Cleaning & Staining</option>
                    <option value="driveway-cleaning">Driveway Cleaning</option>
                    <option value="sidewalk-cleaning">Sidewalk Cleaning</option>
                    <option value="hot-pressure-washing">Hot Pressure Washing</option>
                    <option value="exterior-building-cleaning">Exterior Building Cleaning</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-lg mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-4 rounded-md transition-colors duration-300 text-lg"
              >
                Get Your Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 