import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { Marquee } from '../components/Marquee';
import { Countdown } from '../components/Countdown';
import { FeaturedSpeakersSection } from '../components/FeaturedSpeakersSection';
import { SpeakersSection } from '../components/SpeakersSection';
import { CrisisSection } from '../components/CrisisSection';
import { StrategicFramework } from '../components/StrategicFramework';
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
    if (id === 'organizers') {
      navigate('/team', { replace: true });
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
      <FeaturedSpeakersSection />
      <SpeakersSection />
      <CrisisSection />
      <StrategicFramework />
      <Project2035Section />
      <AgendaSection />
      <CTASection />
    </>
  );
}
