import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventSchedule from './components/EventSchedule';
import PhotoGallery from './components/PhotoGallery';
import Venue from './components/Venue';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const addAnimationClasses = () => {
      const style = document.createElement('style');
      style.textContent = `
        .animate-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .animate-reveal.animate-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .traditional-pattern {
          background-image: url('https://raw.githubusercontent.com/your-username/your-repo/main/wedding-background.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          opacity: 0.15;
        }

        .decorative-border {
          position: relative;
        }

        .decorative-border::before,
        .decorative-border::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 50px;
          background-image: url('https://raw.githubusercontent.com/your-username/your-repo/main/border-pattern.png');
          background-size: contain;
          background-repeat: repeat-x;
        }

        .decorative-border::before {
          top: 0;
        }

        .decorative-border::after {
          bottom: 0;
          transform: rotate(180deg);
        }
      `;
      document.head.appendChild(style);
    };

    addAnimationClasses();
  }, []);
  useEffect(() => {
    const audio = new Audio('src/data/wedSound.mp3');
    audio.loop = true;
    audio.play();
  }, []);
  

  return (
    <div className="font-sans">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rozha+One&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap');
          
          :root {
            --color-maroon: #8B0000;
            --color-gold: #D4AF37;
            --color-royal-blue: #4169E1;
          }
          
          .font-serif {
            font-family: 'Rozha One', serif;
          }
          
          .font-devanagari {
            font-family: 'Tiro Devanagari Sanskrit', serif;
          }
          
          .text-maroon { color: var(--color-maroon); }
          .text-gold { color: var(--color-gold); }
          .text-royal-blue { color: var(--color-royal-blue); }
          
          .bg-maroon { background-color: var(--color-maroon); }
          .bg-gold { background-color: var(--color-gold); }
          .bg-royal-blue { background-color: var(--color-royal-blue); }
          
          .border-maroon { border-color: var(--color-maroon); }
          .border-gold { border-color: var(--color-gold); }
          .border-royal-blue { border-color: var(--color-royal-blue); }
          
          .from-maroon { --tw-gradient-from: var(--color-maroon); }
          .to-maroon { --tw-gradient-to: var(--color-maroon); }
          .from-gold { --tw-gradient-from: var(--color-gold); }
          .to-gold { --tw-gradient-to: var(--color-gold); }
          .from-royal-blue { --tw-gradient-from: var(--color-royal-blue); }
          .to-royal-blue { --tw-gradient-to: var(--color-royal-blue); }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            overflow-x: hidden;
            background-color: #FDF7E9;
            background-image: url('${encodeURI("https://raw.githubusercontent.com/your-username/your-repo/main/wedding-background.jpg")}');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }
        `}
      </style>
      
      <div className="fixed inset-0 traditional-pattern -z-10"></div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <EventSchedule />
      <PhotoGallery />
      <Venue />
      <Footer />
    </div>
  );
}

export default App;