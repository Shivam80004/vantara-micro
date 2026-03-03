import { useState, useEffect } from 'react';
import logo from '../assets/images/vantara-logo-1.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="lg:max-w-[50vw] lg:w-fit max-w-[90vw] mx-auto px-6 lg:px-12">
        <div 
          className={`relative flex items-center justify-between rounded-full px-6 py-0.5 transition-all duration-300 ${
            isScrolled || isMenuOpen
              ? 'bg-black/20 backdrop-blur-md border border-transparent' 
              : 'bg-black/20 backdrop-blur-md border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="/" rel="noopener noreferrer" className="flex lg:hidden items-center z-50">
            <img 
              src={logo} 
              alt="Vantara Logo" 
              className={`h-8 lg:h-14 scale-125 pl-3 w-auto object-contain transition-all duration-300 ${isScrolled || isMenuOpen ? 'brightness-0 invert' : 'brightness-0 invert'}`} 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`text-sm uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-white hover:text-white/80' : 'text-white/90 hover:text-white'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('themes')} 
              className={`text-sm uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-white hover:text-white/80' : 'text-white/90 hover:text-white'}`}
            >
              Themes
            </button>
             {/* Logo */}
          <a href="/" rel="noopener noreferrer" className=" items-center z-50 hidden lg:flex">
            <img 
              src={logo} 
              alt="Vantara Logo" 
              className={`h-8 lg:h-14 scale-125 pl-3 w-auto object-contain transition-all duration-300 ${isScrolled || isMenuOpen ? 'brightness-0 invert' : 'brightness-0 invert'}`} 
            />
          </a>
          <a 
              href="https://vantara.in/en/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-white hover:text-white/80' : 'text-white/90 hover:text-white'}`}
            >
              Contact
            </a>
            <a 
              href="https://vantara.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-white hover:text-white/80' : 'text-white/90 hover:text-white'}`}
            >
              Visit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 z-50 transition-colors ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed py-12 w-full rounded-xl bg-black/20 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            style={{ top: 70, left: 0, height: 'fit-content' }}
          >
            <nav className="flex flex-col items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-2xl font-brother-1816 text-white hover:text-white/80 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('themes')} 
                className="text-2xl font-brother-1816 text-white hover:text-white/80 transition-colors"
              >
                Themes
              </button>
              <a 
                href="https://vantara.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors mt-4 font-brother-1816"
              >
                Visit Vantara.in
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
