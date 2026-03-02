import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPReveal from '../hooks/useGSAPReveal';

gsap.registerPlugin(ScrollTrigger);

const themes = [
  {
    title: "Applied Avian Husbandry",
    description: "Focus: Evidence-based husbandry practices, housing design, environmental enrichment, behavioural welfare, breeding management, and conditioning protocols that support long-term care, conservation breeding, and release readiness.",
    styles: {
      bg: "bg-[#154D3D]", // Deep Forest Green
      text: "text-[#F0FDF4]",
      accent: "bg-[#34D399]",
      shape1: "bg-[#059669]",
      shape2: "bg-[#6EE7B7]"
    }
  },
  {
    title: "Applied Avian Health, Nutrition and Preventive Medicine",
    description: "Focus: Preventive health planning, biosecurity, life-stage nutrition, clinical care, neonatal and hand-rearing protocols, diagnostics, and disease risk management relevant to both captive and wild-linked populations.",
    styles: {
      bg: "bg-[#5D4E7B]", // Purple/Indigo
      text: "text-[#F3E8FF]",
      accent: "bg-[#D8B4FE]",
      shape1: "bg-[#7E22CE]",
      shape2: "bg-[#E9D5FF]"
    }
  },
  {
    title: "Conservation in Action: Connecting Ex Situ and In Situ Avian Recovery",
    description: "Focus: Species recovery planning, conservation breeding strategies, genetic and demographic management, rescue and rehabilitation as a conservation tool, release criteria, post-release monitoring, and integration with field conservation priorities.",
    styles: {
      bg: "bg-[#1A3C5A]", // Deep Ocean Blue
      text: "text-[#E0F2FE]",
      accent: "bg-[#38BDF8]",
      shape1: "bg-[#0369A1]",
      shape2: "bg-[#BAE6FD]"
    }
  },
  {
    title: "Innovation in Avian Science: Translating Research into Practice",
    description: "Focus: Behavioural science, emerging diagnostics, reproductive technologies, telemetry and monitoring tools, data-driven decision making, and applied research that improves health, welfare, and conservation success.",
    styles: {
      bg: "bg-[#8C4A32]", // Terracotta
      text: "text-[#FFEDD5]",
      accent: "bg-[#FB923C]",
      shape1: "bg-[#C2410C]",
      shape2: "bg-[#FED7AA]"
    }
  },
  {
    title: "Global Avian Stewardship: Collaboration and Capacity Building",
    description: "Focus: International partnerships, mentorship models, standards and best practices, knowledge exchange across institutions, training for frontline teams, and collaborative problem-solving to strengthen long-term avian conservation outcomes.",
    styles: {
      bg: "bg-[#2C5F63]", // Teal/Cyan
      text: "text-[#CCFBF1]",
      accent: "bg-[#2DD4BF]",
      shape1: "bg-[#0F766E]",
      shape2: "bg-[#99F6E4]"
    }
  }
];

const ThemeCard = ({ theme, index }) => {
  const cardRef = useRef(null);
  
  // Simple fade-in reveal
  useGSAPReveal(cardRef, { 
    y: 30, 
    delay: 0.1,
    scrollTrigger: {
      trigger: cardRef.current,
      start: 'top 85%',
    }
  });

  return (
    <div 
      ref={cardRef}
      className={`group relative ${theme.styles.bg} p-8 md:p-12 rounded-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden w-full h-[450px] flex flex-col border border-white/10 backdrop-blur-md`}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${theme.styles.accent} opacity-80`} />

      {/* Decorative Shapes */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full ${theme.styles.shape1} blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000`} />
      <div className={`absolute bottom-10 right-10 w-32 h-32 rounded-full ${theme.styles.shape2} blur-2xl opacity-30 group-hover:scale-125 transition-transform duration-1000 delay-100`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className={`text-xl md:text-2xl font-brother-1816 ${theme.styles.text} mb-6 mt-4 font-medium leading-tight`}>
          {theme.title}
        </h3>
        
        <p className={`${theme.styles.text} opacity-90 font-light leading-relaxed text-base md:text-lg flex-grow`}>
          {theme.description}
        </p>
        
        <div className={`w-full h-px bg-white/20 mt-8 mb-6`} />
      </div>
    </div>
  );
};

export default function ThemesSection() {
  const headerRef = useRef(null);

  useGSAPReveal(headerRef, { y: 30 });

  return (
    <section className="relative bg-[#FAF7F1] overflow-hidden" id="themes">
      {/* Section Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-20 max-w-[1920px] mx-auto text-center relative z-10">
        <div ref={headerRef}>
          <span className="block font-gt-ultra text-[#CCBDA9] text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Conference Themes
          </span>
          <h2 className="text-2xl md:text-5xl font-brother-1816 text-[#154D3D] mb-4">
            Five Pillars Guiding the <br/>
            <span className="">Future of Avian Conservation</span>
          </h2>
        </div>
      </div>

      {/* Grid Layout Container */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {themes.slice(0, 3).map((theme, index) => (
            <ThemeCard key={index} theme={theme} index={index} />
          ))}
          
          {/* Second row centered */}
          <div className="lg:col-span-3 flex flex-col md:flex-row gap-8 justify-center w-full">
            {themes.slice(3, 5).map((theme, index) => (
              <div key={index + 3} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
                <ThemeCard theme={theme} index={index + 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
