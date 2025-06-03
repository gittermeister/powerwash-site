import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';

const DeckCleaningPage = () => {
  const benefits = [
    {
      title: 'Restore Appearance',
      description: 'Remove years of dirt, mildew, and weathering to revitalize your deck\'s natural beauty.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Extend Deck Life',
      description: 'Proper cleaning and staining protects wood from moisture, UV damage, and decay, adding years to your deck\'s lifespan.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Enhance Safety',
      description: 'Eliminate slippery moss and mildew that create dangerous slip hazards on deck surfaces.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: 'Increase Property Value',
      description: 'A well-maintained deck is a valuable asset that enhances your home\'s curb appeal and market value.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How often should my deck be cleaned and stained?',
      answer: 'For optimal protection, most wood decks should be cleaned annually and stained every 2-3 years. However, this can vary based on your deck\'s exposure to sun, rain, and foot traffic. Decks in full sun or with heavy use may need more frequent maintenance.',
    },
    {
      question: 'What types of decking materials can you clean?',
      answer: 'We clean all types of deck materials including pressure-treated wood, cedar, redwood, pine, composite decking (like Trex, TimberTech, or Azek), and PVC decking. Our cleaning methods are customized for each specific material.',
    },
    {
      question: 'What stain options are available?',
      answer: 'We offer transparent, semi-transparent, semi-solid, and solid stains. Transparent stains show the most wood grain but offer less protection, while solid stains provide maximum protection but cover most of the wood grain. We can help you choose the best option for your needs and preferences.',
    },
    {
      question: 'How long does the deck cleaning and staining process take?',
      answer: 'The time required depends on your deck size, condition, and the services chosen. Typically, cleaning requires 1 day, followed by 1-2 days of drying time before staining, which takes another day. Weather conditions may affect this timeline.',
    },
    {
      question: 'How should I prepare my deck before your arrival?',
      answer: 'Please remove all furniture, grills, planters, and other items from the deck. Secure or cover nearby plants and outdoor items that could be affected by overspray. We\'ll handle the rest of the preparation as part of our service.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deck Cleaning & Staining Services</h1>
          <p className="text-xl text-white/90">Restore beauty and protection to your outdoor deck</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Deck Cleaning & Staining Service?</h2>
              <p className="text-gray-700 mb-6">
                Your deck is not just an extension of your living space—it's an investment in your home 
                and lifestyle. Over time, exposure to sun, rain, snow, and daily use causes wood decks 
                to fade, gray, and deteriorate. Without proper maintenance, even the highest quality 
                decks can suffer from mold, mildew, splintering, and structural damage.
              </p>
              <p className="text-gray-700 mb-6">
                At A-1 Spotless, we provide comprehensive deck cleaning and staining services that not 
                only restore your deck's appearance but also provide vital protection against the elements. 
                Our professional process effectively addresses:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Weathering and graying</strong> – Restore natural wood tones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Mold and mildew</strong> – Eliminate health hazards and staining</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>UV damage</strong> – Prevent future sun damage with proper staining</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Water damage</strong> – Seal against moisture intrusion</span>
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
              <p className="text-gray-500">Deck Cleaning & Staining Image</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Deck Cleaning & Staining</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Deck Cleaning & Staining Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">1. Inspection & Preparation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    We begin with a thorough assessment of your deck's condition, identifying problem areas 
                    and determining the appropriate cleaning and staining approach. We then prepare the area 
                    by protecting surrounding landscaping and covering nearby surfaces.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">2. Deep Cleaning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    Using specialized wood cleaning solutions and appropriate pressure washing techniques, 
                    we remove dirt, mildew, algae, and weathered gray wood fibers. For heavily soiled decks, 
                    we may incorporate gentle scrubbing to ensure thorough cleaning.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">3. Surface Preparation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    After cleaning, we allow the deck to thoroughly dry (typically 1-2 days depending on 
                    weather). We then prepare the surface for staining by addressing any raised wood fibers, 
                    loose nails, or areas needing repair to ensure a smooth, even stain application.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">4. Stain Application</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    We apply your chosen high-quality stain using professional techniques that ensure even 
                    coverage and maximum absorption. Depending on the product and desired finish, we may apply 
                    multiple coats, allowing proper drying time between applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stain Options Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Stain Options</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              We offer a variety of premium stain options to protect your deck while achieving your desired appearance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-amber-100 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Transparent Stain</p>
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent</h3>
                <p className="text-gray-600">
                  Enhances wood's natural beauty with minimal color. Allows maximum wood grain visibility with basic UV and water protection.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-amber-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Semi-Transparent Stain</p>
                </div>
                <h3 className="text-xl font-bold mb-3">Semi-Transparent</h3>
                <p className="text-gray-600">
                  Adds subtle color while still showing wood grain. Provides better UV protection and water resistance.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-amber-300 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Semi-Solid Stain</p>
                </div>
                <h3 className="text-xl font-bold mb-3">Semi-Solid</h3>
                <p className="text-gray-600">
                  More color with less visible wood grain. Excellent protection against moisture and UV damage.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-amber-500 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Solid Stain</p>
                </div>
                <h3 className="text-xl font-bold mb-3">Solid</h3>
                <p className="text-gray-600">
                  Opaque, paint-like finish with maximum protection. Covers wood grain but provides longest-lasting protection.
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">See the Difference</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our deck cleaning and staining services can dramatically transform your outdoor living space. 
              See the results of our professional process.
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
                  <p className="text-gray-500">Patio Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Patio Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Restore beauty and safety to your stone, concrete, or paver patio surfaces.
                  </p>
                  <Link to="/services/patio-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Fence Cleaning Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Fence Cleaning & Staining</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive cleaning and protective staining for all types of wooden fences.
                  </p>
                  <Link to="/services/fence-cleaning" className="text-primary font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Exterior House Washing Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Exterior House Washing</h3>
                  <p className="text-gray-700 mb-4">
                    Soft wash cleaning for all types of home exteriors to remove dirt, mold, and mildew.
                  </p>
                  <Link to="/services/vinyl-siding" className="text-primary font-medium hover:underline">
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

export default DeckCleaningPage; 