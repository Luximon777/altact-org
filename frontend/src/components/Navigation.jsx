import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Actions', href: '#actions' },
    { label: 'Gouvernance', href: '#gouvernance' },
    { label: 'Impact', href: '#impact' },
    { label: 'Devenir membre', href: '#membre' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      setIsPresentationOpen(false);
    }
  };

  const goToMotPresident = (e) => {
    e.preventDefault();
    setIsPresentationOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/mot-president');
  };

  return (
    <React.Fragment>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-36">
            <a href="#top" onClick={(e) => scrollToSection(e, '#top')} className="flex items-center group">
              <img src="https://customer-assets.emergentagent.com/job_institut-fusion/artifacts/n4nzcgj5_LOGOS%202.png" alt="Alt and Act" className="h-32 w-auto transform group-hover:scale-105 transition-transform duration-200" />
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative" onMouseEnter={() => setIsPresentationOpen(true)} onMouseLeave={() => setIsPresentationOpen(false)}>
                <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')} className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1">
                  Présentation
                  <ChevronDown className="w-4 h-4" />
                </a>
                {isPresentationOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')} className="block px-4 py-2 text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-colors">
                      Vue d&apos;ensemble
                    </a>
                    <a href="/mot-president" onClick={goToMotPresident} className="block px-4 py-2 text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-colors">
                      Le mot du Président fondateur
                    </a>
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <Button onClick={(e) => scrollToSection(e, '#contact')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white transition-all duration-200 transform hover:scale-105 font-semibold">
                Contact
              </Button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0b2a55]" /> : <Menu className="w-6 h-6 text-[#0b2a55]" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`fixed top-36 right-0 bottom-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col p-6 space-y-4">
            <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')} className="text-orange-600 hover:text-orange-700 font-semibold text-base py-2">
              Présentation
            </a>
            <a href="/mot-president" onClick={goToMotPresident} className="text-gray-600 hover:text-[#0b2a55] text-sm py-1 pl-4 border-l-2 border-gray-200">
              Le mot du Président
            </a>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-orange-600 hover:text-orange-700 font-semibold text-base py-2">
                {link.label}
              </a>
            ))}
            <Button onClick={(e) => scrollToSection(e, '#contact')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white w-full font-semibold">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
