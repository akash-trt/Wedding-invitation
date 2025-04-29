import React, { useEffect, useRef } from 'react';
import { Paintbrush, Music, Heart, GlassWater } from 'lucide-react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { weddingData } from '../data/weddingData';
import { addInViewObserver } from '../utils/animations';

const EventSchedule: React.FC = () => {
  const { events } = weddingData;
  const eventCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = eventCardsRef.current.filter(Boolean) as HTMLElement[];
    addInViewObserver(elements, 'animate-reveal', 0.2);
  }, []);

  const getIcon = (iconName: string) => {
    const iconSize = 48;
    const iconProps = { size: iconSize, className: "text-gold" };
    
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush {...iconProps} />;
      case 'Music':
        return <Music {...iconProps} />;
      case 'Heart':
        return <Heart {...iconProps} />;
      case 'GlassWater':
        return <GlassWater {...iconProps} />;
      default:
        return <Heart {...iconProps} />;
    }
  };

  return (
    <Section id="event-schedule" className="relative">
      <div className="font-dosis text-2xl absolute inset-0 rangoli-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Wedding Events" 
          subtitle="Join us in celebrating these auspicious occasions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              ref={el => eventCardsRef.current[index] = el}
              className="opacity-0 transition-all duration-1000"
            >
              <div className="rounded-lg overflow-hidden shadow-lg bg-white border-t-4 border-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full group indian-border">
                <div className="p-6 flex flex-col h-full bg-[#FDF7E9]">
                  <div className="flex justify-center items-center mb-4">
                    {getIcon(event.icon)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-maroon text-center mb-2 font-serif">{event.title}</h3>
                  
                  <div className="bg-maroon/5 p-4 rounded-lg mb-4 text-center">
                    <p className="text-maroon font-semibold">{event.date}</p>
                    <p className="text-gray-700">{event.time}</p>
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <div className="text-center">
                      <p className="font-semibold text-gray-800">{event.venue}</p>
                      <p className="text-gray-600 text-sm">{event.address}</p>
                    </div>
                    
                    <p className="text-sm text-gray-700 text-center">{event.description}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <p className="text-sm font-semibold text-royal-blue">
                      {/* <span className="block">Dress Code:</span> 
                      {event.dressCode} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EventSchedule