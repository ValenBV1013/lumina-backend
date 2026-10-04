import React from 'react';
import { Sparkles, Calendar, MapPin, Music, Flame, Star, Disc, Clock } from 'lucide-react';

export default function FestivalPoster() {
  return (
    <section id="poster" className="py-16 px-4 bg-slate-950 flex flex-col items-center justify-center min-h-screen">
      {/* Indicador de título de sección */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-4 py-1.5 rounded-full">
          Official Digital Flyer
        </span>
        <h2 className="text-3xl font-black text-white mt-3 uppercase tracking-tight">
          Festival Promo Poster
        </h2>
      </div>

      {/* CONTENEDOR DEL PÓSTER */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 rounded-2xl border-4 border-slate-800 shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden p-6 sm:p-8 flex flex-col justify-between text-white font-sans select-none transform hover:scale-[1.01] transition-all duration-300">
        
        {/* ================= ELEMENTOS DE FONDO / STICKERS ================= */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-2xl opacity-40 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 pointer-events-none"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="absolute top-6 right-6 rotate-12 bg-yellow-400 text-black font-black text-xs px-3 py-1.5 rounded-md shadow-lg flex items-center gap-1 uppercase tracking-wider z-20">
          <Sparkles className="w-3.5 h-3.5 fill-black" />
          Limited Pass
        </div>

        {/* ================= ENCABEZADO / BRANDING ================= */}
        <div className="relative z-10 text-center mt-2">
          <p className="text-xs sm:text-sm uppercase font-bold tracking-[0.2em] text-cyan-300 drop-shadow">
            ELECTRONIC MUSIC EXPERIENCE 2037
          </p>
          
          <div className="relative my-4">
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none bg-gradient-to-r from-white via-cyan-300 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              LUMINA FESTIVAL
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
            Enter a futuristic world where light and sound blend together.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mx-auto rounded-full my-4"></div>
        </div>

        {/* ================= IMAGEN CENTRAL / COLLAGE ================= */}
        <div className="relative z-10 my-4">
          <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
              alt="Lumina Festival Stage"
              className="w-full h-48 sm:h-56 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs text-slate-200">
              <Disc className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Futuristic Cyber Beats</span>
            </div>
          </div>
        </div>

        {/* ================= SECCIÓN DE DESTACADOS ================= */}
        <div className="relative z-10 grid grid-cols-3 gap-2 text-center my-2">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2.5 flex flex-col items-center">
            <Flame className="w-5 h-5 text-orange-400 mb-1" />
            <span className="text-[10px] font-bold uppercase text-slate-300">Lineup</span>
            <span className="text-xs font-black text-white">Top Artists</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2.5 flex flex-col items-center">
            <Star className="w-5 h-5 text-yellow-400 mb-1" />
            <span className="text-[10px] font-bold uppercase text-slate-300">Attractions</span>
            <span className="text-xs font-black text-white">Light & Sound</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2.5 flex flex-col items-center">
            <Music className="w-5 h-5 text-cyan-400 mb-1" />
            <span className="text-[10px] font-bold uppercase text-slate-300">Food & Drinks</span>
            <span className="text-xs font-black text-white">Gourmet</span>
          </div>
        </div>

        {/* ================= DATOS DE FECHA, HORA Y LUGAR ================= */}
        <div className="relative z-10 bg-slate-900/90 border border-purple-500/30 rounded-xl p-3 my-3 text-center shadow-inner">
          <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm font-bold divide-x divide-slate-700/80">
            <div className="flex flex-col items-center justify-center gap-1 text-cyan-300">
              <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-semibold">
                <Calendar className="w-3.5 h-3.5 text-pink-400" /> Date
              </div>
              <span>Sat, Nov 13, 2037</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 text-cyan-300 px-1">
              <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-semibold">
                <Clock className="w-3.5 h-3.5 text-pink-400" /> Time
              </div>
              <span>2:00 PM – 4:00 AM</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 text-cyan-300">
              <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-semibold">
                <MapPin className="w-3.5 h-3.5 text-pink-400" /> Location
              </div>
              <span>Medellín, Colombia</span>
            </div>
          </div>
        </div>

        {/* ================= FOOTER / ENLACE A TICKETS ================= */}
        <div className="relative z-10 text-center mt-2">
          {/* Cambiado a etiqueta <a> apuntando a #tickets */}
          <a 
            href="#tickets"
            className="block w-full py-3 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all text-center"
          >
            Get Tickets Now
          </a>
          <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-wide">
            WWW.LUMINAFESTIVAL.COM • @LUMINA2037
          </p>
        </div>

      </div>
    </section>
  );
}