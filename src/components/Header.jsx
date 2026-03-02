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
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div 
          className={`relative flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            isScrolled || isMenuOpen
              ? 'bg-white/90 backdrop-blur-md border border-white/20 shadow-lg' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="https://vantara.in" target="_blank" rel="noopener noreferrer" className="flex items-center z-50">
            <img 
              src={logo} 
              alt="Vantara Logo" 
              className={`h-8 md:h-14 scale-125 pl-3 w-auto object-contain transition-all duration-300 ${isScrolled || isMenuOpen ? '' : 'brightness-0 invert'}`} 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`text-sm uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-primary hover:text-primary/80' : 'text-white/90 hover:text-white'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('themes')} 
              className={`text-sm uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-primary hover:text-primary/80' : 'text-white/90 hover:text-white'}`}
            >
              Themes
            </button>
            <a 
              href="https://vantara.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 backdrop-blur-sm ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
              }`}
            >
              Visit Vantara.in
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 z-50 transition-colors ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'}`}
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
            className={`fixed inset-0 rounded-xl bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            style={{ top: 0, left: 0, height: '100vh' }}
          >
            <nav className="flex flex-col items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-2xl font-brother-1816 text-primary hover:text-primary/80 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('themes')} 
                className="text-2xl font-brother-1816 text-primary hover:text-primary/80 transition-colors"
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
