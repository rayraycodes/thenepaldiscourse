import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { Marquee } from '../components/Marquee';
import { Countdown } from '../components/Countdown';
import { CrisisSection } from '../components/CrisisSection';
import { StrategicFramework } from '../components/StrategicFramework';
import { SpeakersSection } from '../components/SpeakersSection';
import { OrganizersSection } from '../components/OrganizersSection';
import { Project2035Section } from '../components/Project2035Section';
import { AgendaSection } from '../components/AgendaSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace(/^#/, '');
    if (!id) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <>
      <HeroSection />
      <Marquee />
      <Countdown />
      <CrisisSection />
      <StrategicFramework />
      <SpeakersSection />
      <OrganizersSection />
      <Project2035Section />
      <AgendaSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
