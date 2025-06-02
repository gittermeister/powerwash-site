import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="water-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M25,0 C25,0 25,50 50,50 C75,50 75,0 100,0" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0,50 C0,50 25,100 50,100 C75,100 100,50 100,50" fill="none" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Power Washing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Residential, Commercial & Industrial cleaning services in New Jersey and the Tri-State area since 1989.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90 font-bold">
              Get a Free Estimate
            </Link>
            <Link to="/services/roof-cleaning" className="btn border-2 border-white text-white hover:bg-white/10 font-bold">
              Explore Our Services
            </Link>
          </div>
          
          {/* Trusted Since Badge */}
          <div className="mt-12 inline-block bg-white/20 backdrop-blur-sm rounded-lg py-3 px-5">
            <p className="text-white font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Trusted by homeowners & businesses since 1989
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 