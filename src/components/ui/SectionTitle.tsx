import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  className = ''
}) => {
  return (
    <div className={`text-center mb-12 md:mb-16 animate-reveal ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-3 font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-700 max-w-2xl mx-auto font-serif">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;