import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  audioSrc?: string;
}

export function MusicToggle({ audioSrc }: MusicToggleProps) {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(() => {
    if (!audioSrc) return null;
    try {
      const a = new Audio(audioSrc);
      a.loop = true;
      a.volume = 0.4;
      return a;
    } catch {
      return null;
    }
  });

  const toggle = () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  if (!audioSrc) return null;

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: playing
          ? 'linear-gradient(135deg, #FF6B9D 0%, #FF8FB3 100%)'
          : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
        border: '2px solid #FFD6E5',
        color: playing ? 'white' : '#FF6B9D',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      title={playing ? 'Mute music' : 'Play music'}
    >
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
}

