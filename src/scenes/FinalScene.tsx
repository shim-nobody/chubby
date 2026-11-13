import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../config/content';
import { TeddyCouple } from '../components/TeddyBear';
import { FloatingHearts } from '../components/FloatingHearts';
import { useReducedMotion } from '../hooks/useReducedMotion';

/* Glowing stars for the final scene */
function GlowStars() {
  const stars = [
    { top: '8%', left: '12%', size: 18, delay: 0 },
    { top: '14%', left: '82%', size: 14, delay: 0.4 },
    { top: '30%', left: '6%', size: 10, delay: 0.8 },
    { top: '28%', left: '90%', size: 12, delay: 0.6 },
    { top: '60%', left: '4%', size: 10, delay: 1.2 },
    { top: '65%', left: '93%', size: 12, delay: 0.9 },
    { top: '50%', left: '50%', size: 10, delay: 0.3 },
    { top: '18%', left: '45%', size: 8, delay: 1.0 },
  ];
  return (
    <>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute select-none pointer-events-none"
          style={{ top: s.top, left: s.left, fontSize: s.size }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
}

/* Heart moon */
function HeartMoon() {
  return (
    <motion.div
      className="relative mx-auto mb-6 select-none pointer-events-none"
      style={{ width: 'min(160px, 42vw)', height: 'min(160px, 42vw)' }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Moon */}
        <circle cx="80" cy="90" r="62" fill="#FFD6E5"/>
        <circle cx="80" cy="90" r="62" fill="url(#moonGrad)"/>
        {/* Heart shape */}
        <path
          d="M80 55 C80 55 55 35 42 48 C29 61 55 85 80 108 C105 85 131 61 118 48 C105 35 80 55 80 55Z"
          fill="#FF6B9D"
          fillOpacity="0.7"
        />
        {/* Glow halo */}
        <circle cx="80" cy="90" r="62" fill="none" stroke="#FF8FB3" strokeWidth="4" strokeOpacity="0.3"/>
        <defs>
          <radialGradient id="moonGrad" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#FFE8F0"/>
            <stop offset="100%" stopColor="#FFD6E5"/>
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

/* Full-screen heart explosion */
function HeartExplosion({ active }: { active: boolean }) {
  if (!active) return null;
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 95,
    delay: Math.random() * 1,
    duration: 2.5 + Math.random() * 2,
    size: 16 + Math.random() * 24,
    emoji: ['❤️', '💗', '💕', '🩷', '💓'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="heart-explosion-overlay">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none"
          style={{ left: `${h.left}%`, bottom: '-5%', fontSize: h.size }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: `-110vh`, opacity: 0 }}
          transition={{ duration: h.duration, delay: h.delay, ease: 'easeOut' }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
}

export function FinalScene() {
  const { final } = content;
  const reduced = useReducedMotion();
  const [hugged, setHugged] = useState(false);
  const [explodeKey, setExplodeKey] = useState(0);

  const handleHug = () => {
    setHugged(true);
    setExplodeKey((k) => k + 1);
  };

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 py-10"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(145deg, #FFF5F8 0%, #FFD6E5 40%, #DCCBFF 80%, #FFF5F8 100%)',
      }}
    >
      {/* Heart explosion */}
      {!reduced && <HeartExplosion key={explodeKey} active={hugged} />}
      {hugged && <FloatingHearts count={20} trigger />}

      {/* Stars */}
      <GlowStars />

      {/* Heart moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <HeartMoon />
      </motion.div>

      {/* Teddy couple under moon */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <TeddyCouple size="md" hugging />
      </motion.div>

      {/* Flowers row */}
      <motion.div
        className="flex gap-2 mb-8 text-2xl select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {['🌸', '🌷', '🌸', '🌷', '🌸', '🌷', '🌸'].map((f, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          >
            {f}
          </motion.span>
        ))}
      </motion.div>

      {/* Main heading */}
      <motion.h2
        className="font-serif-custom font-semibold text-center mb-4 leading-tight"
        style={{ color: '#49333D', fontSize: 'clamp(20px, 5.5vw, 32px)', maxWidth: 380 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {final.heading}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="font-serif-custom italic text-center mb-6"
        style={{ color: '#49333D', fontSize: 'clamp(14px, 3.8vw, 18px)', maxWidth: 360, opacity: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {final.subtitle}
      </motion.p>

      {/* Final message */}
      <motion.div
        className="text-center px-6 py-5 rounded-3xl mb-8"
        style={{
          background: 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(255,107,157,0.15)',
          maxWidth: 320,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {final.message.split('\n').map((line, i) => (
          <p
            key={i}
            className="font-handwritten"
            style={{ color: '#FF6B9D', fontSize: 'clamp(18px, 5vw, 24px)', lineHeight: 1.5 }}
          >
            {line}
          </p>
        ))}
      </motion.div>

      {/* Response message after hug */}
      <AnimatePresence>
        {hugged && (
          <motion.div
            className="text-center px-5 py-4 rounded-2xl mb-6"
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(255,107,157,0.2)',
              maxWidth: 320,
            }}
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <p
              className="font-handwritten"
              style={{ color: '#FF6B9D', fontSize: 'clamp(15px, 4vw, 20px)' }}
            >
              {final.hugResponseMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hug button */}
      <motion.button
        onClick={handleHug}
        className="px-10 py-4 rounded-full text-white font-semibold shadow-lg relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)',
          fontSize: 'clamp(15px, 4vw, 18px)',
          boxShadow: '0 8px 32px rgba(255,107,157,0.45)',
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.06, boxShadow: '0 14px 40px rgba(255,107,157,0.6)' }}
        whileTap={{ scale: 0.95 }}
      >
        {!reduced && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-white/40"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        {final.hugButtonLabel} 🤗
      </motion.button>
    </div>
  );
}
