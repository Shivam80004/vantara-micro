import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPReveal from '../hooks/useGSAPReveal';

gsap.registerPlugin(ScrollTrigger);

export default function StayTuned() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAPReveal(contentRef, { y: 50 });

  return (
    <section ref={containerRef} id="contact" className="relative py-32 md:py-48 px-6 overflow-hidden bg-primary text-light-100 flex flex-col items-center justify-center text-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/90 to-dark-800 opacity-80" />
      
      {/* Floating Particles (CSS Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/10 rounded-full blur-xl animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-brother-1816 leading-tight">
          The Future of Flight <br />
          <span className="text-light-100">Begins Here</span>
        </h2>
        
        <p className="text-lg md:text-xl font-light text-light-300/80 leading-relaxed max-w-2xl mx-auto">
          Please stay in the air with us for more details, and please visit vantara.in to know more about us.
        </p>
        
        <div className="pt-8">
          <a 
            href="https://vantara.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-secondary text-dark-800 font-medium tracking-widest uppercase text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-secondary/20"
          >
            Visit Vantara.in
          </a>
        </div>
      </div>
    </section>
  );
}
