import React from 'react';

export default function PresentationScript() {
  return (
    <section id="presentation" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-neonPurple/40">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          ENGLISH PRESENTATION SCRIPT (B1)
        </h2>
        <p className="text-xs text-center text-neonBlue mb-6">Read this during your class presentation!</p>

        <blockquote className="italic text-gray-200 text-lg leading-relaxed border-l-4 border-neonPink pl-6 py-2">
          "Welcome everyone! Today we <strong className="text-neonBlue">are going to</strong> present <strong className="text-white">Lumina Festival</strong>, the biggest electronic event in Colombia.<br /><br />
          It <strong className="text-neonBlue">is going to</strong> happen on November 13th in Medellín. We have an incredible lineup: David Guetta and Martin Garrix <strong className="text-neonBlue">are going to</strong> play their legendary hits, Alan Walker <strong className="text-neonPink">will</strong> close the night with a massive laser show, and a special DJ <strong className="text-neonPink">will</strong> perform a tribute set for Avicii.<br /><br />
          During the festival, you <strong className="text-neonPink">will</strong> enjoy giant attractions like the Neon Ferris Wheel, and you <strong className="text-neonBlue">are going to</strong> eat delicious food at our food trucks. Tickets <strong className="text-neonPink">will</strong> go on sale next week starting at $250,000 COP. It <strong className="text-neonPink">will</strong> be an unforgettable experience!"
        </blockquote>
      </div>
    </section>
  );
}