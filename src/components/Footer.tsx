import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { scrollToSection } from '../utils/scrollUtils';

const Footer: React.FC = () => {
  const { bride, groom } = weddingData.couple;
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Our Story', id: 'our-story' },
    { name: 'Events', id: 'event-schedule' },
    { name: 'Gallery', id: 'photo-gallery' },
    { name: 'Venue', id: 'venue' },
  ];

  return (
    <footer className="bg-gradient-to-r from-maroon to-royal-blue py-12 text-maroon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 font-serif">
            {bride.name} & {groom.name}
          </h2>
          <p className="text-maroon flex items-center justify-center gap-2">
            <span>Est.</span>
            <Heart className="h-4 w-4 inline-block fill-maroon" />
            <span>{weddingData.events[2].date.split(',')[0]}</span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-maroon hover:text-gold transition duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
        
        <div className="font-dosis text-center opacity-80 text-sm mt-12 text-maroon">
          <p>We can't wait to celebrate with you!</p>
          <p className="mt-2">
            <Heart className="h-4 w-4 inline-block mx-1 text-maroon fill-gold" />
            {new Date().getFullYear()}
            <Heart className="h-4 w-4 inline-block mx-1 text-maroon fill-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;