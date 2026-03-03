import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPReveal from '../hooks/useGSAPReveal';
import aboutBg from '../assets/images/about.bg.png';
import aboutBgMobile from '../assets/images/about-banner-mobile.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAPReveal(textRef, {
    y: 50,
    stagger: 0.1,
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 70%',
    }
  });

  return (
    <section ref={containerRef} className="relative py-12 md:py-40 px-6 md:px-20 w-full overflow-hidden flex items-center justify-center md:min-h-screen" id="about">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
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
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-light-200/80 backdrop-blur-sm p-3 md:p-16 rounded-3xl shadow-sm border border-white/40">
        <div ref={textRef} className="space-y-8">
          <span className="block font-gt-ultra text-secondary text-xs tracking-[0.2em] uppercase font-medium">
            About the Event
          </span>
          <h2 className="text-xl !mt-2 md:!mt-4 md:text-5xl font-brother-1816 text-primary leading-[1.1]">
            Conference <span className="text-primary">Overview</span>
          </h2>
          <div className="space-y-6 text-dark-500 text-[15px] leading-relaxed font-light">
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
            {/* <p>
              The Vantara International Conference - <strong>Rewilding the Skies</strong> - is convened at this critical moment to foster a transformational global exchange that moves beyond theory to applied solutions for bird conservation and avian management. Rooted in India’s vibrant biodiversity and informed by the latest international science, this conference prioritizes hands-on learning, translational research, and collaborative problem-solving across core domains: husbandry, health and nutrition, conservation action, innovative science, and cross-border stewardship.
            </p>
            <p>
              By bringing together veterinarians, aviculturists, ecologists, policymakers, and community leaders, Rewilding the Skies aims to reinvigorate how we care for birds both in captivity and in the wild, catalyze meaningful partnerships, and equip practitioners with the tools needed to safeguard avian futures. This conference is not just an event - it is a global imperative to restore ecological balance, enhance avian wellbeing, and empower a connected network of professionals dedicated to birds and their ecosystems.
            </p> */}
          </div>

          {/* <div className="flex justify-center pt-4">
            <button className="group px-8 py-4 border border-primary rounded-full text-primary hover:bg-primary hover:text-light-100 transition-colors duration-300 flex items-center gap-4 uppercase tracking-widest text-sm bg-white/50 backdrop-blur-sm">
              <span>Read Our Mission</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
