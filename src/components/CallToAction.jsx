import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold text-white mb-2">Ready to Restore Your Property?</h2>
            <p className="text-white/90 text-lg">
              Call today for a free estimate and experience the A-1 Spotless difference!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9086479274" className="btn bg-white text-secondary hover:bg-white/90 font-bold flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              (908) 647-9274
            </a>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10 font-bold">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 