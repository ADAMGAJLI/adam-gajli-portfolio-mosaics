
import React from 'react';

const MoroccanPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* نقوش مغربية متحركة */}
      <div className="absolute top-20 left-10 w-16 h-16 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-gold opacity-20">
          <path
            d="M50 10 L60 30 L80 30 L66 44 L72 64 L50 52 L28 64 L34 44 L20 30 L40 30 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="absolute top-32 right-20 w-12 h-12 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-blue opacity-15">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
        </svg>
      </div>

      <div className="absolute bottom-32 left-20 w-20 h-20 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-gold opacity-10">
          <polygon
            points="50,15 61,35 85,35 67,50 73,74 50,62 27,74 33,50 15,35 39,35"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-16 w-14 h-14 animate-float" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-blue opacity-20">
          <path
            d="M50 20 Q70 30 80 50 Q70 70 50 80 Q30 70 20 50 Q30 30 50 20"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/4 w-8 h-8 animate-float" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-gold opacity-15">
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(45 50 50)"/>
        </svg>
      </div>

      <div className="absolute top-3/4 right-1/3 w-10 h-10 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-blue opacity-12">
          <path
            d="M50 25 L65 40 L80 25 L75 50 L80 75 L65 60 L50 75 L35 60 L20 75 L25 50 L20 25 L35 40 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default MoroccanPattern;
