import React from 'react';
import useLenis from './hooks/useLenis';
import HeroSection from './components/HeroSection';
import BannerSection from './components/BannerSection';
import TimerSection from './components/TimerSection';
import AboutSection from './components/AboutSection';
import ThemesSection from './components/ThemesSection';
import StayTuned from './components/StayTuned';
import Footer from './components/Footer';

function App() {
  useLenis();

  // Set target date for countdown (March 2nd, 2027)
  const targetDate = new Date('2027-03-02T00:00:00');

  return (
    <div className="min-h-screen bg-light-200 text-dark font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* Grain Overlay */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-50 opacity-5 mix-blend-overlay"></div>
      
      <main className="relative z-10">
        <HeroSection />
        {/* <BannerSection /> */}
        <TimerSection targetDate={targetDate} />
        <AboutSection />
        <ThemesSection />
        <StayTuned />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
