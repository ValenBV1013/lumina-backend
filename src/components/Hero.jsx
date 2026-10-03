import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      
      {/* Fondo Glassmorphism & Luces Flotantes */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/30 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-neonBlue/30 rounded-full blur-[110px] pointer-events-none"
      />

      {/* Partículas / Elementos flotantes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-32 left-10 hidden md:block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <Sparkles className="w-8 h-8 text-neonPink animate-pulse" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute bottom-32 right-10 hidden md:block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <Sparkles className="w-8 h-8 text-neonBlue animate-pulse" />
      </motion.div>

      {/* Contenido Principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neonBlue/40 bg-white/5 backdrop-blur-md text-neonBlue text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        >
          Electronic Music Experience 2037
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl"
        >
          LUMINA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple">FESTIVAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light"
        >
          Enter a futuristic world where light and sound blend together.
        </motion.p>

        {/* Tarjetas Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto"
        >
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-1 hover:border-neonBlue/50 transition-all shadow-lg">
            <Calendar className="w-5 h-5 text-neonBlue" />
            <span className="text-xs text-gray-400">Date</span>
            <span className="text-sm font-semibold text-white">Sat, Nov 13, 2037</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-1 hover:border-neonPink/50 transition-all shadow-lg">
            <Clock className="w-5 h-5 text-neonPink" />
            <span className="text-xs text-gray-400">Time</span>
            <span className="text-sm font-semibold text-white">2:00 PM – 4:00 AM</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-1 hover:border-neonPurple/50 transition-all shadow-lg">
            <MapPin className="w-5 h-5 text-neonPurple" />
            <span className="text-xs text-gray-400">Location</span>
            <span className="text-sm font-semibold text-white">Medellín, Colombia</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-6"
        >
          <a
            href="#tickets"
            className="inline-block px-8 py-4 rounded-full font-bold text-lg text-black bg-gradient-to-r from-neonBlue to-neonPink hover:scale-105 transition-transform shadow-[0_0_35px_rgba(0,240,255,0.5)]"
          >
            Get Tickets Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}