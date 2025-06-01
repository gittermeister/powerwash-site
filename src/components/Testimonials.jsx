import { useState } from 'react';

const Testimonials = () => {
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
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary/10">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-700 mb-6">"{testimonials[activeIndex].text}"</p>

            {/* Author */}
            <div className="flex items-center">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].source}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/testimonials" className="btn btn-primary">Read More Testimonials</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 