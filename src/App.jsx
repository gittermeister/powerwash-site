import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import SpecialOffersPage from './pages/SpecialOffersPage';
import RoofCleaningPage from './pages/services/RoofCleaningPage';
import GutterCleaningPage from './pages/services/GutterCleaningPage';
import VinylSidingPage from './pages/services/VinylSidingPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/special-offers" element={<SpecialOffersPage />} />
          <Route path="/services/roof-cleaning" element={<RoofCleaningPage />} />
          <Route path="/services/gutter-cleaning" element={<GutterCleaningPage />} />
          <Route path="/services/vinyl-siding" element={<VinylSidingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
