import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision M/W & Wheel Monogram SVG */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconDimensions} flex-shrink-0 transition-transform duration-300 hover:rotate-6`}
        aria-label="Mist Wheels Monogram Mark"
        role="img"
      >
        <defs>
          <linearGradient id="wheelRimGrad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.6" stopColor="#0284C7" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="monogramGrad" x1="16" y1="18" x2="48" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="0.5" stopColor="#BAE6FD" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B1329" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Wheel Glow & Rim Background */}
        <circle cx="32" cy="32" r="29" fill="#090E1A" />
        <circle cx="32" cy="32" r="28" fill="url(#hubGlow)" />
        
        {/* Outer Machined Alloy Rim */}
        <circle
          cx="32"
          cy="32"
          r="27"
          stroke="url(#wheelRimGrad)"
          strokeWidth="3"
        />

        {/* Brake Disc / Inner Rim Perforation */}
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="#1E293B"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* Interlocked M and W Engineering Mark */}
        {/* Top 'M' - crisp, geometric */}
        <path
          d="M19 36 V21 L26 28 L32 21 L38 28 L45 21 V36"
          stroke="url(#monogramGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom 'W' & Aero Spoke Geometry */}
        <path
          d="M23 27 L27 43 L32 37 L37 43 L41 27"
          stroke="#38BDF8"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* Precision Centre Bore */}
        <circle cx="32" cy="32" r="2.8" fill="#F8FAFC" />
        <circle cx="32" cy="32" r="1.2" fill="#0284C7" />

        {/* Mist Steam Arc Accent */}
        <path
          d="M48 18 C52 22, 54 28, 54 32 C54 38, 50 44, 46 48"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.7"
        />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold tracking-tight text-white flex items-center leading-none ${textSize}`}>
            <span>MIST</span>
            <span className="text-sky-400 ml-1.5 font-extrabold tracking-wide">WHEELS</span>
          </div>
          <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-semibold mt-1">
            Mobile Car Care &bull; Kampala
          </span>
        </div>
      )}
    </div>
  );
};
