import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import heroVideoWeb from '../assets/videos/hero-video-web.mp4';
import heroVideoMob from '../assets/videos/hero-video-mob.mp4';

// Banner 1 Assets
import d1Bg from '../assets/images/banners/d1-bg.jpeg';
import d1Overlay from '../assets/images/banners/d1.png';
import d1Overlay2 from '../assets/images/banners/d1-1.png';
import m1Bg from '../assets/images/banners/m1-bg.jpeg';
import m1Overlay from '../assets/images/banners/m1.png';

// Banner 2 Assets
import d2Bg from '../assets/images/banners/d2-bg.jpeg';
import d2Overlay from '../assets/images/banners/d2.png';
import d2cta from '../assets/images/banners/d2-cta.png';
import d2bird from '../assets/images/banners/d2-bird.png';
import m2Bg from '../assets/images/banners/m2-bg.jpeg';
import m2Overlay from '../assets/images/banners/m2.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const swiperRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline();

      tl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 0 },
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
      gsap.to(bgRef.current, {
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        yPercent: -5,
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

  // Handle video end to trigger slide change
  const handleVideoEnded = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setIsVideoPlaying(false);
    }
  };

  // Handle slide change
  const handleSlideChange = (swiper) => {
    if (swiper.realIndex === 0) {
      // If back to video slide
      setIsVideoPlaying(true);
      swiper.autoplay.stop();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      // If other slides
      setIsVideoPlaying(false);
      swiper.autoplay.start();
    }
  };

  return (
    <section ref={containerRef} className="relative md:h-screen h-[100vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Slider */}
      <div ref={bgRef} className="absolute inset-0 z-0 w-full h-full">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            // Stop autoplay initially for the video
            swiper.autoplay.stop();
          }}
        >
          {/* Slide 1: Video */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
              >
                <source src={heroVideoMob} type="video/mp4" media="(max-width: 1024px)" />
                <source src={heroVideoWeb} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>

          {/* Slide 2: Banner 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* Background */}
              <picture>
                <source media="(max-width: 1024px)" srcSet={m1Bg} />
                <img 
                  src={d1Bg} 
                  alt="Vantara Banner 1 Background" 
                  className="w-full h-full object-cover"
                />
              </picture>
              {/* Overlay */}
              <div className="absolute top-[0%] lg:left-[5%] h-vh w-full z-10 pointer-events-none">
                <picture>
                  <source media="(max-width: 1024px)" srcSet={m1Overlay} />
                  <img 
                    src={d1Overlay}  
                    alt="Vantara Banner 1 Overlay" 
                    className="lg:w-1/2 w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="absolute top-[0%] right-[5%] h-[25vh] z-10 pointer-events-none hidden lg:block">
                <img 
                  src={d1Overlay2} 
                  alt="Vantara Banner 1 Overlay" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3: Banner 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* Background */}
              <picture>
                <source media="(max-width: 1024px)" srcSet={m2Bg} />
                <img 
                  src={d2Bg} 
                  alt="Vantara Banner 2 Background" 
                  className="w-full h-full object-cover"
                />
              </picture>
              {/* Overlay */}
              <div className="absolute top-[10%] right-[0%] lg:w-1/2 w-full lg:h-[70%] z-10 pointer-events-none">
                <picture>
                  <source media="(max-width: 1024px)" srcSet={m2Overlay} />
                  <img 
                    src={d2Overlay} 
                    alt="Vantara Banner 2 Overlay" 
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="absolute bottom-[0%] right-[0%] lg:block hidden w-[75%] z-10 pointer-events-none">
                <picture>
                  <img 
                    src={d2cta} 
                    alt="Vantara Banner 2 Overlay" 
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="absolute bottom-[0%] left-[0%] lg:block hidden w-[50%] z-10 pointer-events-none">
                <picture>
                  <img 
                    src={d2bird} 
                    alt="Vantara Banner 2 Overlay" 
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-30 text-center text-light-100 px-4">
        {/* Content removed as per previous file state, but keeping the container for future use */}
      </div>
    </section>
  );
}
