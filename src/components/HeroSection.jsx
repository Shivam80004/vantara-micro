import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroVideoWeb from '../assets/videos/hero-video-web.mp4';
import heroVideoMob from '../assets/videos/hero-video-mob.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline();

      tl.fromTo(
        videoRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
      )
      .fromTo(
        textRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.5, ease: 'power3.out' },
        '-=1.5'
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=1'
      );

      // Parallax Effect on Scroll
      gsap.to(videoRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideoMob} type="video/mp4" media="(max-width: 767px)" />
          <source src={heroVideoWeb} type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center text-light-100 px-4">
        {/* <h2 className="font-gt-ultra text-lg md:text-xl font-sans tracking-[0.2em] uppercase mb-4 text-secondary/80">
          Vantara International Conference
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-brother-1816 font-light leading-tight tracking-tight mix-blend-overlay opacity-90">
          Rewilding <br />
          <span className="font-light text-secondary">the Skies</span>
        </h1> */}
        
        {/* Floating Bird Silhouettes (CSS Animation or SVG) */}
 
      </div>

      {/* Scroll Indicator */}
      {/* <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-light-300/60">
        <span className="text-xs uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-light-300/0 via-light-300/50 to-light-300/0 animate-pulse" />
      </div> */}
    </section>
  );
}
