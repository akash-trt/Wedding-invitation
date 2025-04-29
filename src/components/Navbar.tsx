import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { weddingData } from '../data/weddingData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { bride, groom } = weddingData.couple;
  
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Events', id: 'event-schedule' },
    { name: 'Gallery', id: 'photo-gallery' },
    { name: 'Venue', id: 'venue' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FDF7E9] shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavLinkClick('hero')}
            className={`font-serif text-lg md:text-xl font-bold transition-colors duration-300 flex items-center ${
              scrolled ? 'text-maroon' : 'text-gold'
            }`}
          >
            <span>{groom.name.split(' ')[0]}</span>
            <Heart className="mx-2 text-gold" fill="#D4AF37" />
            <span>{bride.name.split(' ')[0]}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={`font-medium hover:text-gold transition-colors duration-300 ${
                  scrolled ? 'text-maroon' : 'text-gold'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-maroon' : 'text-gold'} />
            ) : (
              <Menu className={scrolled ? 'text-maroon' : 'text-gold'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-maroon transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className="text-gold text-xl font-medium hover:text-white transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;