import { motion } from 'framer-motion';
import { content } from '../config/content';
import { PromiseCard } from '../components/PromiseCard';

interface PromisesSceneProps {
  onNext: () => void;
}

export function PromisesScene({ onNext }: PromisesSceneProps) {
  const { promises } = content;

  return (
    <div
      className="relative w-full flex flex-col items-center justify-start overflow-hidden px-4 py-10"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(145deg, #FFF5F8 0%, #FFD6E5 50%, #DCCBFF 100%)',
      }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-4xl block mb-2">💗</span>
        <h2
          className="font-serif-custom font-semibold"
          style={{ color: '#49333D', fontSize: 'clamp(20px, 6vw, 32px)' }}
        >
          {promises.heading}
        </h2>
        <div
          className="mx-auto mt-3 h-1 rounded-full"
          style={{ width: 60, background: 'linear-gradient(90deg, #FF6B9D, #DCCBFF)' }}
        />
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-5 w-full max-w-sm">
        {promises.cards.map((card, i) => (
          <div key={i} className="relative w-full flex justify-center">
            <PromiseCard
              title={card.title}
              message={card.message}
              emoji={card.emoji}
              index={i}
            />
          </div>
        ))}
      </div>

      {/* Floral decoration row */}
      <motion.div
        className="flex gap-3 mt-8 text-2xl select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {['🌸', '🌷', '💗', '🌷', '🌸'].map((f, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
          >
            {f}
          </motion.span>
        ))}
      </motion.div>

      {/* Continue button */}
      <motion.button
        onClick={onNext}
        className="mt-8 px-10 py-4 rounded-full text-white font-semibold shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)',
          fontSize: 'clamp(15px, 4vw, 18px)',
          boxShadow: '0 8px 28px rgba(255,107,157,0.35)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.06, boxShadow: '0 12px 36px rgba(255,107,157,0.5)' }}
        whileTap={{ scale: 0.96 }}
      >
        {promises.buttonLabel}
      </motion.button>
    </div>
  );
}
