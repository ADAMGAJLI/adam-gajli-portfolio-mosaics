
import React from 'react';

const MoroccanPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* زخارف الجليز المغربي المعقدة */}
      
      {/* نجمة ثمانية كبيرة مع تفاصيل الجليز */}
      <div className="absolute top-20 left-16 w-32 h-32 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full text-moroccan-gold opacity-30">
          <g transform="translate(100,100)">
            {/* النجمة الخارجية */}
            <path
              d="M0,-80 L15,-25 L70,-25 L30,5 L45,60 L0,30 L-45,60 L-30,5 L-70,-25 L-15,-25 Z"
              fill="currentColor"
              stroke="rgba(29, 78, 216, 0.4)"
              strokeWidth="2"
            />
            {/* النجمة الداخلية */}
            <path
              d="M0,-40 L8,-12 L35,-12 L15,3 L23,30 L0,15 L-23,30 L-15,3 L-35,-12 L-8,-12 Z"
              fill="rgba(29, 78, 216, 0.6)"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* المركز */}
            <circle cx="0" cy="0" r="8" fill="currentColor"/>
          </g>
        </svg>
      </div>

      {/* زخرفة أرابيسك متداخلة */}
      <div className="absolute top-40 right-20 w-28 h-28 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-moroccan-blue opacity-25">
          <g transform="translate(100,100)">
            {/* دوائر متداخلة */}
            <circle cx="0" cy="0" r="70" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
            <circle cx="0" cy="0" r="50" fill="none" stroke="rgba(234, 179, 8, 0.8)" strokeWidth="2"/>
            <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="4"/>
            {/* أشكال متقاطعة */}
            <path d="M-40,0 Q0,-40 40,0 Q0,40 -40,0" fill="rgba(234, 179, 8, 0.3)" stroke="currentColor" strokeWidth="1"/>
            <path d="M0,-40 Q40,0 0,40 Q-40,0 0,-40" fill="rgba(29, 78, 216, 0.3)" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      {/* خط كوفي مستوحى من الجليز */}
      <div className="absolute bottom-32 left-24 w-40 h-20 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 240 120" className="w-full h-full text-moroccan-gold opacity-35">
          <g>
            {/* خطوط متداخلة */}
            <path d="M20,60 Q60,20 100,60 Q140,100 180,60 Q220,20 240,60" 
                  fill="none" stroke="currentColor" strokeWidth="4"/>
            <path d="M20,60 Q60,100 100,60 Q140,20 180,60 Q220,100 240,60" 
                  fill="none" stroke="rgba(29, 78, 216, 0.6)" strokeWidth="3"/>
            {/* نقاط زينة */}
            <circle cx="60" cy="40" r="4" fill="rgba(29, 78, 216, 0.8)"/>
            <circle cx="140" cy="80" r="4" fill="currentColor"/>
            <circle cx="180" cy="40" r="4" fill="rgba(29, 78, 216, 0.8)"/>
          </g>
        </svg>
      </div>

      {/* زخرفة هندسية مربعة */}
      <div className="absolute bottom-20 right-28 w-24 h-24 animate-float" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 160 160" className="w-full h-full text-moroccan-blue opacity-30">
          <g transform="translate(80,80)">
            {/* مربعات متداخلة */}
            <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(0)"/>
            <rect x="-40" y="-40" width="80" height="80" fill="rgba(234, 179, 8, 0.2)" stroke="rgba(234, 179, 8, 0.8)" strokeWidth="2" transform="rotate(45)"/>
            <rect x="-25" y="-25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(0)"/>
            <circle cx="0" cy="0" r="8" fill="rgba(234, 179, 8, 0.9)"/>
          </g>
        </svg>
      </div>

      {/* زخرفة زهرة مغربية */}
      <div className="absolute top-1/2 left-1/4 w-20 h-20 animate-float" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 120 120" className="w-full h-full text-moroccan-gold opacity-28">
          <g transform="translate(60,60)">
            {/* بتلات الزهرة */}
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="currentColor" transform="rotate(0)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="rgba(29, 78, 216, 0.6)" transform="rotate(45)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="currentColor" transform="rotate(90)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="rgba(29, 78, 216, 0.6)" transform="rotate(135)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="currentColor" transform="rotate(180)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="rgba(29, 78, 216, 0.6)" transform="rotate(225)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="currentColor" transform="rotate(270)"/>
            <path d="M0,-40 Q20,-20 0,0 Q-20,-20 0,-40" fill="rgba(29, 78, 216, 0.6)" transform="rotate(315)"/>
            {/* مركز الزهرة */}
            <circle cx="0" cy="0" r="6" fill="rgba(29, 78, 216, 0.9)"/>
          </g>
        </svg>
      </div>

      {/* زخرفة سداسية */}
      <div className="absolute top-3/4 right-1/3 w-16 h-16 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-moroccan-blue opacity-32">
          <g transform="translate(50,50)">
            {/* السداسي الخارجي */}
            <path d="M0,-35 L30,-17.5 L30,17.5 L0,35 L-30,17.5 L-30,-17.5 Z" 
                  fill="rgba(234, 179, 8, 0.3)" stroke="currentColor" strokeWidth="2"/>
            {/* السداسي الداخلي */}
            <path d="M0,-20 L17,-10 L17,10 L0,20 L-17,10 L-17,-10 Z" 
                  fill="rgba(29, 78, 216, 0.4)" stroke="rgba(234, 179, 8, 0.8)" strokeWidth="1"/>
            {/* خطوط داخلية */}
            <line x1="0" y1="-35" x2="0" y2="35" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="1"/>
            <line x1="-30" y1="-17.5" x2="30" y2="17.5" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="1"/>
            <line x1="-30" y1="17.5" x2="30" y2="-17.5" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      {/* زخارف صغيرة متناثرة */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 animate-float" style={{ animationDelay: '4s' }}>
        <svg viewBox="0 0 60 60" className="w-full h-full text-moroccan-gold opacity-40">
          <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="30" r="10" fill="rgba(29, 78, 216, 0.6)"/>
          <circle cx="30" cy="30" r="4" fill="currentColor"/>
        </svg>
      </div>

      <div className="absolute top-2/3 left-1/3 w-6 h-6 animate-float" style={{ animationDelay: '2.5s' }}>
        <svg viewBox="0 0 40 40" className="w-full h-full text-moroccan-blue opacity-45">
          <rect x="10" y="10" width="20" height="20" fill="currentColor" transform="rotate(45 20 20)"/>
        </svg>
      </div>

      {/* خلفية نقوش إضافية */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(234, 179, 8, 0.05) 0%, transparent 50%)
        `
      }}></div>
    </div>
  );
};

export default MoroccanPattern;
