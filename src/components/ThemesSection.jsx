import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPReveal from '../hooks/useGSAPReveal';
import featherStrip from '../assets/images/feather-strip.png';

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

const ThemeCard = ({ theme }) => {
  return (
    <div 
      className={`group relative ${theme.styles.bg} p-8 md:p-12 rounded-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden min-w-[300px] md:min-w-[400px] lg:min-w-[500px] md:h-[400px] h-[420px] flex flex-col border border-white/10 backdrop-blur-md`}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${theme.styles.accent} opacity-80`} />

      {/* Decorative Shapes */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full ${theme.styles.shape1} blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000`} />
      <div className={`absolute bottom-10 right-10 w-32 h-32 rounded-full ${theme.styles.shape2} blur-2xl opacity-30 group-hover:scale-125 transition-transform duration-1000 delay-100`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className={`text-2xl md:text-3xl font-brother-1816 ${theme.styles.text} mb-6 mt-4 font-medium leading-tight`}>
          {theme.title}
        </h3>
        
        <p className={`${theme.styles.text} opacity-90 font-light leading-relaxed text-base md:text-lg flex-grow`}>
          {theme.description}
        </p>
        
        <div className={`w-full h-px bg-white/20 mt-8 mb-6`} />
        
        {/* <div className={`flex items-center justify-between ${theme.styles.text}`}>
          <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-80">Learn More</span>
          <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
        </div> */}
      </div>
    </div>
  );
};

export default function ThemesSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const featherRef = useRef(null);

  // Header Reveal
  useGSAPReveal(headerRef, { y: 30 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Feather Floating Animation
      gsap.to(featherRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Horizontal Scroll Logic
      const container = containerRef.current;
      
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 768px)": function() {
          const scrollWidth = container.scrollWidth;
          const viewportWidth = window.innerWidth;
          
          gsap.to(container, {
            x: () => -(scrollWidth - viewportWidth + 100), // Scroll until end with some padding
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${scrollWidth / 2}`, // Reduced scroll distance for faster speed
              invalidateOnRefresh: true,
              anticipatePin: 1,
            }
          });
        },
        // Mobile - no pin, vertical stack
        "(max-width: 767px)": function() {
          // Optional: Add simple fade up for mobile cards
          gsap.utils.toArray(container.children).forEach((card, i) => {
            gsap.fromTo(card,
              { y: 50, opacity: 0 },
              {
                y: 0, 
                opacity: 1,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                }
              }
            );
          });
        }
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FAF7F1] overflow-hidden" id="themes">
      {/* Section Header */}
      <div className="pt-24 pb-12 md:pt-12 md:pb-16 px-6 md:px-20 max-w-[1920px] mx-auto text-center relative z-10">
        <div ref={headerRef}>
          <span className="block font-gt-ultra text-[#CCBDA9] text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Conference Themes
          </span>
          <h2 className="text-xl md:text-5xl font-brother-1816 text-[#154D3D] mb-4">
            Five Pillars Guiding the <br/>
            <span className="">Future of Avian Conservation</span>
          </h2>
        </div>
      </div>

      {/* Feather Strip Visual */}
      {/* <div className="absolute top-[25%] left-0 w-full pointer-events-none z-0 opacity-80 hidden md:block">
        <img 
          ref={featherRef}
          src={featherStrip} 
          alt="Decorative Feather Strip" 
          className="w-full h-auto object-cover opacity-60"
        />
      </div> */}

      {/* Horizontal Scroll Container */}
      <div className="relative w-full pb-12 md:h-fit md:pb-0 flex items-center">
        <div 
          ref={containerRef}
          className="flex flex-col md:flex-row gap-8 mb-20 px-6 md:px-20 md:w-max"
        >
          {themes.map((theme, index) => (
            <ThemeCard key={index} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
