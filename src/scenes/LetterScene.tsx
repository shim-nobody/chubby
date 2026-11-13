import { motion } from 'framer-motion';
import { content } from '../config/content';
import { ApologyLetter } from '../components/ApologyLetter';
import { TeddyBear } from '../components/TeddyBear';

interface LetterSceneProps {
  onNext: () => void;
}

export function LetterScene({ onNext }: LetterSceneProps) {
  const { letter } = content;

  return (
    <div
      className="relative w-full flex flex-col items-center justify-start overflow-hidden px-4 py-10"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(180deg, #FFF9F0 0%, #FFF5F8 60%, #FFD6E5 100%)',
      }}
    >
      {/* Decorative top banner */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl">💌</span>
        <h2
          className="font-serif-custom italic mt-2"
          style={{ color: '#FF6B9D', fontSize: 'clamp(18px, 5vw, 26px)' }}
        >
          A Letter From My Heart
        </h2>
      </motion.div>

      {/* Letter + teddy layout */}
      <div className="w-full max-w-lg flex flex-col items-center gap-4">
        {/* Teddy sitting beside letter */}
        <motion.div
          className="self-end mr-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <TeddyBear size="sm" variant="letter" animate />
        </motion.div>

        {/* Letter */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ApologyLetter
            salutation={letter.salutation}
            paragraphs={letter.paragraphs}
            closing={letter.closing}
            signature={letter.signature}
          />
        </motion.div>
      </div>

      {/* Continue button */}
      <motion.button
        onClick={onNext}
        className="mt-10 px-10 py-4 rounded-full text-white font-semibold shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)',
          fontSize: 'clamp(15px, 4vw, 18px)',
          boxShadow: '0 8px 28px rgba(255,107,157,0.35)',
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.06, boxShadow: '0 12px 36px rgba(255,107,157,0.5)' }}
        whileTap={{ scale: 0.96 }}
      >
        {letter.buttonLabel}
      </motion.button>

      {/* Petal decorations */}
      {['🌸', '🌷', '🌸', '🌷'].map((f, i) => (
        <motion.div
          key={i}
          className="absolute select-none pointer-events-none text-xl"
          style={{
            top: `${[8, 20, 75, 88][i]}%`,
            left: `${[85, 2, 90, 3][i]}%`,
          }}
          animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          {f}
        </motion.div>
      ))}
    </div>
  );
}
