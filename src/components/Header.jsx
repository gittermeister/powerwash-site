import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-primary font-heading text-2xl font-bold">A-1 Spotless</span>
            <span className="ml-2 text-dark text-sm font-medium">Power Washing</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <a href="/" className="px-3 py-2 text-dark hover:text-primary transition-colors">Home</a>
          <div className="group relative">
            <button className="px-3 py-2 text-dark hover:text-primary transition-colors flex items-center">
              Residential Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <a href="/roof-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Roof Cleaning</a>
                <a href="/gutter-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Gutter Cleaning & Repair</a>
                <a href="/vinyl-siding" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Cleaning Vinyl Siding</a>
                <a href="/brick-stucco" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Cleaning Brick & Stucco</a>
                <a href="/aluminum-siding" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Cleaning Aluminum Siding</a>
                <a href="/patio-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Patio Cleaning</a>
                <a href="/deck-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Deck Cleaning & Staining</a>
                <a href="/driveway-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Driveway Cleaning</a>
                <a href="/sidewalk-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Sidewalk Cleaning</a>
                <a href="/hot-pressure-washing" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Hot Pressure Washing</a>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="px-3 py-2 text-dark hover:text-primary transition-colors flex items-center">
              Commercial & Industrial
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <a href="/exterior-building-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Exterior Building Cleaning</a>
                <a href="/floor-cleaning" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Floor Cleaning, Sealing & Coating</a>
                <a href="/graffiti-removal" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100">Graffiti Removal</a>
              </div>
            </div>
          </div>
          <a href="/about" className="px-3 py-2 text-dark hover:text-primary transition-colors">About Us</a>
          <a href="/testimonials" className="px-3 py-2 text-dark hover:text-primary transition-colors">Testimonials</a>
          <a href="/contact" className="px-3 py-2 text-dark hover:text-primary transition-colors">Contact Us</a>
          <a href="/special-offers" className="px-3 py-2 text-dark hover:text-primary transition-colors">Special Offers</a>
        </nav>

        {/* Phone Number - Desktop */}
        <div className="hidden md:flex items-center">
          <a href="tel:9086479274" className="flex items-center text-primary font-medium">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            (908) 647-9274
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark hover:text-primary" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-2">
            <a href="/" className="block py-2 text-dark hover:text-primary">Home</a>
            <details className="group">
              <summary className="py-2 text-dark hover:text-primary cursor-pointer flex items-center">
                Residential Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="pl-4">
                <a href="/roof-cleaning" className="block py-2 text-dark hover:text-primary">Roof Cleaning</a>
                <a href="/gutter-cleaning" className="block py-2 text-dark hover:text-primary">Gutter Cleaning & Repair</a>
                <a href="/vinyl-siding" className="block py-2 text-dark hover:text-primary">Cleaning Vinyl Siding</a>
                <a href="/brick-stucco" className="block py-2 text-dark hover:text-primary">Cleaning Brick & Stucco</a>
                <a href="/aluminum-siding" className="block py-2 text-dark hover:text-primary">Cleaning Aluminum Siding</a>
                <a href="/patio-cleaning" className="block py-2 text-dark hover:text-primary">Patio Cleaning</a>
                <a href="/deck-cleaning" className="block py-2 text-dark hover:text-primary">Deck Cleaning & Staining</a>
                <a href="/driveway-cleaning" className="block py-2 text-dark hover:text-primary">Driveway Cleaning</a>
                <a href="/sidewalk-cleaning" className="block py-2 text-dark hover:text-primary">Sidewalk Cleaning</a>
                <a href="/hot-pressure-washing" className="block py-2 text-dark hover:text-primary">Hot Pressure Washing</a>
              </div>
            </details>
            <details className="group">
              <summary className="py-2 text-dark hover:text-primary cursor-pointer flex items-center">
                Commercial & Industrial
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="pl-4">
                <a href="/exterior-building-cleaning" className="block py-2 text-dark hover:text-primary">Exterior Building Cleaning</a>
                <a href="/floor-cleaning" className="block py-2 text-dark hover:text-primary">Floor Cleaning, Sealing & Coating</a>
                <a href="/graffiti-removal" className="block py-2 text-dark hover:text-primary">Graffiti Removal</a>
              </div>
            </details>
            <a href="/about" className="block py-2 text-dark hover:text-primary">About Us</a>
            <a href="/testimonials" className="block py-2 text-dark hover:text-primary">Testimonials</a>
            <a href="/contact" className="block py-2 text-dark hover:text-primary">Contact Us</a>
            <a href="/special-offers" className="block py-2 text-dark hover:text-primary">Special Offers</a>
            
            {/* Phone Number - Mobile */}
            <a href="tel:9086479274" className="flex items-center py-2 text-primary font-medium">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              (908) 647-9274
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 