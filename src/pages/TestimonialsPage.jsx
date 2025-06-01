import CallToAction from '../components/CallToAction';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Irene D.',
      source: 'Google Review',
      text: 'A-1 Spotless was wonderful. My house is sparkling clean. Kevin was meticulous, hard working and extremely polite. My house has never looked so clean. This service is by far the best I have used-including doing it ourselves. Thank you A-1!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Elise K.',
      source: 'Google Review',
      text: 'Robert Perez, the owner was highly professional and very accommodating. Kevin did the exterior house power washing and was top notch. He was thorough and meticulous. We already recommended their service to friends.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Carolyn J.',
      source: 'Google Review',
      text: 'They were not only professional and performed quality work, they both presented very nice personalities! They performed miracles on our composite deck that had not been cleaned in 8 years….they made it look like new! Thank you A-1; we\'re definitely using them again!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Bradley C.',
      source: 'Google Review',
      text: 'It was a pleasure working with A-1 Spotless. They are very professional in every manner. Robert was attentive and responsive to my questions. His workers explained the process step by step regarding powerwashing the house, deck and swingset. Will definitely use them again.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Peter M.',
      source: 'Google Review',
      text: 'These guys are very friendly and did an amazing job cleaning my roof! They made it look brand new!',
      rating: 5,
    },
    {
      id: 6,
      name: 'Cathy B.',
      source: 'Google Review',
      text: 'Deck looks like new-did a fantastic job--came when scheduled--will use again when we do our siding--thanks so much Robert--job well done!',
      rating: 5,
    },
    {
      id: 7,
      name: 'Celena G.',
      source: 'Google Review',
      text: 'Rob was excellent! He got back to us right away and had our house and fence power washed within a week. The price was very fair (he threw in cleaning our cement patio as well) and everything looked amazing when he was done!! He walked me through afterwards and offered great feedback and advice as to how often he should come back. He is definitely well versed in his craft and does a great job! We definitely will use him again when the time comes!',
      rating: 5,
    },
    {
      id: 8,
      name: 'Mary Beth T.',
      source: 'Google Review',
      text: 'Excellent Service. Have used them 3 times. Great job, plus extras like the gutter cleaning and repair. Prompt, neat, clean, convenient estimate that shows up in your email. Great pricing too. You won\'t be disappointed. A-1 means First Class Service!',
      rating: 5,
    },
    {
      id: 9,
      name: 'Brian G.',
      source: 'Google Review',
      text: 'Absolutely amazing job! Thanks Rob.',
      rating: 5,
    },
    {
      id: 10,
      name: 'Wood Kingdom East and Mae Shed and Playground Ltd',
      source: 'Google Review',
      text: 'These guys are the absolute best guys ever. I have had my deck and roof power washed before and it always looked better than before. I\'ve even done it myself before and it came out okay. When A-1 Spotless did it, it was done right. I saw right away that this was the way a power wash job should be done, and should look. They had the right equipment, they were on time, they worked cleanly, and they respected our property as if it were theirs. Great job and I would always recommend them for any power wash job.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-white/90">See what our satisfied customers have to say about our services</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">
              We're proud of the work we do and the relationships we've built with our customers. 
              Here are some of the kind words they've shared about their experience with A-1 Spotless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                {/* Quote Icon */}
                <div className="text-primary/10 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>

                {/* Author */}
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

          {/* Leave a Review Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h3>
            <p className="text-gray-600 mb-8 text-center">
              We appreciate your feedback! If you've had a positive experience with A-1 Spotless, 
              please consider leaving a review on one of these platforms:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.google.com/search?q=a-1+spotless+bridgewater+nj&oq=a-1+spotless+bridgewater+nj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Google
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a 
                href="https://www.yelp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.16 12.594l-4.995 1.933c-.95.368-1.738-.575-1.366-1.526.342-.88 1.397-1.387 2.25-1.387h4.727c1.432 0 1.813 1.774.384 2.98h-1v-2zm-7.307 3.514c-.362-.97.43-1.886 1.373-1.886h4.976c1.365 0 1.704 1.982-.387 2.98l-4.95 1.93c-.94.367-1.706-.613-1.337-1.52l.324-.503zm1.336-7.29l4.976-1.935c.958-.37 1.706.602 1.337 1.52l-.325.505c-.37.94-1.39 1.387-2.25 1.387H13c-1.347 0-1.705-1.944.387-2.98l.802.503zM5.95 7.76c.53.342.883.918.883 1.58v5.48c0 1.04-.843 1.882-1.883 1.882H3.882c-1.04 0-1.883-.843-1.883-1.882V9.34c0-1.04.843-1.882 1.883-1.882H4.95v.3zm-2.05 7.06c0 .347.277.625.625.625h.625c.347 0 .625-.278.625-.625v-5.48c0-.348-.278-.626-.625-.626H4.52c-.348 0-.626.278-.626.625v5.48z" />
                </svg>
                Yelp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default TestimonialsPage; 