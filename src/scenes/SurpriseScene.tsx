import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../config/content';
import { TeddyCouple } from '../components/TeddyBear';
import { FloatingHearts } from '../components/FloatingHearts';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SurpriseSceneProps {
  onNext: () => void;
}

export function SurpriseScene({ onNext }: SurpriseSceneProps) {
  const { surprise } = content;
  const reduced = useReducedMotion();
  const [hugged, setHugged] = useState(false);
  const [heartsKey, setHeartsKey] = useState(0);
  const [flowerBurst, setFlowerBurst] = useState(false);

  const handleHug = () => {
    setHugged(true);
    setHeartsKey((k) => k + 1);
  };

  const handleFlower = () => {
    setFlowerBurst(true);
    setHeartsKey((k) => k + 1);
    setTimeout(() => setFlowerBurst(false), 3500);
  };

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 py-10"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(145deg, #FFF5F8 0%, #FFD6E5 50%, #FFF9F0 100%)',
      }}
    >
      {/* Floating hearts on hug */}
      {hugged && <FloatingHearts key={heartsKey} count={18} trigger />}

      {/* Heading */}
      <motion.h2
        className="font-serif-custom font-semibold text-center mb-2"
        style={{ color: '#49333D', fontSize: 'clamp(20px, 5.5vw, 30px)' }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {surprise.heading}
      </motion.h2>

      {/* Question */}
      <motion.p
        className="font-handwritten text-center mb-8"
        style={{ color: '#FF6B9D', fontSize: 'clamp(18px, 5vw, 26px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {surprise.question}
      </motion.p>

      {/* Teddy couple */}
      <motion.div
        className="mb-8 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <TeddyCouple size="lg" hugging={hugged} />

        {/* Heart between teddies (after hug) */}
        <AnimatePresence>
          {hugged && (
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 text-4xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              ❤️
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flower burst */}
        <AnimatePresence>
          {flowerBurst && (
            <>
              {['🌸', '🌷', '🌹', '🌸', '💐'].map((f, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl select-none pointer-events-none"
                  style={{ top: '50%', left: '50%' }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                  animate={{
                    x: Math.cos((i / 5) * Math.PI * 2) * 90,
                    y: Math.sin((i / 5) * Math.PI * 2) * 90,
                    scale: 1,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  {f}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hug message */}
      <AnimatePresence>
        {hugged && (
          <motion.div
            className="text-center mb-6 px-6 py-4 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(255,107,157,0.15)',
              maxWidth: 320,
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <p
              className="font-handwritten"
              style={{ color: '#FF6B9D', fontSize: 'clamp(16px, 4.5vw, 22px)' }}
            >
              {surprise.hugMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        {!hugged && (
          <motion.button
            onClick={handleHug}
            className="w-full py-4 rounded-full text-white font-semibold shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)',
              fontSize: 'clamp(15px, 4vw, 18px)',
              boxShadow: '0 8px 28px rgba(255,107,157,0.4)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 36px rgba(255,107,157,0.55)' }}
            whileTap={{ scale: 0.95 }}
          >
            {surprise.hugButtonLabel}
          </motion.button>
        )}

        <motion.button
          onClick={handleFlower}
          className="w-full py-3 rounded-full font-semibold border-2"
          style={{
            borderColor: '#FF6B9D',
            color: '#FF6B9D',
            background: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          whileHover={{ scale: 1.03, background: 'rgba(255,214,229,0.5)' }}
          whileTap={{ scale: 0.96 }}
        >
          {surprise.surpriseButtonLabel} 🌸
        </motion.button>

        <motion.button
          onClick={onNext}
          className="w-full py-3 rounded-full font-semibold text-white shadow-md"
          style={{
            background: 'linear-gradient(135deg, #DCCBFF 0%, #BFA4FF 100%)',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          {surprise.buttonLabel}
        </motion.button>
      </div>
    </div>
  );
}
