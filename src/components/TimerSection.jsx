import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeUnit = ({ value, label }) => {
  const digitRef = useRef(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      gsap.fromTo(
        digitRef.current,
        { y: 20, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
      prevValue.current = value;
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center mx-2 md:mx-8">
      <div className="relative overflow-hidden h-12 md:h-40 flex items-center justify-center">
        <span 
          ref={digitRef}
          className="text-2xl md:text-9xl font-brother-1816 font-light text-primary tabular-nums leading-none block"
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-secondary mt-4 font-medium">
        {label}
      </span>
    </div>
  );
};

export default function TimerSection({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.timer-unit',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => {
      clearInterval(timer);
      ctx.revert();
    };
  }, [targetDate]);

  return (
    <section ref={sectionRef} className="py-12 md:py-32 bg-light-200 flex flex-col items-center justify-center overflow-hidden">
      <h2 
        ref={titleRef}
        className="text-xl md:text-2xl font-brother-1816 tracking-[0.2em] uppercase text-dark-500 mb-6 md:mb-20 text-center"
      >
        The skies awaken in…
      </h2>

      <div className="flex flex-wrap justify-center items-end">
        <div className="timer-unit"><TimeUnit value={timeLeft.days} label="Days" /></div>
        <div className="timer-unit hidden md:block text-4xl md:text-6xl font-brother-1816 text-secondary/30 mb-20">:</div>
        <div className="timer-unit"><TimeUnit value={timeLeft.hours} label="Hours" /></div>
        <div className="timer-unit hidden md:block text-4xl md:text-6xl font-brother-1816 text-secondary/30 mb-20">:</div>
        <div className="timer-unit"><TimeUnit value={timeLeft.minutes} label="Minutes" /></div>
        <div className="timer-unit hidden md:block text-4xl md:text-6xl font-brother-1816 text-secondary/30 mb-20">:</div>
        <div className="timer-unit"><TimeUnit value={timeLeft.seconds} label="Seconds" /></div>
      </div>
      
      {/* Decorative Line */}
      {/* <div className="w-px h-32 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 mt-20" /> */}
    </section>
  );
}
