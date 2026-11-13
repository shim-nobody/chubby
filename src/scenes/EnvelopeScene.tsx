import { motion } from 'framer-motion';
import { content } from '../config/content';
import { Envelope } from '../components/Envelope';
import { AmbientHearts } from '../components/FloatingHearts';

interface EnvelopeSceneProps {
  onNext: () => void;
}

export function EnvelopeScene({ onNext }: EnvelopeSceneProps) {
  const { envelope } = content;

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 py-10"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(160deg, #FFF5F8 0%, #FFD6E5 60%, #FFF9F0 100%)',
      }}
    >
      <AmbientHearts count={6} />

      {/* Decorative petals */}
      {['🌸', '🌷', '🌸'].map((f, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none pointer-events-none"
          style={{
            top: `${[15, 70, 85][i]}%`,
            left: `${[10, 5, 88][i]}%`,
            fontSize: ['1.5rem', '1.2rem', '1.4rem'][i],
          }}
          animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        >
          {f}
        </motion.div>
      ))}

      {/* Heading */}
      <motion.h2
        className="font-serif-custom italic text-center mb-8"
        style={{ color: '#49333D', fontSize: 'clamp(18px, 5vw, 28px)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A little something for you ✨
      </motion.h2>

      {/* Envelope component */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-full"
      >
        <Envelope
          onOpen={onNext}
          hint={envelope.tapHint}
          heading={envelope.heading}
          intro={envelope.intro}
          buttonLabel={envelope.buttonLabel}
        />
      </motion.div>
    </div>
  );
}
