import React, { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { scrollToSection } from '../utils/scrollUtils';
import Button from './ui/Button';
import ParticleBackground from './ui/ParticleBackground';
import wedSound from '../data/wedSound.mp3'; // 🎵 Import your audio

const Hero: React.FC = () => {
  const { bride, groom } = weddingData.couple;
  const heroRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const dateString = weddingData.events[2].date;

  useEffect(() => {
    document.title = `${groom.name} & ${bride.name} - Wedding Invitation`;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 🎵 Try autoplay and fall back to manual button if blocked
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play().catch((err) => {
        console.log('Autoplay blocked:', err);
        setShowPlayButton(true);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [groom.name, bride.name]);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden decorative-border"
      style={{
        backgroundImage: `url('${encodeURI("https://raw.githubusercontent.com/your-username/your-repo/main/wedding-background.jpg")}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 🎵 Optional manual play button */}
      {showPlayButton && (
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.play();
                setShowPlayButton(false);
              }
            }}
            className="bg-gold text-white font-bold py-2 px-4 rounded shadow hover:bg-yellow-500 transition"
          >
            Play Music 🎵
          </button>
        </div>
      )}

      {/* Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 to-royal-blue/60"></div>
      <ParticleBackground particleCount={50} />

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="text-center mb-8 animate-fadeIn">
          <p className="text-gold text-2xl mb-6 font-devanagari">ॐ श्री गणेशाय नमः</p>
          <p className="font-dosis text-gold text-lg md:text-xl mb-4 animate-reveal">
            With the divine blessings of our families
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-6 font-serif">
            <span className="font-greatVibes block animate-reveal">{groom.name}</span>
            <span className="inline-block mx-6 text-gold animate-pulse">
              <Heart size={48} fill="#D4AF37" strokeWidth={0} />
            </span>
            <span className="font-greatVibes block animate-reveal">{bride.name}</span>
          </h1>

          {/* Couple Images */}
          <div className="mt-8 animate-reveal flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="w-64 h-64 relative group">
              <div className="absolute inset-0 rounded-full border-4 border-gold rotate-45 transition-transform duration-700 group-hover:rotate-90"></div>
              <img
                src={groom.image}
                alt={groom.name}
                className="w-60 h-60 object-cover rounded-full mx-auto border-4 border-gold shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="w-64 h-64 relative group">
              <div className="absolute inset-0 rounded-full border-4 border-gold rotate-45 transition-transform duration-700 group-hover:rotate-90"></div>
              <img
                src={bride.image}
                alt={bride.name}
                className="w-60 h-60 object-cover rounded-full mx-auto border-4 border-gold shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Invitation Text Box */}
          <div className="invitation-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#fff7ed'
          }}>
            <div style={{
              maxWidth: '800px',
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <p className="invitation-text" style={{
                fontFamily: 'Dosis, sans-serif',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#333',
                fontWeight: '400'
              }}>
                We are thrilled to invite you to the wedding celebration of <strong>Sunil</strong> and <strong>Rohini</strong>. After months of anticipation and excitement, we are finally coming together to begin this beautiful journey as a married couple. Join us as we celebrate our love and joy with our family and friends on <strong>Tuesday, 6th May 2025</strong>, at <strong>12:34 PM</strong>, at <strong>Groom's House Yallammanawadi</strong>. The ceremony will be followed by a reception, filled with laughter, music, and unforgettable moments. We would be honored to have you with us to witness and celebrate this special occasion. We look forward to sharing this memorable day with you.
              </p>
            </div>
          </div>

          {/* Event Info */}
          <div className="mt-12 animate-reveal delay-300">
            <p className="text-gold text-xl md:text-2xl font-bold font-dosis">{dateString}</p>
            <p className="text-gold text-lg md:text-xl mt-2 font-dosis">
              {weddingData.venue.main.name}, {weddingData.venue.main.address.split(',')[0]}
            </p>
          </div>

          {/* CTA Button */}
          <div className="font-dosis mt-12 animate-reveal delay-500">
            <Button
              onClick={() => scrollToSection('event-schedule')}
              variant="secondary"
              size="lg"
            >
              View Wedding Details
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={() => scrollToSection('event-schedule')}
          className="text-gold focus:outline-none"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* 🎵 Hidden audio tag */}
      <audio ref={audioRef} src={wedSound} />
    </div>
  );
};

export default Hero;
