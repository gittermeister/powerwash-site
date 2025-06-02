import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

const SpecialOffersPage = () => {
  const testimonials = [
    {
      name: 'Irene D.',
      text: 'A-1 Spotless was wonderful. My house is sparkling clean. Kevin was meticulous, hard working and extremely polite. My house has never looked so clean. This service is by far the best I have used-including doing it ourselves. Thank you A-1!',
      source: 'Google Review',
    },
    {
      name: 'Elise K.',
      text: 'Robert Perez, the owner was highly professional and very accommodating. Kevin did the exterior house power washing and was top notch. He was thorough and meticulous. We already recommended their service to friends.',
      source: 'Google Review',
    },
    {
      name: 'Carolyn J.',
      text: 'They were not only professional and performed quality work, they both presented very nice personalities! They performed miracles on our composite deck that had not been cleaned in 8 years….they made it look like new! Thank you A-1; we\'re definitely using them again!',
      source: 'Google Review',
    },
    {
      name: 'Bradley C.',
      text: 'It was a pleasure working with A-1 Spotless. They are very professional in every manner. Robert was attentive and responsive to my questions. His workers explained the process step by step regarding powerwashing the house, deck and swingset. Will definitely use them again.',
      source: 'Google Review',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-white/90">Save money with these limited time offers</p>
        </div>
      </div>

      {/* Special Offers Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">We Make It Simple to Book & Pay Today and On Your Schedule.</h2>
              <h3 className="text-2xl font-bold mb-6">Make Your Home Look Beautiful.</h3>
              <p className="text-gray-700 mb-6">
                Don't stress. We'll take care of the mess.
              </p>
              <p className="text-gray-700 mb-8">
                A-1 Spotless Inc. are experts at cleaning vinyl siding and have served customers throughout New Jersey and the Tri-State area. 
                Since 1989, homeowners like you have trusted our team of professionals to maintain their properties. 
                We are reliable, we have professional equipment, and we'll take the utmost care of your home and property.
              </p>
              <h2 className="text-3xl font-bold text-primary mb-4">Give Your Home Some TLC!</h2>
              <p className="text-xl font-bold mb-8">Save Money With These Special Offers…</p>
              <p className="text-gray-700">
                Book Online and Pay today and take advantage of these limited time savings available to residents within 
                Somerset, Hunterdon, Morris, Middlesex, and Western Union County, New Jersey. For other areas, please contact our office.
              </p>
            </div>

            {/* House Washing Offers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* North Side Only */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg font-bold text-center">North Side of Home (only)</h3>
                  <div className="bg-gray-200 h-48 flex items-center justify-center mt-4">
                    <p className="text-gray-500">North Side Example Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">$259.00*</p>
                    <p className="text-sm text-gray-600">(259.00+17.16 NJ Sales Tax=276.16)</p>
                  </div>
                  <p className="text-gray-700 mb-6 text-center">
                    Soft Wash includes washing of all Vinyl Siding, Fascia, Trim, Gutter Exteriors, Eaves & Soffits.
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    SCHEDULE / BUY NOW
                  </Link>
                </div>
              </div>

              {/* Up to 1,499 sq. ft. Home */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg font-bold text-center">Up to 1,499 sq. ft. Home</h3>
                  <div className="bg-gray-200 h-48 flex items-center justify-center mt-4">
                    <p className="text-gray-500">Small Home Example Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">$359.00*</p>
                    <p className="text-sm text-gray-600">(359.00+23.78 NJ Sales Tax=382.78)</p>
                  </div>
                  <p className="text-gray-700 mb-6 text-center">
                    Soft Wash includes washing of all Vinyl Siding, Trim, Fascia, Gutter Exteriors, Shutters, Doors, Front Stoop & Steps
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    SCHEDULE / BUY NOW
                  </Link>
                </div>
              </div>

              {/* 1,500 – 1,999 sq. ft. Home */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg font-bold text-center">1,500 – 1,999 sq. ft. Home</h3>
                  <div className="bg-gray-200 h-48 flex items-center justify-center mt-4">
                    <p className="text-gray-500">Medium Home Example Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">$429.00*</p>
                    <p className="text-sm text-gray-600">(429.00+28.42 NJ Sales Tax=457.42)</p>
                  </div>
                  <p className="text-gray-700 mb-6 text-center">
                    Soft Wash includes washing of all Vinyl Siding, Trim, Fascia, Gutter Exteriors, Shutters, Doors, Front Stoop & Steps
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    SCHEDULE / BUY NOW
                  </Link>
                </div>
              </div>

              {/* 2,000 – 2,399 sq. ft. Home */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg font-bold text-center">2,000 – 2,399 sq. ft. Home</h3>
                  <div className="bg-gray-200 h-48 flex items-center justify-center mt-4">
                    <p className="text-gray-500">Medium-Large Home Example Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">$499.00*</p>
                    <p className="text-sm text-gray-600">(499.00+33.06 NJ Sales Tax=532.06)</p>
                  </div>
                  <p className="text-gray-700 mb-6 text-center">
                    Soft Wash includes washing of all Vinyl Siding, Trim, Fascia, Gutter Exteriors, Shutters, Doors, Front Stoop & Steps
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    SCHEDULE / BUY NOW
                  </Link>
                </div>
              </div>

              {/* 2,400 – 2,799 sq. ft. Home */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg font-bold text-center">2,400 – 2,799 sq. ft. Home</h3>
                  <div className="bg-gray-200 h-48 flex items-center justify-center mt-4">
                    <p className="text-gray-500">Large Home Example Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">$579.00*</p>
                    <p className="text-sm text-gray-600">(579.00+38.36 NJ Sales Tax=617.36)</p>
                  </div>
                  <p className="text-gray-700 mb-6 text-center">
                    Soft Wash includes washing of all Vinyl Siding, Trim, Fascia, Gutter Exteriors, Shutters, Doors, Front Stoop & Steps
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    SCHEDULE / BUY NOW
                  </Link>
                </div>
              </div>

              {/* 2,800 – 3,199 sq. ft. Home */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg font-bold text-center">2,800 – 3,199 sq. ft. Home</h3>
                  <div className="bg-gray-200 h-48 flex items-center justify-center mt-4">
                    <p className="text-gray-500">Extra Large Home Example Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">$639.00*</p>
                    <p className="text-sm text-gray-600">(639.00+42.33 NJ Sales Tax=681.33)</p>
                  </div>
                  <p className="text-gray-700 mb-6 text-center">
                    Soft Wash includes washing of all Vinyl Siding, Trim, Fascia, Gutter Exteriors, Shutters, Doors, Front Stoop & Steps
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    SCHEDULE / BUY NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h3 className="text-xl font-bold mb-4">We also provide the following services:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-bold">Paver sealing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-bold">Polymeric sand application</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-bold">Deck sealing and staining</span>
                </li>
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold mb-4">*Important Offer Terms and Conditions:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Price plus NJ sales tax.</li>
                <li>• Offer valid for residences in the following New Jersey Counties: Somerset, Hunterdon, Morris, Middlesex and Western Union County. If you are out of area, please call for pricing.</li>
                <li>• All vinyl siding washes are covered by our 2-year guarantee.***</li>
                <li>• No on-site estimate required, unless otherwise specified.</li>
                <li>• Online Book & Pay only for Vinyl Siding.</li>
                <li>• Call or Email us for all other exterior surfaces.</li>
                <li>• Photographs of homes are for reference only.</li>
              </ul>
              <p className="mt-4 text-gray-700">
                ** Exact square footage of home is used in calculation of final price (for homes over 3500 square feet). Prices above apply to services when booked online only at housewashonline.com and do not include sales tax.
              </p>
              <p className="mt-4 text-gray-700">
                *** TWO YEAR GUARANTEE – Vinyl Siding only will be free of mildew and/or moss for two years after washing. If mildew and/or moss reappear before the two-year period has expired, A-1 Spotless Inc. will re-wash vinyl siding at no cost to the homeowner.
              </p>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Call for a free estimate: (908) 647-9274</h3>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default SpecialOffersPage; 