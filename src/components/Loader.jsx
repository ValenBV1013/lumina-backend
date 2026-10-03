import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(0); 
  const [collected, setCollected] = useState({ blue: false, pink: false, purple: false });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCollected(prev => ({ ...prev, blue: true }));
      setStep(1);
    }, 1200);

    const timer2 = setTimeout(() => {
      setCollected(prev => ({ ...prev, pink: true }));
      setStep(2);
    }, 2400);

    const timer3 = setTimeout(() => {
      setCollected(prev => ({ ...prev, purple: true }));
      setStep(3);
    }, 3600);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  // Transiciones de posición y rotación (vuelo lateral -> frontal al centro)
  const getButterflyMotion = () => {
    switch (step) {
      case 0: 
        return { x: -140, y: -120, rotateZ: 25, rotateY: 50, scale: 0.8 }; // Vuelo de lado hacia orbe azul
      case 1: 
        return { x: 140, y: -120, rotateZ: -25, rotateY: -50, scale: 0.9 }; // Vuelo de lado hacia orbe rosa
      case 2: 
        return { x: 0, y: 130, rotateZ: 0, rotateY: 60, scale: 1.0 }; // Vuelo hacia orbe morado abajo
      case 3: 
        return { x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1.6 }; // Frente absoluto al centro
      default: 
        return { x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1 };
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#06050e] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-96 h-96 flex items-center justify-center">
        
        {/* Orbes Cristalinos (Glassmorphism) */}
        <div className={`absolute top-4 left-4 w-14 h-14 rounded-full transition-all duration-700 flex items-center justify-center backdrop-blur-xl border ${
          collected.blue ? 'bg-neonBlue/30 border-neonBlue shadow-[0_0_35px_#00f0ff]' : 'bg-white/5 border-white/20'
        }`}>
          <div className="w-4 h-4 bg-neonBlue rounded-full blur-xs" />
        </div>

        <div className={`absolute top-4 right-4 w-14 h-14 rounded-full transition-all duration-700 flex items-center justify-center backdrop-blur-xl border ${
          collected.pink ? 'bg-neonPink/30 border-neonPink shadow-[0_0_35px_#ff007f]' : 'bg-white/5 border-white/20'
        }`}>
          <div className="w-4 h-4 bg-neonPink rounded-full blur-xs" />
        </div>

        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full transition-all duration-700 flex items-center justify-center backdrop-blur-xl border ${
          collected.purple ? 'bg-neonPurple/30 border-neonPurple shadow-[0_0_35px_#a100ff]' : 'bg-white/5 border-white/20'
        }`}>
          <div className="w-4 h-4 bg-neonPurple rounded-full blur-xs" />
        </div>

        {/* Destellos radiantes al llegar al centro */}
        <AnimatePresence>
          {step === 3 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.5, 2.5, 2], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple blur-3xl opacity-60" />
              <Sparkles className="absolute w-24 h-24 text-white animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mariposa Neón con cuerpo estilizado de la imagen */}
        <motion.div
          animate={getButterflyMotion()}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="relative flex items-center justify-center z-10"
        >
          <div className="relative w-36 h-36 flex items-center justify-center">
            
            {/* Ala Izquierda Estilizada */}
            <motion.svg
              animate={{ rotateY: step === 3 ? [0, 45, 0] : [0, 70, 0] }}
              transition={{ repeat: Infinity, duration: step === 3 ? 0.7 : 0.25, ease: 'easeInOut' }}
              className="w-18 h-32 absolute left-0 origin-right drop-shadow-[0_0_15px_#00f0ff]"
              viewBox="0 0 100 160"
            >
              <path
                d="M 100,80 C 40,10 0,30 10,70 C 20,100 80,90 100,85 Z"
                fill="none"
                stroke={collected.blue ? '#00f0ff' : '#ffffff'}
                strokeWidth="3"
              />
              <path
                d="M 100,85 C 30,95 10,130 40,150 C 70,160 95,110 100,90 Z"
                fill="none"
                stroke={collected.purple ? '#a100ff' : '#ffffff'}
                strokeWidth="3"
              />
            </motion.svg>

            {/* Ala Derecha Estilizada */}
            <motion.svg
              animate={{ rotateY: step === 3 ? [0, -45, 0] : [0, -70, 0] }}
              transition={{ repeat: Infinity, duration: step === 3 ? 0.7 : 0.25, ease: 'easeInOut' }}
              className="w-18 h-32 absolute right-0 origin-left drop-shadow-[0_0_15px_#ff007f]"
              viewBox="0 0 100 160"
            >
              <path
                d="M 0,80 C 60,10 100,30 90,70 C 80,100 20,90 0,85 Z"
                fill="none"
                stroke={collected.pink ? '#ff007f' : '#ffffff'}
                strokeWidth="3"
              />
              <path
                d="M 0,85 C 70,95 90,130 60,150 C 30,160 5,110 0,90 Z"
                fill="none"
                stroke={collected.purple ? '#a100ff' : '#ffffff'}
                strokeWidth="3"
              />
            </motion.svg>

            {/* Cuerpo de la Mariposa Neón (Cabeza, Torax y Antenas estilizados) */}
            <div className="relative flex flex-col items-center justify-center z-20">
              {/* Antenas Neón */}
              <div className="flex gap-3 -mb-1">
                <div className="w-2 h-5 border-l-2 border-t-2 border-neonBlue rounded-tl-full" />
                <div className="w-2 h-5 border-r-2 border-t-2 border-neonPink rounded-tr-full" />
              </div>
              {/* Cabeza / Tórax */}
              <div className="w-3 h-4 bg-gradient-to-b from-white to-neonBlue rounded-full shadow-[0_0_10px_#00f0ff]" />
              {/* Abdomen Ahusado */}
              <div className="w-2.5 h-10 bg-gradient-to-b from-neonPink via-neonPurple to-transparent rounded-b-full shadow-[0_0_12px_#ff007f]" />
            </div>

          </div>
        </motion.div>
      </div>

      <p className="mt-8 text-cyan-300 font-mono tracking-widest text-sm uppercase animate-pulse">
        {step < 3 ? 'Awakening Core Energy...' : 'LUMINA FESTIVAL 2037'}
      </p>
    </div>
  );
}