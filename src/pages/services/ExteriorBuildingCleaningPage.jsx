import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';

const ExteriorBuildingCleaningPage = () => {
  const benefits = [
    {
      title: 'Enhance Appearance',
      description: 'Remove years of dirt, grime, and pollution to restore your building\'s original beauty and professional image.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
    {
      title: 'Protect Your Investment',
      description: 'Prevent damage from mold, mildew, and contaminants that can deteriorate building materials over time.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Healthier Environment',
      description: 'Remove allergens, mold spores, and pollutants that can affect indoor air quality and occupant health.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Increase Property Value',
      description: 'A clean, well-maintained exterior significantly enhances your commercial property\'s market value and tenant appeal.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How often should commercial buildings be cleaned?',
      answer: 'Most commercial buildings benefit from professional exterior cleaning once or twice a year. However, buildings in high-traffic urban areas, industrial zones, or coastal regions may require more frequent cleaning due to increased exposure to pollutants, salt spray, or industrial residues.',
    },
    {
      question: 'What types of building exteriors can you clean?',
      answer: 'We have experience cleaning all types of commercial building exteriors including brick, stone, concrete, stucco, EIFS (synthetic stucco), vinyl siding, aluminum siding, glass, and metal panels. Our cleaning methods are customized for each specific material to ensure safe and effective results.',
    },
    {
      question: 'Is your cleaning process safe for surrounding landscaping?',
      answer: 'Yes, we use environmentally friendly cleaning solutions and take precautions to protect landscaping, including pre-wetting plants and covering sensitive areas when necessary. Our technicians are trained to minimize any potential impact on the surrounding environment.',
    },
    {
      question: 'Can you clean high-rise buildings?',
      answer: 'Yes, we have specialized equipment and trained technicians to safely clean multi-story and high-rise buildings. We use lift equipment, extension poles, or rope access techniques as appropriate for each specific building and situation.',
    },
    {
      question: 'Do you offer maintenance programs for commercial buildings?',
      answer: 'Yes, we offer customized maintenance programs for commercial properties of all sizes. Regular cleaning not only maintains your building\'s appearance but also helps prevent costly repairs by addressing issues before they become serious problems.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exterior Building Cleaning Services</h1>
          <p className="text-xl text-white/90">Professional cleaning solutions for all types of commercial buildings</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Exterior Building Cleaning Service?</h2>
              <p className="text-gray-700 mb-6">
                Your commercial building's exterior is not just your business's face to the world—it's 
                also a significant investment that requires proper maintenance. Over time, buildings 
                accumulate dirt, pollution, mold, mildew, and stains that not only diminish their 
                appearance but can also cause long-term damage to the structure.
              </p>
              <p className="text-gray-700 mb-6">
                At A-1 Spotless, we provide comprehensive exterior building cleaning services tailored 
                to your specific building material and contamination level. Our professional process 
                effectively removes:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Dirt and atmospheric pollution</strong> – Unsightly buildup that dulls appearance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Mold and mildew</strong> – Harmful growth that can damage surfaces and affect health</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Algae and biological growth</strong> – Green or black staining common in damp areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Graffiti and stains</strong> – Unwanted marks that harm professional appearance</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary text-center">
                  Get a Free Estimate
                </Link>
                <a href="tel:9086479274" className="btn btn-secondary text-center">
                  Call (908) 647-9274
                </a>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Exterior Building Cleaning Image</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Exterior Building Cleaning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Building Types Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              We have extensive experience cleaning exterior surfaces of all types of commercial buildings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Office Buildings</h3>
                <p className="text-gray-700">
                  From small professional offices to multi-story corporate headquarters, we maintain 
                  your building's professional appearance while working around your business schedule.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Retail Spaces</h3>
                <p className="text-gray-700">
                  For storefronts, shopping centers, and malls, we help maintain an inviting exterior 
                  that attracts customers and enhances their shopping experience.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Restaurants & Hotels</h3>
                <p className="text-gray-700">
                  We understand the importance of cleanliness in hospitality, providing thorough cleaning 
                  with minimal disruption to your guests and operations.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Healthcare Facilities</h3>
                <p className="text-gray-700">
                  For medical offices, clinics, and hospitals, we deliver sanitizing exterior cleaning 
                  that meets the highest standards of cleanliness.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Industrial Buildings</h3>
                <p className="text-gray-700">
                  We have specialized equipment and solutions to address the unique cleaning challenges 
                  of warehouses, factories, and industrial facilities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Multi-Unit Housing</h3>
                <p className="text-gray-700">
                  For apartments, condominiums, and HOAs, we help maintain property values and 
                  resident satisfaction with regular exterior maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Exterior Building Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">1. Assessment</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    We begin with a thorough assessment of your building's exterior to identify 
                    surface materials, problem areas, and specific contaminants. This allows us to 
                    develop a customized cleaning approach for optimal results.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">2. Preparation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Before cleaning begins, we protect surrounding landscaping, signage, and 
                    sensitive fixtures. We also establish a work plan that minimizes disruption 
                    to your business operations and customers.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">3. Cleaning Application</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Using a combination of soft washing, controlled pressure washing, and specialized 
                    cleaning solutions, we safely remove dirt, mold, mildew, and contaminants from 
                    your building's exterior surfaces without causing damage.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">4. Final Inspection</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    After cleaning is complete, we conduct a thorough inspection to ensure all areas 
                    meet our high standards. We address any remaining issues and review the results 
                    with you to ensure complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">See the Difference</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our exterior building cleaning service can dramatically transform your property's appearance. 
              See how our professional cleaning can revitalize your commercial building.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Before Image</p>
              </div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">After Image</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Floor Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Floor Cleaning, Sealing & Coating</h3>
                  <p className="text-gray-700 mb-4">
                    Professional cleaning and protection for commercial floors of all types.
                  </p>
                  <Link to="/services/floor-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Graffiti Removal Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Graffiti Removal</h3>
                  <p className="text-gray-700 mb-4">
                    Safe and effective removal of graffiti from all types of exterior surfaces.
                  </p>
                  <Link to="/services/graffiti-removal" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Hot Pressure Washing Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hot Pressure Washing</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced hot water pressure washing for tough stains and heavily soiled surfaces.
                  </p>
                  <Link to="/services/hot-pressure-washing" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default ExteriorBuildingCleaningPage; 