import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { StrategicPartner } from './components/StrategicPartner';
import { CrisisSection } from './components/CrisisSection';
import { StrategicFramework } from './components/StrategicFramework';
import { SpeakersSection } from './components/SpeakersSection';
import { Project2035Section } from './components/Project2035Section';
import { AgendaSection } from './components/AgendaSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <Marquee />
        <StrategicPartner />
        <CrisisSection />
        <StrategicFramework />
        <SpeakersSection />
        <Project2035Section />
        <AgendaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
