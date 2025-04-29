import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { weddingData } from '../data/weddingData';

const Venue: React.FC = () => {
  const { venue } = weddingData;
  const { main } = venue;
  const mainEvent = weddingData.events[2]; // Wedding ceremony

  return (
    <Section id="venue" className="bg-gradient-to-b from-royal-blue/5 to-maroon/5 relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Venue Details" 
          subtitle="Where we'll be celebrating our special day"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-reveal rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Venue Location"
              src={main.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          
          <div className="animate-reveal delay-300">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold">
              <h3 className="text-2xl font-bold text-maroon mb-6 font-serif">{main.name}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-700">{main.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Event Time</h4>
                    <p className="text-gray-700">
                      <span className="block">{mainEvent.date}</span>
                      <span>{mainEvent.time}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Info className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Nearby Landmarks</h4>
                    <ul className="text-gray-700 list-disc ml-4">
                      {main.landmarks.map((landmark, index) => (
                        <li key={index}>{landmark}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-maroon/5 rounded-lg">
                <p className="text-gray-700 italic">
                  For any queries regarding the venue, please feel free to contact us at {main.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Venue;