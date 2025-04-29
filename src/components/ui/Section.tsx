import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 w-full relative ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;