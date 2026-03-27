import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OurStorySection } from '../components/OurStorySection';

export function OurStoryPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash.replace(/^#/, '') === 'transparency') {
      navigate('/transparency', { replace: true });
    }
  }, [location.hash, navigate]);

  useEffect(() => {
    const id = location.hash.replace(/^#/, '');
    if (!id || id === 'transparency') return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return <OurStorySection />;
}
