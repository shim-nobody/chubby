import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SceneTransitionProps {
  children: ReactNode;
  sceneKey: string | number;
}

export function SceneTransition({ children, sceneKey }: SceneTransitionProps) {
  const reduced = useReducedMotion();

  const variants = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 32, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -32, scale: 0.98 },
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={sceneKey}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: reduced ? 0.15 : 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full"
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

