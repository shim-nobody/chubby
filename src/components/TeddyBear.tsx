import { motion } from 'framer-motion';

interface TeddyBearProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'waving' | 'hugging' | 'flower' | 'moon' | 'letter';
  className?: string;
  animate?: boolean;
}

const sizes = { sm: 80, md: 120, lg: 160, xl: 200 };

/* Pure SVG teddies — no external images needed */
function TeddySVG({ size, variant }: { size: number; variant: TeddyBearProps['variant'] }) {
  const s = size;

  return (
    <svg width={s} height={s} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="100" cy="140" rx="52" ry="48" fill="#C8956C"/>
      <ellipse cx="100" cy="140" rx="52" ry="48" fill="url(#bodyGrad)"/>
      {/* Tummy */}
      <ellipse cx="100" cy="148" rx="30" ry="26" fill="#E8B48A"/>

      {/* Left leg */}
      <ellipse cx="72" cy="180" rx="22" ry="14" fill="#C8956C"/>
      {/* Right leg */}
      <ellipse cx="128" cy="180" rx="22" ry="14" fill="#C8956C"/>

      {/* Left arm */}
      {variant === 'hugging' ? (
        <path d="M48 120 Q20 130 30 155" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      ) : variant === 'flower' ? (
        <path d="M48 128 Q22 118 18 95" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      ) : variant === 'waving' ? (
        <path d="M48 118 Q28 95 38 72" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      ) : variant === 'letter' ? (
        <path d="M48 128 Q28 118 24 100" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      ) : (
        <path d="M48 128 Q28 118 30 100" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      )}

      {/* Right arm */}
      {variant === 'hugging' ? (
        <path d="M152 120 Q178 130 170 155" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      ) : variant === 'flower' ? (
        <path d="M152 128 Q172 112 162 90" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      ) : (
        <path d="M152 128 Q172 118 170 100" stroke="#C8956C" strokeWidth="20" strokeLinecap="round" fill="none"/>
      )}

      {/* Head */}
      <circle cx="100" cy="82" r="52" fill="#D4A574"/>
      <circle cx="100" cy="82" r="52" fill="url(#headGrad)"/>

      {/* Ears */}
      <circle cx="58" cy="42" r="20" fill="#C8956C"/>
      <circle cx="58" cy="42" r="12" fill="#E8B48A"/>
      <circle cx="142" cy="42" r="20" fill="#C8956C"/>
      <circle cx="142" cy="42" r="12" fill="#E8B48A"/>

      {/* Face area */}
      <ellipse cx="100" cy="92" rx="34" ry="28" fill="#E8B48A"/>

      {/* Eyes */}
      <circle cx="86" cy="78" r="7" fill="#49333D"/>
      <circle cx="114" cy="78" r="7" fill="#49333D"/>
      <circle cx="88" cy="76" r="2.5" fill="white"/>
      <circle cx="116" cy="76" r="2.5" fill="white"/>

      {/* Nose */}
      <ellipse cx="100" cy="90" rx="5" ry="3.5" fill="#8B5E3C"/>

      {/* Mouth */}
      <path d="M90 97 Q100 106 110 97" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* Cheeks */}
      <ellipse cx="78" cy="92" rx="10" ry="6" fill="#FF6B9D" fillOpacity="0.35"/>
      <ellipse cx="122" cy="92" rx="10" ry="6" fill="#FF6B9D" fillOpacity="0.35"/>

      {/* Variant extras */}
      {variant === 'waving' && (
        <>
          {/* Waving paw effect */}
          <circle cx="40" cy="68" r="12" fill="#C8956C"/>
          {/* Little heart near hand */}
          <text x="12" y="52" fontSize="18">💗</text>
        </>
      )}

      {variant === 'flower' && (
        <>
          {/* Flower */}
          <circle cx="162" cy="82" r="10" fill="#FF6B9D"/>
          <circle cx="150" cy="72" r="8" fill="#FFB3D1"/>
          <circle cx="174" cy="72" r="8" fill="#FFB3D1"/>
          <circle cx="150" cy="92" r="8" fill="#FFB3D1"/>
          <circle cx="174" cy="92" r="8" fill="#FFB3D1"/>
          <circle cx="162" cy="82" r="6" fill="#FFD6E5"/>
        </>
      )}

      {variant === 'moon' && (
        <text x="68" y="65" fontSize="22">✨</text>
      )}

      {variant === 'letter' && (
        <>
          {/* Holding letter */}
          <rect x="18" y="90" width="30" height="22" rx="3" fill="white" stroke="#FFD6E5" strokeWidth="2"/>
          <line x1="22" y1="97" x2="44" y2="97" stroke="#FF6B9D" strokeWidth="1.5"/>
          <line x1="22" y1="102" x2="44" y2="102" stroke="#FF6B9D" strokeWidth="1.5"/>
          <line x1="22" y1="107" x2="38" y2="107" stroke="#FF6B9D" strokeWidth="1.5"/>
        </>
      )}

      {/* Bow tie */}
      <path d="M88 118 L100 125 L112 118 L100 111 Z" fill="#FF6B9D"/>
      <circle cx="100" cy="118" r="4" fill="#FF8FB3"/>

      {/* Gradient defs */}
      <defs>
        <radialGradient id="headGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#E8C49A"/>
          <stop offset="100%" stopColor="#D4A574"/>
        </radialGradient>
        <radialGradient id="bodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#D4A574"/>
          <stop offset="100%" stopColor="#B8784A"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function TeddyBear({ size = 'md', variant = 'default', className = '', animate = true }: TeddyBearProps) {
  const px = sizes[size];

  return (
    <motion.div
      className={`inline-block select-none ${className}`}
      animate={animate ? { y: [0, -8, 0] } : {}}
      transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
      style={{ width: px, height: px }}
    >
      <TeddySVG size={px} variant={variant} />
    </motion.div>
  );
}

/* Two teddies side by side */
export function TeddyCouple({
  size = 'md',
  hugging = false,
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  hugging?: boolean;
  className?: string;
}) {
  const px = sizes[size];
  const gap = hugging ? -px * 0.25 : px * 0.1;

  return (
    <div className={`flex items-end justify-center ${className}`} style={{ gap }}>
      <motion.div
        animate={{ y: [0, -6, 0], rotate: hugging ? [-3, -3] : [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: px, height: px }}
      >
        <TeddySVG size={px} variant={hugging ? 'hugging' : 'default'} />
      </motion.div>
      <div style={{ transform: 'scaleX(-1)' }}>
        <motion.div
          animate={{ y: [0, -6, 0], rotate: hugging ? [3, 3] : [3, -3, 3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          style={{ width: px, height: px }}
        >
          <TeddySVG size={px} variant={hugging ? 'hugging' : 'default'} />
        </motion.div>
      </div>
    </div>
  );
}
