import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGSAPReveal(ref, options = {}) {
  // Use useLayoutEffect to prevent FOUC (Flash of Unstyled Content)
  // Fallback to useEffect for SSR safety if needed (though this is a client-side app)
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: options.y || 50,
          opacity: 0,
          scale: options.scale || 1,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: options.duration || 1,
          ease: options.ease || 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: options.start || 'top 85%', // Slightly earlier start
            end: options.end || 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...options.scrollTrigger,
          },
          delay: options.delay || 0,
        }
      );
    }, ref); // Scope to the ref

    return () => ctx.revert(); // Proper cleanup
  }, [ref, options]);
}
