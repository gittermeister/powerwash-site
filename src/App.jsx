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
import BrickStuccoPage from './pages/services/BrickStuccoPage';
import AluminumSidingPage from './pages/services/AluminumSidingPage';
import PatioCleaningPage from './pages/services/PatioCleaningPage';
import DeckCleaningPage from './pages/services/DeckCleaningPage';
import DrivewayCleaning from './pages/services/DrivewayCleaning';
import SidewalkCleaningPage from './pages/services/SidewalkCleaningPage';
import HotPressureWashingPage from './pages/services/HotPressureWashingPage';
import ExteriorBuildingCleaningPage from './pages/services/ExteriorBuildingCleaningPage';

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
          <Route path="/services/brick-stucco" element={<BrickStuccoPage />} />
          <Route path="/services/aluminum-siding" element={<AluminumSidingPage />} />
          <Route path="/services/patio-cleaning" element={<PatioCleaningPage />} />
          <Route path="/services/deck-cleaning" element={<DeckCleaningPage />} />
          <Route path="/services/driveway-cleaning" element={<DrivewayCleaning />} />
          <Route path="/services/sidewalk-cleaning" element={<SidewalkCleaningPage />} />
          <Route path="/services/hot-pressure-washing" element={<HotPressureWashingPage />} />
          <Route path="/services/exterior-building-cleaning" element={<ExteriorBuildingCleaningPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
