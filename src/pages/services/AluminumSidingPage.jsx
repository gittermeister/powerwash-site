import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';

const AluminumSidingPage = () => {
  const benefits = [
    {
      title: 'Restore Appearance',
      description: 'Remove years of dirt, oxidation, and chalking to restore your aluminum siding\'s original color and shine.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Prevent Deterioration',
      description: 'Regular cleaning removes corrosive contaminants and prevents premature aging and deterioration of aluminum surfaces.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Increase Property Value',
      description: 'Clean, well-maintained aluminum siding significantly improves your home\'s curb appeal and market value.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
    {
      title: 'Specialized Cleaning',
      description: 'Our aluminum-specific cleaning methods address unique issues like oxidation and chalking that standard cleaning can\'t handle.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How often should aluminum siding be cleaned?',
      answer: 'For optimal appearance and protection, we recommend having your aluminum siding professionally cleaned every 1-2 years. Homes in coastal areas or industrial environments may benefit from more frequent cleaning.',
    },
    {
      question: 'What causes the white chalky residue on aluminum siding?',
      answer: 'This chalky residue is oxidation, a natural process that occurs when aluminum is exposed to air and moisture. Over time, the aluminum\'s surface coating breaks down and creates this powdery substance. Our specialized cleaning process removes oxidation and helps slow its recurrence.',
    },
    {
      question: 'Can you restore faded aluminum siding?',
      answer: 'Yes, our specialized cleaning process can significantly improve the appearance of faded aluminum siding by removing oxidation, dirt, and contaminants. While extreme fading may not be completely reversed, most homes show dramatic improvement after our cleaning service.',
    },
    {
      question: 'Is your cleaning process safe for my landscaping?',
      answer: 'Yes, we use environmentally friendly cleaning solutions and take precautions to protect your landscaping, including pre-wetting plants and covering sensitive areas when necessary.',
    },
    {
      question: 'Will power washing damage my aluminum siding?',
      answer: 'High-pressure washing can dent aluminum siding and force water behind the panels. Our cleaning method uses controlled pressure levels specifically calibrated for aluminum surfaces to ensure effective cleaning without causing damage.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminum Siding Cleaning Services</h1>
          <p className="text-xl text-white/90">Restore shine and color to your aluminum siding with our specialized cleaning techniques</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Aluminum Siding Cleaning Service?</h2>
              <p className="text-gray-700 mb-6">
                Aluminum siding presents unique cleaning challenges that require specialized knowledge and 
                techniques. Over time, aluminum siding develops oxidation (a chalky white residue), becomes 
                dull, and collects dirt, mold, and mildew. Our professional aluminum siding cleaning service 
                addresses these specific issues to restore your home's appearance and protect your investment.
              </p>
              <p className="text-gray-700 mb-6">
                At A-1 Spotless, we use cleaning methods specifically designed for aluminum surfaces that effectively remove:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Oxidation</strong> – The chalky white residue that forms on aluminum</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Mold and mildew</strong> – Biological growth that thrives in shaded areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Environmental contaminants</strong> – Dirt, pollen, and air pollution residue</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Spider webs and insect nests</strong> – Unsightly debris that collects in corners</span>
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
              <p className="text-gray-500">Aluminum Siding Cleaning Image</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Aluminum Siding Cleaning</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Aluminum Siding Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">1. Assessment & Preparation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    We begin with a thorough assessment of your aluminum siding's condition to identify 
                    areas of oxidation, mold growth, and accumulated dirt. We then prepare the surrounding 
                    area by protecting landscaping and covering sensitive fixtures.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">2. Specialized Cleaning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Using aluminum-specific cleaning solutions and controlled pressure washing techniques, 
                    we safely remove oxidation, dirt, and biological growth from your siding. Our method 
                    restores shine without damaging the aluminum surface.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">3. Rinse & Inspection</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    After cleaning, we thoroughly rinse your siding to remove all cleaning solution residue. 
                    We then conduct a detailed inspection to ensure all areas are properly cleaned and 
                    restored to their original condition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">See the Difference</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our aluminum siding cleaning service can dramatically transform the appearance of your home. 
              See how our professional cleaning can restore shine and color to your aluminum siding.
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
                  <p className="text-gray-500">Vinyl Siding Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Vinyl Siding Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Professional cleaning for vinyl siding to remove dirt, mold, and mildew.
                  </p>
                  <Link to="/services/vinyl-siding" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Brick & Stucco Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Brick & Stucco Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized cleaning solutions for delicate brick and stucco surfaces.
                  </p>
                  <Link to="/services/brick-stucco" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Exterior Building Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Exterior Building Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive cleaning solutions for all types of building exteriors.
                  </p>
                  <Link to="/services/exterior-building-cleaning" className="text-primary font-medium hover:underline">
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

export default AluminumSidingPage; 