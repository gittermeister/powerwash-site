import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const residentialServices = [
    { name: 'Roof Cleaning', path: '/services/roof-cleaning' },
    { name: 'Gutter Cleaning & Repair', path: '/services/gutter-cleaning' },
    { name: 'Cleaning Vinyl Siding', path: '/services/vinyl-siding' },
    { name: 'Cleaning Brick & Stucco', path: '/services/brick-stucco' },
    { name: 'Cleaning Aluminum Siding', path: '/services/aluminum-siding' },
    { name: 'Patio Cleaning', path: '/services/patio-cleaning' },
    { name: 'Deck Cleaning & Staining', path: '/services/deck-cleaning' },
    { name: 'Driveway Cleaning', path: '/services/driveway-cleaning' },
    { name: 'Sidewalk Cleaning', path: '/services/sidewalk-cleaning' },
    { name: 'Hot Pressure Washing', path: '/services/hot-pressure-washing' },
  ];

  const commercialServices = [
    { name: 'Exterior Building Cleaning', path: '/services/exterior-building-cleaning' },
    { name: 'Floor Cleaning, Sealing & Coating', path: '/services/floor-cleaning' },
    { name: 'Graffiti Removal', path: '/services/graffiti-removal' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenus}>
            <span className="text-2xl font-bold text-primary">A-1 Spotless</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Home
            </NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  toggleServices();
                }}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20">
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 mb-2">Residential Services</h3>
                    <ul className="space-y-2">
                      {residentialServices.map((service) => (
                        <li key={service.path}>
                          <NavLink 
                            to={service.path} 
                            className={({ isActive }) => 
                              isActive 
                                ? "block text-sm text-primary" 
                                : "block text-sm text-gray-700 hover:text-primary transition-colors"
                            }
                            onClick={closeMenus}
                          >
                            {service.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Commercial Services</h3>
                    <ul className="space-y-2">
                      {commercialServices.map((service) => (
                        <li key={service.path}>
                          <NavLink 
                            to={service.path} 
                            className={({ isActive }) => 
                              isActive 
                                ? "block text-sm text-primary" 
                                : "block text-sm text-gray-700 hover:text-primary transition-colors"
                            }
                            onClick={closeMenus}
                          >
                            {service.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              About Us
            </NavLink>
            
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Testimonials
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Contact Us
            </NavLink>
            
            <NavLink 
              to="/special-offers" 
              className={({ isActive }) => 
                isActive 
                  ? "bg-accent text-dark font-medium px-4 py-2 rounded-md" 
                  : "bg-accent text-dark font-medium px-4 py-2 rounded-md hover:bg-accent/90 transition-colors"
              }
            >
              Special Offers
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-gray-700"
                }
                onClick={closeMenus}
              >
                Home
              </NavLink>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-700"
                  onClick={toggleServices}
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Residential Services</h3>
                    {residentialServices.map((service) => (
                      <NavLink 
                        key={service.path}
                        to={service.path} 
                        className={({ isActive }) => 
                          isActive 
                            ? "block text-sm text-primary py-1" 
                            : "block text-sm text-gray-700 py-1"
                        }
                        onClick={closeMenus}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                    
                    <h3 className="text-sm font-bold text-gray-900 mt-4 mb-1">Commercial Services</h3>
                    {commercialServices.map((service) => (
                      <NavLink 
                        key={service.path}
                        to={service.path} 
                        className={({ isActive }) => 
                          isActive 
                            ? "block text-sm text-primary py-1" 
                            : "block text-sm text-gray-700 py-1"
                        }
                        onClick={closeMenus}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-gray-700"
                }
                onClick={closeMenus}
              >
                About Us
              </NavLink>
              
              <NavLink 
                to="/testimonials" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-gray-700"
                }
                onClick={closeMenus}
              >
                Testimonials
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-gray-700"
                }
                onClick={closeMenus}
              >
                Contact Us
              </NavLink>
              
              <NavLink 
                to="/special-offers" 
                className="bg-accent text-dark font-medium px-4 py-2 rounded-md inline-block"
                onClick={closeMenus}
              >
                Special Offers
              </NavLink>
            </nav>
          </div>
        </div>
      )}

      {/* Phone CTA - Always visible */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-center lg:justify-end">
          <a href="tel:9086479274" className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            Call for a Free Estimate: (908) 647-9274
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 