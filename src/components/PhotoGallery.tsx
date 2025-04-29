import React, { useState, useEffect, useRef } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { weddingData } from '../data/weddingData';
import { addInViewObserver } from '../utils/animations';

const PhotoGallery: React.FC = () => {
  const { gallery } = weddingData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = galleryItemsRef.current.filter(Boolean) as HTMLElement[];
    addInViewObserver(elements, 'animate-reveal', 0.2);
  }, []);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Section id="photo-gallery" className="bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Gallery" 
          subtitle="Moments we've shared together"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              ref={el => galleryItemsRef.current[index] = el}
              className="opacity-0 transition-all duration-1000"
              onClick={() => openLightbox(item.image)}
            >
              <div className="h-64 md:h-80 overflow-hidden rounded-lg shadow-md cursor-pointer group relative">
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" 
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white focus:outline-none"
            onClick={closeLightbox}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          
          <div className="max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default PhotoGallery;