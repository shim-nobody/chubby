import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface PromiseCardProps {
  title: string;
  message: string;
  emoji: string;
  index: number;
}

export function PromiseCard({ title, message, emoji, index }: PromiseCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="card-gradient-border relative rounded-3xl p-6 flex flex-col items-center text-center w-full"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(255,107,157,0.12), 0 2px 8px rgba(73,51,61,0.06)',
        maxWidth: 320,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={reduced ? {} : {
        scale: 1.04,
        rotate: index % 2 === 0 ? 1.5 : -1.5,
        boxShadow: '0 16px 48px rgba(255,107,157,0.22)',
        y: -4,
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Emoji icon */}
      <motion.div
        className="text-5xl mb-4"
        animate={reduced ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
      >
        {emoji}
      </motion.div>

      {/* Title */}
      <h3
        className="font-serif-custom font-semibold mb-3"
        style={{ color: '#FF6B9D', fontSize: 'clamp(16px, 4.5vw, 20px)' }}
      >
        {title}
      </h3>

      {/* Message */}
      <p
        className="font-handwritten leading-relaxed"
        style={{ color: '#49333D', fontSize: 'clamp(15px, 3.8vw, 18px)' }}
      >
        {message}
      </p>

      {/* Decorative corner hearts */}
      <div className="absolute top-3 right-4 text-sm opacity-40">💗</div>
      <div className="absolute bottom-3 left-4 text-sm opacity-40">🌸</div>
    </motion.div>
  );
}
