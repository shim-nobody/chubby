import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ApologyLetterProps {
  salutation: string;
  paragraphs: readonly string[];
  closing: string;
  signature: string;
}

export function ApologyLetter({ salutation, paragraphs, closing, signature }: ApologyLetterProps) {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.18,
        delayChildren: reduced ? 0 : 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <div
      className="relative paper-texture rounded-3xl overflow-hidden mx-auto w-full"
      style={{
        maxWidth: 480,
        boxShadow: '0 12px 48px rgba(73,51,61,0.12), 0 2px 8px rgba(255,107,157,0.1)',
      }}
    >
      {/* Pink left border accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
        style={{ background: 'linear-gradient(180deg, #FF6B9D, #DCCBFF)' }}
      />

      {/* Decorative corner flowers */}
      <div className="absolute top-4 right-5 text-xl opacity-50 select-none">🌸</div>
      <div className="absolute bottom-4 left-6 text-xl opacity-50 select-none">🌸</div>
      <div className="absolute top-4 left-6 text-sm opacity-30 select-none">💗</div>

      <motion.div
        className="px-7 py-8 pl-9"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* Salutation */}
        <motion.p
          variants={item}
          className="font-handwritten mb-5"
          style={{ color: '#FF6B9D', fontSize: 'clamp(20px, 5vw, 26px)' }}
        >
          {salutation}
        </motion.p>

        {/* Paragraphs */}
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            variants={item}
            className="font-handwritten mb-4 leading-relaxed"
            style={{
              color: '#49333D',
              fontSize: 'clamp(15px, 3.8vw, 19px)',
              fontWeight: para.includes('❤️') || para.startsWith('I love') ? 500 : 400,
            }}
          >
            {para}
          </motion.p>
        ))}

        {/* Closing */}
        <motion.div variants={item} className="mt-6 pt-4 border-t border-pink-100">
          <p
            className="font-handwritten"
            style={{ color: '#49333D', fontSize: 'clamp(14px, 3.5vw, 18px)' }}
          >
            {closing}
          </p>
          <p
            className="font-handwritten font-semibold mt-1"
            style={{ color: '#FF6B9D', fontSize: 'clamp(18px, 4.5vw, 24px)' }}
          >
            {signature}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

