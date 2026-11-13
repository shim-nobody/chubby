import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WelcomeScene } from './scenes/WelcomeScene';
import { EnvelopeScene } from './scenes/EnvelopeScene';
import { LetterScene } from './scenes/LetterScene';
import { PromisesScene } from './scenes/PromisesScene';
import { SurpriseScene } from './scenes/SurpriseScene';
import { FinalScene } from './scenes/FinalScene';
import { MusicToggle } from './components/MusicToggle';
import { useReducedMotion } from './hooks/useReducedMotion';

type Scene = 0 | 1 | 2 | 3 | 4 | 5;

const SCENE_COUNT = 6;

/* Progress dots */
function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-40 pointer-events-none">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: i === current ? 20 : 7,
            height: 7,
            background: i === current
              ? 'linear-gradient(90deg, #FF6B9D, #FF8FB3)'
              : 'rgba(255,107,157,0.28)',
            transition: 'width 0.35s ease, background 0.35s ease',
          }}
          animate={{ scale: i === current ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}

/* Page transition wrapper */
function PageTransition({
  children,
  sceneKey,
}: {
  children: React.ReactNode;
  sceneKey: number;
}) {
  const reduced = useReducedMotion();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={sceneKey}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: -40, scale: 0.97 }}
        transition={{ duration: reduced ? 0.15 : 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ willChange: 'opacity, transform', width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [scene, setScene] = useState<Scene>(0);

  const next = () => {
    if (scene < SCENE_COUNT - 1) setScene((s) => (s + 1) as Scene);
  };

  const scenes: React.ReactNode[] = [
    <WelcomeScene onNext={next} />,
    <EnvelopeScene onNext={next} />,
    <LetterScene onNext={next} />,
    <PromisesScene onNext={next} />,
    <SurpriseScene onNext={next} />,
    <FinalScene />,
  ];

  /* Optional: swap in your audio file path */
  const audioSrc: string | undefined = undefined; // e.g. '/audio/bg-music.mp3'

  return (
    <div className="relative w-full overflow-x-hidden" style={{ minHeight: '100dvh' }}>
      <PageTransition sceneKey={scene}>{scenes[scene]}</PageTransition>
      {/* Show progress dots for scenes 1–5 */}
      {scene > 0 && <ProgressDots current={scene} total={SCENE_COUNT} />}
      {/* Optional music toggle */}
      <MusicToggle audioSrc={audioSrc} />
    </div>
  );
}

