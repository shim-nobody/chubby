import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { content } from '../config/content';
import { TeddyBear } from '../components/TeddyBear';
import { AmbientHearts } from '../components/FloatingHearts';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface WelcomeSceneProps {
  onNext: () => void;
}

/* Tiny star particles */
function Stars() {
  const positions = [
    { top: '12%', left: '8%', delay: 0, size: 14 },
    { top: '20%', left: '88%', delay: 0.5, size: 10 },
    { top: '70%', left: '5%', delay: 1, size: 12 },
    { top: '80%', left: '92%', delay: 1.5, size: 10 },
    { top: '45%', left: '94%', delay: 0.8, size: 8 },
    { top: '55%', left: '3%', delay: 1.2, size: 8 },
    { top: '30%', left: '50%', delay: 0.3, size: 10 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute select-none pointer-events-none"
          style={{ top: p.top, left: p.left, fontSize: p.size }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
}

/* Decorative floating flower */
function Flower({ style }: { style?: CSSProperties }) {
  return (
    <motion.div
      className="absolute text-2xl select-none pointer-events-none"
      style={style}
      animate={{ rotate: [0, 10, -10, 0], y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      🌸
    </motion.div>
  );
}

export function WelcomeScene({ onNext }: WelcomeSceneProps) {
  const reduced = useReducedMotion();
  const { welcome } = content;

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 py-10"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(145deg, #FFF5F8 0%, #FFD6E5 45%, #DCCBFF 100%)',
      }}
    >
      {/* Ambient hearts */}
      <AmbientHearts count={10} />

      {/* Stars */}
      <Stars />

      {/* Flowers */}
      <Flower style={{ top: '8%', right: '10%' }} />
      <Flower style={{ bottom: '15%', left: '8%' }} />
      <Flower style={{ top: '50%', left: '5%', fontSize: '1rem' }} />

      {/* Glow orb behind teddy */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 'min(300px, 80vw)',
          height: 'min(300px, 80vw)',
          background: 'radial-gradient(circle, rgba(255,107,157,0.18) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -58%)',
        }}
      />

      {/* Teddy */}
      <motion.div
        initial={reduced ? {} : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="mb-4 relative z-10"
      >
        <TeddyBear size="xl" variant="waving" animate={!reduced} />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="font-handwritten text-center leading-tight mb-2 relative z-10"
        style={{ color: '#FF6B9D', fontSize: 'clamp(28px, 8vw, 48px)', textShadow: '0 2px 12px rgba(255,107,157,0.25)' }}
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {welcome.heading}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="font-serif-custom italic text-center mb-1 relative z-10"
        style={{ color: '#49333D', fontSize: 'clamp(14px, 4vw, 20px)', maxWidth: 340 }}
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {welcome.subheading}
      </motion.p>

      {/* Small text */}
      <motion.p
        className="font-handwritten text-center mb-8 relative z-10 opacity-70"
        style={{ color: '#FF6B9D', fontSize: 'clamp(12px, 3vw, 15px)' }}
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {welcome.smallText}
      </motion.p>

      {/* CTA button */}
      <motion.button
        onClick={onNext}
        className="relative z-10 px-10 py-4 rounded-full text-white font-semibold shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)',
          fontSize: 'clamp(15px, 4vw, 18px)',
          boxShadow: '0 8px 32px rgba(255,107,157,0.4)',
        }}
        initial={reduced ? {} : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(255,107,157,0.55)' }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Heartbeat pulse ring */}
        {!reduced && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-white/40"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        {welcome.buttonLabel}
      </motion.button>
    </div>
  );
}
