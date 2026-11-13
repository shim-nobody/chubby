import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface FloatingHeartsProps {
  count?: number;
  trigger?: boolean;
  className?: string;
}

const HEARTS = ['❤️', '🩷', '💗', '💓', '💕', '🌸', '✨'];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function FloatingHearts({ count = 12, trigger = true, className = '' }: FloatingHeartsProps) {
  const reduced = useReducedMotion();
  if (reduced || !trigger) return null;

  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
    left: randomBetween(2, 95),
    delay: randomBetween(0, 2.5),
    duration: randomBetween(3.5, 6),
    size: randomBetween(14, 28),
    startY: randomBetween(60, 100),
  }));

  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden z-50 ${className}`}>
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none"
          style={{ left: `${h.left}%`, bottom: `${h.startY - 60}%`, fontSize: h.size }}
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{ y: `-${90 + randomBetween(0, 20)}vh`, opacity: 0, scale: 0.6 }}
          transition={{ duration: h.duration, delay: h.delay, ease: 'easeOut' }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Ambient background hearts (always present, subtle) ── */
export function AmbientHearts({ count = 8 }: { count?: number }) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: ['💗', '🩷', '💕', '✨'][i % 4],
    left: (i / count) * 95 + 2,
    delay: (i / count) * 4,
    size: randomBetween(10, 18),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none"
          style={{ left: `${h.left}%`, bottom: '-5%', fontSize: h.size }}
          animate={{ y: [0, -800], opacity: [0, 0.7, 0] }}
          transition={{
            duration: 8,
            delay: h.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 2,
          }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
}

