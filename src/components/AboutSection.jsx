import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutBg from '../assets/images/about.bg.png';
import aboutBgMobile from '../assets/images/about-banner-mobile.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax & Fade
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Text Stagger Animation
      gsap.fromTo(
        textRef.current.children,
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-12 md:py-40 px-6 md:px-20 w-full overflow-hidden flex items-center justify-center md:min-h-screen" id="about">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-0"> {/* Initial opacity 0 to prevent flash */}
        <picture>
          <source media="(max-width: 767px)" srcSet={aboutBgMobile} />
          <img
            src={aboutBg}
            alt="Birds Frame Background"
            className="w-full h-full object-cover object-center opacity-90"
          />
        </picture>
        {/* Subtle overlay to ensure text readability if needed, though centered text should be clear */}
        <div className="absolute inset-0 bg-light-200/40 mix-blend-soft-light" />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 lg:max-w-4xl xl:max-w-[55vw] max-w-full mx-auto text-center bg-light-200/80 backdrop-blur-sm p-3 md:p-16 rounded-3xl shadow-sm border border-white/40">
        <div ref={textRef} className="space-y-8">
          <span className="block font-gt-ultra text-secondary text-xs tracking-[0.2em] uppercase font-medium">
            About the Event
          </span>
          <h2 className="text-xl !mt-2 md:!mt-4 md:text-5xl font-brother-1816 text-primary leading-[1.1]">
            Conference <span className="text-primary">Overview</span>
          </h2>
          <div className="space-y-6 text-dark-500 text-[15px] xl:text-lg leading-relaxed font-light">
            <p>
              Birds are vital indicators of planetary health, yet they face increasing threats
              from habitat loss, climate change, disease, and ecosystem disruption. Addressing these
              challenges requires collaborative, science-led action beyond traditional dialogue.
            </p>
            <p>
              Vantara International Conference: Rewilding the Skies brings together global experts to drive
              practical solutions in avian conservation and management. Focused on applied research,
              conservation action, animal health, and innovation, the conference aims to strengthen
              partnerships and equip professionals to safeguard avian species both under human care
              and in the wild.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
