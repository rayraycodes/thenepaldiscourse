import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SpeakersSection } from '../components/SpeakersSection';
import { FeaturedSpeakersSection } from '../components/FeaturedSpeakersSection';

export function SpeakersPage() {
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
      <SpeakersSection />
      <FeaturedSpeakersSection />
    </>
  );
}
