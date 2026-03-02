import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { Countdown } from './components/Countdown';
import { CrisisSection } from './components/CrisisSection';
import { StrategicFramework } from './components/StrategicFramework';
import { SpeakersSection } from './components/SpeakersSection';
import { Project2035Section } from './components/Project2035Section';
import { AgendaSection } from './components/AgendaSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <Marquee />
        <Countdown />
        <CrisisSection />
        <StrategicFramework />
        <SpeakersSection />
        <Project2035Section />
        <AgendaSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
