import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-darkBg/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo con Mariposa Neón Animada y Texto en Degradado */}
          <a href="#" className="flex items-center gap-3 group">
            
            {/* Contenedor de la Mariposa con flotación y aleteo */}
            <motion.div 
              className="relative w-10 h-10 flex items-center justify-center"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              {/* Resplandor neón pulsante de fondo */}
              <div className="absolute inset-0 bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-9 h-9 flex items-center justify-center">
                {/* Ala Izquierda con aleteo constante */}
                <motion.svg
                  animate={{ rotateY: [0, 40, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
                  className="w-5 h-8 absolute left-0 origin-right drop-shadow-[0_0_8px_#00f0ff]"
                  viewBox="0 0 100 160"
                >
                  <path
                    d="M 100,80 C 40,10 0,30 10,70 C 20,100 80,90 100,85 Z"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="5"
                  />
                  <path
                    d="M 100,85 C 30,95 10,130 40,150 C 70,160 95,110 100,90 Z"
                    fill="none"
                    stroke="#a100ff"
                    strokeWidth="5"
                  />
                </motion.svg>

                {/* Ala Derecha con aleteo constante */}
                <motion.svg
                  animate={{ rotateY: [0, -40, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
                  className="w-5 h-8 absolute right-0 origin-left drop-shadow-[0_0_8px_#ff007f]"
                  viewBox="0 0 100 160"
                >
                  <path
                    d="M 0,80 C 60,10 100,30 90,70 C 80,100 20,90 0,85 Z"
                    fill="none"
                    stroke="#ff007f"
                    strokeWidth="5"
                  />
                  <path
                    d="M 0,85 C 70,95 90,130 60,150 C 30,160 5,110 0,90 Z"
                    fill="none"
                    stroke="#a100ff"
                    strokeWidth="5"
                  />
                </motion.svg>

                {/* Cuerpo y Antenas Neón de la Mariposa */}
                <div className="relative flex flex-col items-center justify-center z-10">
                  <div className="flex gap-1 -mb-0.5">
                    <div className="w-1 h-2 border-l border-t border-neonBlue rounded-tl-full" />
                    <div className="w-1 h-2 border-r border-t border-neonPink rounded-tr-full" />
                  </div>
                  <div className="w-1.5 h-2 bg-white rounded-full shadow-[0_0_6px_#00f0ff]" />
                  <div className="w-1 h-4 bg-gradient-to-b from-neonPink to-neonPurple rounded-b-full shadow-[0_0_6px_#ff007f]" />
                </div>
              </div>
            </motion.div>

            {/* Texto LUMINA con colores en degradado neón */}
            <span className="font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]">
              LUMINA <span className="text-neonBlue">2037</span>
            </span>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#lineup" className="text-gray-300 hover:text-neonBlue transition-colors">Lineup</a>
            <a href="#attractions" className="text-gray-300 hover:text-neonPink transition-colors">Attractions</a>
            <a href="#food" className="text-gray-300 hover:text-neonPurple transition-colors">Food & Drinks</a>
            <a href="#tickets" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-neonBlue to-neonPink text-black font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
              Tickets
            </a>
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-white border border-white/10"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-darkBg/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          <a href="#lineup" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-neonBlue">Lineup</a>
          <a href="#attractions" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-neonPink">Attractions</a>
          <a href="#food" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-neonPurple">Food & Drinks</a>
          <a href="#tickets" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-neonBlue to-neonPink text-black font-bold">
            Tickets
          </a>
        </div>
      )}
    </nav>
  );
}