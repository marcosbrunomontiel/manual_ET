import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: 'full' | 'icon' | 'white';
}

export const ElTribunoLogo: React.FC<LogoProps> = ({
  className = "h-10",
  showSubtitle = false,
  variant = 'full'
}) => {
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#FFFFFF' : '#002D62';
  const redColor = isWhite ? '#F87171' : '#D9252A';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Isotipo: Canillita dentro de arco rojo */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Isotipo El Tribuno"
      >
        {/* Arco circular rojo */}
        <path
          d="M 50 8 A 42 42 0 1 0 88 64"
          stroke={redColor}
          strokeWidth="11"
          strokeLinecap="round"
        />
        {/* Silueta dinámica de canillita/repartidor */}
        <g fill={navyColor}>
          {/* Cabeza */}
          <circle cx="58" cy="28" r="8" />
          {/* Torso inclinado hacia adelante */}
          <path d="M 52 36 L 66 40 L 58 62 L 48 56 Z" />
          {/* Brazo con periódico/bolso */}
          <path d="M 64 42 L 78 48 L 74 54 L 60 48 Z" />
          <rect x="70" y="44" width="12" height="15" rx="1.5" transform="rotate(-15 70 44)" fill={navyColor} />
          {/* Piernas corriendo en zancada */}
          <path d="M 58 62 L 72 78 L 82 76 L 72 84 L 56 68 Z" />
          <path d="M 48 56 L 36 70 L 26 66 L 34 82 L 46 64 Z" />
        </g>
      </svg>

      {/* Logotipo tipográfico */}
      {variant !== 'icon' && (
        <div className="flex flex-col">
          <span
            className="font-bitter font-black text-2xl tracking-tight leading-none"
            style={{ color: navyColor }}
          >
            El Tribuno
          </span>
          {showSubtitle && (
            <span
              className="font-fago text-[10px] uppercase font-bold tracking-widest mt-0.5"
              style={{ color: isWhite ? '#E2E8F0' : '#475569' }}
            >
              El diario de Salta • Desde 1949
            </span>
          )}
        </div>
      )}
    </div>
  );
};
