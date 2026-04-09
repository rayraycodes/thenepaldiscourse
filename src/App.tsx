import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopOnRoute } from './components/ScrollToTopOnRoute';
import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { ApplyToAttendPage } from './pages/ApplyToAttendPage';
import { FAQPage } from './pages/FAQPage';
import { ItineraryPage } from './pages/ItineraryPage';

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <ScrollToTopOnRoute />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/apply" element={<ApplyToAttendPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
