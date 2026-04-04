import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { Marquee } from '../components/Marquee';
import { Countdown } from '../components/Countdown';
import { CrisisSection } from '../components/CrisisSection';
import { FeaturedSpeakersSection } from '../components/FeaturedSpeakersSection';
import { StrategicFramework } from '../components/StrategicFramework';
import { SpeakersSection } from '../components/SpeakersSection';
import { OrganizersSection } from '../components/OrganizersSection';
import { Project2035Section } from '../components/Project2035Section';
import { AgendaSection } from '../components/AgendaSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.hash.replace(/^#/, '');
    if (id === 'faq') {
      navigate('/faq', { replace: true });
      return;
    }
    if (!id) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, navigate]);

  return (
    <>
      <HeroSection />
      <Marquee />
      <Countdown />
      <CrisisSection />
      <FeaturedSpeakersSection />
      <StrategicFramework />
      <SpeakersSection />
      <OrganizersSection />
      <Project2035Section />
      <AgendaSection />
      <CTASection />
    </>
  );
}
