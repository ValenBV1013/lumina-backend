import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Music2, Music3, Music4 } from 'lucide-react';

export default function FloatingNotes() {
  const [isScrolling, setIsScrolling] = useState(false);
  const icons = [Music, Music2, Music3, Music4];

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Al detectar scroll, hacemos visibles las notas
      setIsScrolling(true);

      // Limpiamos el timeout previo si el usuario sigue haciendo scroll
      clearTimeout(scrollTimeout);

      // Si el usuario se queda quieto durante 600ms, ocultamos las notas
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const leftNotes = [
    { top: '15%', icon: 0, color: 'text-neonBlue' },
    { top: '35%', icon: 1, color: 'text-neonPink' },
    { top: '60%', icon: 2, color: 'text-neonPurple' },
    { top: '80%', icon: 3, color: 'text-neonBlue' },
  ];

  const rightNotes = [
    { top: '20%', icon: 2, color: 'text-neonPink' },
    { top: '45%', icon: 3, color: 'text-neonBlue' },
    { top: '70%', icon: 0, color: 'text-neonPurple' },
    { top: '90%', icon: 1, color: 'text-neonPink' },
  ];

  return (
    <AnimatePresence>
      {isScrolling && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
        >
          {/* Notas Costado Izquierdo */}
          {leftNotes.map((note, idx) => {
            const Icon = icons[note.icon];
            return (
              <motion.div
                key={`left-${idx}`}
                className={`absolute left-4 sm:left-10 ${note.color} drop-shadow-[0_0_12px_currentColor]`}
                style={{ top: note.top }}
                initial={{ scale: 0.5, y: 20, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.9],
                  y: [-15, 15, -15],
                  x: [0, 12, 0],
                  rotate: [-20, 20, -20],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut'
                }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </motion.div>
            );
          })}

          {/* Notas Costado Derecho */}
          {rightNotes.map((note, idx) => {
            const Icon = icons[note.icon];
            return (
              <motion.div
                key={`right-${idx}`}
                className={`absolute right-4 sm:right-10 ${note.color} drop-shadow-[0_0_12px_currentColor]`}
                style={{ top: note.top }}
                initial={{ scale: 0.5, y: 20, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.9],
                  y: [-15, 15, -15],
                  x: [0, -12, 0],
                  rotate: [20, -20, 20],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: 'easeInOut'
                }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}