import CallToAction from '../components/CallToAction';

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About A-1 Spotless</h1>
          <p className="text-xl text-white/90">Professional Power Washing Services Since 1989</p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Since 1989, A-1 Spotless Inc. has been providing top-quality power washing services to residential, 
                commercial, and property management customers throughout New Jersey and the Tri-State area.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small family business has grown into one of the most trusted names in exterior 
                cleaning services. Our commitment to quality, attention to detail, and exceptional customer service 
                has earned us a reputation for excellence in the industry.
              </p>
              <p className="text-gray-700 mb-4">
                We take pride in our work and treat every property as if it were our own. Our team of experienced 
                professionals is dedicated to delivering outstanding results that exceed our customers' expectations.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional exterior cleaning services that enhance the beauty, value, and longevity of 
                  our customers' properties while delivering an outstanding customer experience from start to finish.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">Why Choose A-1 Spotless?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700"><strong>Experience:</strong> Over 30 years in the industry</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700"><strong>Licensed & Insured:</strong> Fully licensed (#13VH006650000) and insured for your protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700"><strong>Professional Team:</strong> Trained technicians with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700"><strong>Quality Equipment:</strong> State-of-the-art equipment and environmentally friendly cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700"><strong>Satisfaction Guaranteed:</strong> We're not happy until you're happy with our work</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-4">Our Service Areas</h3>
              <p className="text-gray-700 mb-4">
                We proudly serve residential, commercial, and property management customers throughout New Jersey and the Tri-State area, including:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <ul className="space-y-1">
                    <li className="text-gray-700">• Bridgewater</li>
                    <li className="text-gray-700">• Basking Ridge</li>
                    <li className="text-gray-700">• Bernardsville</li>
                    <li className="text-gray-700">• Warren</li>
                    <li className="text-gray-700">• Watchung</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li className="text-gray-700">• Bedminster</li>
                    <li className="text-gray-700">• Far Hills</li>
                    <li className="text-gray-700">• Peapack-Gladstone</li>
                    <li className="text-gray-700">• Somerset County</li>
                    <li className="text-gray-700">• And surrounding areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Perez</h3>
                  <p className="text-primary font-medium mb-4">Owner & Operator</p>
                  <p className="text-gray-700 mb-4">
                    With over 30 years of experience in the power washing industry, Robert founded A-1 Spotless with a 
                    commitment to quality and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Kevin</h3>
                  <p className="text-primary font-medium mb-4">Senior Technician</p>
                  <p className="text-gray-700 mb-4">
                    Known for his meticulous attention to detail and exceptional work ethic, Kevin has been with 
                    A-1 Spotless for over 10 years.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Our Crew</h3>
                  <p className="text-primary font-medium mb-4">Professional Technicians</p>
                  <p className="text-gray-700 mb-4">
                    Our team of trained professionals is committed to delivering the highest quality service and 
                    ensuring complete customer satisfaction.
                  </p>
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

export default AboutPage; 