import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

const SpecialOffersPage = () => {
  const currentOffers = [
    {
      id: 1,
      title: 'Spring Cleaning Special',
      description: 'Get your home ready for spring! Book any exterior house washing service and receive 10% off gutter cleaning.',
      validUntil: 'May 31, 2023',
      code: 'SPRING2023',
    },
    {
      id: 2,
      title: 'New Customer Discount',
      description: 'First-time customers receive $50 off any service over $300.',
      validUntil: 'Ongoing',
      code: 'WELCOME50',
    },
    {
      id: 3,
      title: 'Referral Rewards',
      description: 'Refer a friend and you both receive $25 off your next service.',
      validUntil: 'Ongoing',
      code: 'REFER25',
    },
    {
      id: 4,
      title: 'Complete Package Deal',
      description: 'Book house washing, roof cleaning, and driveway cleaning together and save 15% on the total price.',
      validUntil: 'June 30, 2023',
      code: 'COMPLETE15',
    },
    {
      id: 5,
      title: 'Senior Citizen Discount',
      description: 'Seniors (65+) receive 10% off all services.',
      validUntil: 'Ongoing',
      code: 'SENIOR10',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-white/90">Exclusive deals and discounts on our professional power washing services</p>
        </div>
      </div>

      {/* Special Offers Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Promotions</h2>
            <p className="text-gray-600">
              Take advantage of these limited-time offers to save on our professional power washing services. 
              Mention these offers when you call to schedule your service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-bold">{offer.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Valid until: {offer.validUntil}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-primary font-bold">Code: {offer.code}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to Redeem Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">How to Redeem</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <p className="text-gray-700">
                    <strong>Choose your offer:</strong> Select the special offer that best fits your needs from the options above.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <p className="text-gray-700">
                    <strong>Contact us:</strong> Call <a href="tel:9086479274" className="text-primary hover:underline">(908) 647-9274</a> or 
                    <Link to="/contact" className="text-primary hover:underline"> fill out our contact form</Link>.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <p className="text-gray-700">
                    <strong>Mention the offer:</strong> Provide the offer code when scheduling your service.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <p className="text-gray-700">
                    <strong>Enjoy the savings:</strong> The discount will be applied to your final invoice.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Offers cannot be combined with any other promotions or discounts unless specifically stated.</li>
                <li>• Offer must be mentioned at the time of booking to be valid.</li>
                <li>• Some restrictions may apply based on service area, property size, or service type.</li>
                <li>• Ongoing offers may be discontinued at any time without notice.</li>
                <li>• Limited-time offers are valid only through the specified expiration date.</li>
                <li>• A-1 Spotless reserves the right to modify or cancel promotions at any time.</li>
              </ul>
            </div>
          </div>

          {/* Seasonal Maintenance Plans */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Seasonal Maintenance Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4 text-center">
                  <h3 className="text-xl font-bold">Basic Plan</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Annual house washing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Gutter cleaning (once per year)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>10% discount on additional services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Priority scheduling</span>
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary w-full text-center">Get Started</Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary transform scale-105">
                <div className="bg-primary text-white p-4 text-center relative">
                  <span className="absolute top-0 right-0 bg-accent text-xs text-dark font-bold px-2 py-1 transform translate-x-2 -translate-y-1/2">POPULAR</span>
                  <h3 className="text-xl font-bold">Premium Plan</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">$499</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Bi-annual house washing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Gutter cleaning (twice per year)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Annual driveway cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>15% discount on additional services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Priority scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Free annual inspection</span>
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary w-full text-center">Get Started</Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4 text-center">
                  <h3 className="text-xl font-bold">Ultimate Plan</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">$799</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Quarterly house washing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Quarterly gutter cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Bi-annual driveway & sidewalk cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Annual roof cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>20% discount on additional services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>VIP priority scheduling</span>
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary w-full text-center">Get Started</Link>
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

export default SpecialOffersPage; 