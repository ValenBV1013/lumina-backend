import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import Activities from './components/Activities';
import Food from './components/Food';
import Tickets from './components/Tickets';
import FloatingNotes from './components/FloatingNotes';
import LocationMap from './components/LocationMap'; // <-- Importas el mapa

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-neonPink selection:text-white">
      {!loadingComplete ? (
        <Loader onComplete={() => setLoadingComplete(true)} />
      ) : (
        <div>
          <Navbar />
          <FloatingNotes />
          <Hero />
          <Lineup />
          <Activities />
          <Food />
          <Tickets />
          <LocationMap /> {/* <-- Lo agregas donde quieras mostrar el mapa */}
          <footer className="py-8 text-center text-xs text-gray-500 border-t border-white/5">
            LUMINA FESTIVAL 2037 — Designed for English B1 Presentation
          </footer>
        </div>
      )}
    </div>
  );
}