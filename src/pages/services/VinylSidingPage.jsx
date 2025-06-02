import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';

const VinylSidingPage = () => {
  const benefits = [
    {
      title: 'Restore Appearance',
      description: 'Remove years of dirt, grime, mildew, and algae to make your home look fresh and well-maintained.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Extend Siding Lifespan',
      description: 'Regular cleaning prevents mold, mildew, and algae from breaking down your siding material, saving you money on premature replacement.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Increase Property Value',
      description: 'A clean exterior significantly improves curb appeal, which can increase your home\'s market value.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
    {
      title: 'Healthier Environment',
      description: 'Eliminate mold, mildew, and allergens from your home\'s exterior for a healthier living environment.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How often should vinyl siding be cleaned?',
      answer: 'For optimal appearance and longevity, we recommend having your vinyl siding professionally cleaned once a year. Homes in areas with heavy tree coverage or high humidity may benefit from more frequent cleaning.',
    },
    {
      question: 'Is your cleaning process safe for my landscaping?',
      answer: 'Yes, we use environmentally friendly cleaning solutions that are safe for your plants, pets, and property. We also take precautions to protect your landscaping during the cleaning process.',
    },
    {
      question: 'Will power washing damage my vinyl siding?',
      answer: 'Our soft wash technique uses low pressure that won\'t damage your vinyl siding. High-pressure washing can cause water to get behind siding, leading to mold and water damage, but our professional approach avoids these risks.',
    },
    {
      question: 'How long does it take to clean vinyl siding?',
      answer: 'The time required depends on the size of your home and the level of dirt and contamination. Most residential homes can be completed in 2-4 hours.',
    },
    {
      question: 'Do you offer a guarantee?',
      answer: 'Yes, we stand behind our work with a 2-year guarantee on vinyl siding cleaning. If mildew or moss reappears within two years of our service, we\'ll re-wash the affected areas at no cost to you.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vinyl Siding Cleaning Services</h1>
          <p className="text-xl text-white/90">Restore your home's appearance with our safe and effective cleaning solutions</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Vinyl Siding Cleaning Service?</h2>
              <p className="text-gray-700 mb-6">
                Over time, your home's vinyl siding collects dirt, pollen, mildew, and algae that not only diminishes 
                your home's appearance but can also cause premature deterioration of the siding material. Our professional 
                vinyl siding cleaning service removes these contaminants safely and effectively, restoring your home's 
                appearance and protecting your investment.
              </p>
              <p className="text-gray-700 mb-6">
                At A-1 Spotless, we use a specialized "soft wash" technique that combines environmentally friendly 
                cleaning solutions with low-pressure application to safely remove:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Dirt and grime</strong> – Built-up environmental contaminants</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Mold and mildew</strong> – Unsightly black spots and health hazards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Algae and moss</strong> – Green growth that can damage siding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Pollen and allergens</strong> – Seasonal buildup that affects air quality</span>
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
              <p className="text-gray-500">Vinyl Siding Cleaning Image</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Vinyl Siding Cleaning</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Vinyl Siding Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">1. Pre-Treatment & Preparation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    We begin by protecting your landscaping and exterior fixtures. Then we apply a specialized 
                    pre-treatment solution to break down dirt, mold, and algae, making the cleaning process more 
                    effective and efficient.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">2. Soft Wash Cleaning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Using our soft wash system, we apply a gentle, low-pressure rinse that safely removes dirt, 
                    mold, and algae without damaging your vinyl siding. This approach is much safer than high-pressure 
                    washing, which can force water behind siding panels.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">3. Rinse & Inspection</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    After cleaning, we thoroughly rinse your siding to remove any remaining cleaning solution. 
                    We then conduct a detailed inspection to ensure all areas are clean and free from contaminants, 
                    addressing any spots that may need additional attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">See the Difference</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our vinyl siding cleaning service delivers dramatic results that transform the appearance of your home. 
              See how our professional cleaning can make your home look like new again.
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
                  <p className="text-gray-500">Roof Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Roof Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Remove harmful algae, moss, and lichen from your roof to extend its lifespan and improve your home's appearance.
                  </p>
                  <Link to="/services/roof-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Gutter Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gutter Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Keep your gutters flowing freely and protect your home from water damage with our professional gutter cleaning services.
                  </p>
                  <Link to="/services/gutter-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Deck Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Deck Cleaning & Staining</h3>
                  <p className="text-gray-700 mb-4">
                    Restore and protect your deck with our professional cleaning and staining services.
                  </p>
                  <Link to="/services/deck-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default VinylSidingPage; 