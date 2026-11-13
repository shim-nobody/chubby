import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface EnvelopeProps {
  onOpen: () => void;
  hint?: string;
  heading?: string;
  intro?: string;
  buttonLabel?: string;
}

export function Envelope({ onOpen, hint = 'Tap the envelope to open', heading, intro, buttonLabel = 'Continue 💗' }: EnvelopeProps) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'open'>('closed');
  const reduced = useReducedMotion();

  const handleClick = () => {
    if (phase === 'closed') {
      setPhase('opening');
      setTimeout(() => setPhase('open'), reduced ? 100 : 900);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto px-4">
      {/* Envelope wrapper */}
      <motion.div
        className="relative cursor-pointer select-none"
        style={{ width: 'min(320px, 90vw)', height: 'min(220px, 62vw)' }}
        whileHover={phase === 'closed' ? { scale: 1.03 } : {}}
        whileTap={phase === 'closed' ? { scale: 0.97 } : {}}
        onClick={handleClick}
      >
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #FFD6E5 0%, #FFB3CE 100%)',
            boxShadow: '0 12px 48px rgba(255,107,157,0.3)',
          }}
        >
          {/* Back side triangle (bottom V) */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              borderLeft: 'min(160px,45vw) solid transparent',
              borderRight: 'min(160px,45vw) solid transparent',
              borderBottom: 'min(110px,31vw) solid #FFB3CE',
            }}
          />
          {/* Left side fold */}
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{
              borderTop: 'min(110px,31vw) solid transparent',
              borderBottom: 'min(110px,31vw) solid transparent',
              borderLeft: 'min(140px,40vw) solid rgba(255,160,196,0.5)',
            }}
          />
          {/* Right side fold */}
          <div
            className="absolute right-0 top-0 bottom-0"
            style={{
              borderTop: 'min(110px,31vw) solid transparent',
              borderBottom: 'min(110px,31vw) solid transparent',
              borderRight: 'min(140px,40vw) solid rgba(255,160,196,0.5)',
            }}
          />
        </div>

        {/* Flap — animates open */}
        <motion.div
          className="absolute inset-x-0 top-0 origin-top"
          style={{ zIndex: 10 }}
          animate={phase === 'opening' || phase === 'open'
            ? { rotateX: reduced ? 0 : -175, scaleY: reduced ? -1 : 1 }
            : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg
            viewBox="0 0 320 120"
            style={{ width: 'min(320px, 90vw)', display: 'block' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="0,0 320,0 160,112" fill="#FF8FB3"/>
            <polygon points="0,0 320,0 160,112" fill="url(#flapGrad)"/>
            <defs>
              <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6B9D"/>
                <stop offset="100%" stopColor="#FF8FB3"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Heart seal on flap */}
        <AnimatePresence>
          {phase === 'closed' && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: '28%', zIndex: 20 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-4xl drop-shadow-lg"
              >
                💌
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter emerging */}
        <AnimatePresence>
          {(phase === 'opening' || phase === 'open') && (
            <motion.div
              className="absolute inset-x-4 rounded-xl flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, #FFF9F0 0%, #FFF5F8 100%)',
                zIndex: 5,
                top: '8%',
                bottom: '8%',
                boxShadow: 'inset 0 2px 8px rgba(255,107,157,0.1)',
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: phase === 'open' ? -30 : 10, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <span className="text-2xl mb-1">❤️</span>
              <p
                className="font-handwritten text-center px-3 leading-tight"
                style={{ color: '#FF6B9D', fontSize: 'clamp(14px, 3.5vw, 18px)' }}
              >
                {heading ?? 'To My Favourite Person'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hint text */}
      <AnimatePresence>
        {phase === 'closed' && (
          <motion.p
            className="font-handwritten text-center"
            style={{ color: '#FF6B9D', fontSize: 'clamp(14px, 3.5vw, 18px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            exit={{ opacity: 0 }}
          >
            {hint}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Content after open */}
      <AnimatePresence>
        {phase === 'open' && (
          <motion.div
            className="text-center px-4 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p
              className="font-handwritten mb-6 leading-relaxed"
              style={{ color: '#49333D', fontSize: 'clamp(15px, 4vw, 20px)' }}
            >
              {intro}
            </p>
            <motion.button
              onClick={onOpen}
              className="px-8 py-3 rounded-full font-semibold text-white shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(255,107,157,0.45)' }}
              whileTap={{ scale: 0.96 }}
            >
              {buttonLabel}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

