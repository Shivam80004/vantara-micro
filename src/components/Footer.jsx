import { useRef } from 'react';
import useGSAPReveal from '../hooks/useGSAPReveal';
import logo from '../assets/images/vantara-logo-1.png';

export default function Footer() {
  const footerRef = useRef(null);

  useGSAPReveal(footerRef, { y: 20, delay: 0.2 });

  return (
    <footer className="bg-dark-800 text-light-400 py-20 px-6 md:px-20 border-t border-white/5">
      <div ref={footerRef} className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        {/* Logo / Brand */}
        <div className="space-y-4">
          <div className="w-40 h-20">
            <img src={logo} alt="Vantara Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          {/* <p className="text-sm font-light text-light-500 max-w-xs">
            Rewilding the Skies. <br />
            An initiative for global avian conservation.
          </p> */}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 md:gap-16 text-sm font-medium tracking-wide uppercase">
           <a href="#about" className="hover:text-white transition-colors duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#themes" className="hover:text-white transition-colors duration-300 relative group">
            Themes
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300 relative group">
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300 relative group">
            Terms & Conditions 
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1920px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-light-500 font-light">
        <p>© 2026 Vantara. All rights reserved.</p>
        {/* <p className="mt-2 md:mt-0 opacity-50">Designed with nature intelligence.</p> */}
      </div>
    </footer>
  );
}
