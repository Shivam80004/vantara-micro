import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPReveal from '../hooks/useGSAPReveal';

gsap.registerPlugin(ScrollTrigger);

const BannerCard = ({ title, subtitle, image, delay }) => {
  const cardRef = useRef(null);
  
  useGSAPReveal(cardRef, { delay, y: 100 });

  return (
    <div 
      ref={cardRef}
      className="group relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl glass transition-transform duration-700 hover:-translate-y-2 cursor-none"
      data-cursor-hover
    >
      {/* Image Parallax Container */}
      <div className="absolute inset-0 w-full h-full scale-110 transition-transform duration-1000 group-hover:scale-100">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 via-transparent to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="block text-secondary text-sm tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {subtitle}
        </span>
        <h3 className="text-3xl md:text-5xl font-brother-1816 text-light-100 leading-tight">
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-secondary mt-6 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-200" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-white/30 transition-colors duration-500" />
    </div>
  );
};

export default function BannerSection() {
  return (
    <section className="relative z-10 py-20 px-4 md:px-10 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <BannerCard 
          title="Avian Intelligence" 
          subtitle="Research & Insight"
          image="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop"
          delay={0}
        />
        <BannerCard 
          title="Global Stewardship" 
          subtitle="Conservation Action"
          image="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=2070&auto=format&fit=crop"
          delay={0.2}
        />
      </div>
    </section>
  );
}
