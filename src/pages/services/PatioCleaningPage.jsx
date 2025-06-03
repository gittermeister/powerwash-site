import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';

const PatioCleaningPage = () => {
  const benefits = [
    {
      title: 'Restore Appearance',
      description: 'Remove years of dirt, grime, moss, and stains to bring back your patio\'s original beauty.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Improve Safety',
      description: 'Eliminate slippery moss, algae, and mildew that create dangerous slip hazards on your patio.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Extend Patio Lifespan',
      description: 'Prevent damage from mold, mildew, and weed growth that can crack and deteriorate patio surfaces.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Enhance Outdoor Living',
      description: 'Create a cleaner, more inviting outdoor space for entertaining friends and family.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How often should I have my patio professionally cleaned?',
      answer: 'For most homeowners, we recommend professional patio cleaning once a year, typically in spring. However, patios in heavily wooded areas or those with significant shade may benefit from cleaning twice a year to prevent moss and algae buildup.',
    },
    {
      question: 'What types of patio surfaces can you clean?',
      answer: 'We clean all types of patio surfaces including concrete, pavers, brick, natural stone (including flagstone, slate, and limestone), tile, and composite decking. Our cleaning methods are adjusted based on the specific material to ensure safe and effective results.',
    },
    {
      question: 'Can you remove oil stains from my concrete patio?',
      answer: 'Yes, we can remove most oil stains from concrete patios using specialized cleaning solutions designed specifically for oil and grease removal. For older, set-in stains, we may recommend additional treatments for optimal results.',
    },
    {
      question: 'Is your cleaning process safe for surrounding plants and landscaping?',
      answer: 'Yes, we use environmentally friendly cleaning solutions and take precautions to protect your landscaping, including pre-wetting plants and covering sensitive areas when necessary.',
    },
    {
      question: 'How long does it take to clean a patio?',
      answer: 'The time required depends on the size of your patio, the type of surface material, and the level of dirt and contamination. Most residential patio cleaning projects can be completed in 2-4 hours.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patio Cleaning Services</h1>
          <p className="text-xl text-white/90">Restore beauty and safety to your outdoor living spaces</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Patio Cleaning Service?</h2>
              <p className="text-gray-700 mb-6">
                Your patio is an extension of your home—a space for relaxation, entertaining, and enjoying the 
                outdoors. But over time, patios accumulate dirt, mold, mildew, and stains that not only diminish 
                their appearance but can also create slippery, unsafe conditions and cause permanent damage to 
                the surface.
              </p>
              <p className="text-gray-700 mb-6">
                At A-1 Spotless, we use specialized cleaning techniques tailored to your specific patio material 
                to safely and effectively remove:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Moss and algae</strong> – Slippery growth that creates safety hazards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Mold and mildew</strong> – Black spots that can damage surfaces and affect health</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Stains</strong> – From food, beverages, rust, leaf tannins, and more</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Dirt and grime</strong> – Accumulated debris that dulls your patio's appearance</span>
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
              <p className="text-gray-500">Patio Cleaning Image</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Patio Cleaning</h2>
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

          {/* Process Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Patio Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">1. Inspection & Pre-Treatment</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    We begin with a thorough inspection of your patio to identify the surface material, 
                    problem areas, and specific contaminants. Then we apply appropriate pre-treatment 
                    solutions to break down dirt, biological growth, and stains for more effective cleaning.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">2. Surface-Appropriate Cleaning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Using equipment calibrated specifically for your patio's material, we apply the 
                    appropriate level of pressure combined with specialized cleaning solutions to 
                    safely remove contaminants without damaging the surface.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">3. Rinse & Final Touches</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    After cleaning, we thoroughly rinse your patio to remove all cleaning solution 
                    residue and loosened contaminants. For stubborn stains, we may apply targeted 
                    spot treatments. Finally, we inspect the entire area to ensure a consistent, 
                    clean appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">See the Difference</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our patio cleaning service can dramatically transform your outdoor living space. 
              See how our professional cleaning can reveal your patio's original beauty.
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
                  <p className="text-gray-500">Deck Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Deck Cleaning & Staining</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive deck cleaning and staining services to restore and protect your wooden deck.
                  </p>
                  <Link to="/services/deck-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Driveway Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Driveway Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Professional cleaning to remove oil stains, dirt, and growth from concrete and paver driveways.
                  </p>
                  <Link to="/services/driveway-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Sidewalk Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sidewalk Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Restore safety and appearance to your walkways with our specialized sidewalk cleaning service.
                  </p>
                  <Link to="/services/sidewalk-cleaning" className="text-primary font-medium hover:underline">
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

export default PatioCleaningPage; 