import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, Music, User, Award } from 'lucide-react';

export default function Lineup() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const artists = [
    {
      id: 'guetta',
      name: 'David Guetta',
      image: '/images/david-guetta.jpe',
      time: '08:00 PM',
      color: 'border-neonBlue',
      grammar: 'He is going to open the main night show with his massive hit songs and world-famous energy.',
      bio: 'David Guetta is a French DJ, record producer and songwriter. He has sold over 10 million albums and 65 million singles worldwide.',
      songs: [
        {
          title: 'Titanium (feat. Sia)',
          cover: '/images/titanium.jpg',
          audioUrl: '/audio/titanium.mp3'
        },
        {
          title: 'Bad feat. Showtek',
          cover: '/images/bad.jpg',
          audioUrl: '/audio/bad.mp3'
        }
      ]
    },
    {
      id: 'garrix',
      name: 'Martin Garrix',
      image: '/images/martin-garrix.jpe',
      time: '10:00 PM',
      color: 'border-neonPink',
      grammar: 'He will perform his greatest progressive house hits on the Main Stage at 10:00 PM.',
      bio: "Martin Garrix is a Dutch DJ and record producer who was ranked number one on DJ Mag's Top 100 DJs list for three consecutive years.",
      songs: [
        {
          title: 'Animals',
          cover: '/images/animals.jpg',
          audioUrl: '/audio/animals.mp3'
        },
        {
          title: 'In the Name of Love (feat. Bebe Rexha)',
          cover: '/images/in-the-name-of-love.jpg',
          audioUrl: '/audio/in-the-name-of-love.mp3'
        }
      ]
    },
    {
      id: 'avicii',
      name: 'Avicii (Tribute Set)',
      image: '/images/avicii.jpg',
      time: '12:00 AM',
      color: 'border-neonPurple',
      hasWhiteRibbon: true,
      grammar: "A legendary DJ is going to play a special tribute set with Avicii's iconic songs like Wake Me Up and Levels.",
      bio: 'Tim Bergling, known professionally as Avicii, was a Swedish DJ and electronic music pioneer who revolutionized EDM with melody-driven house.',
      songs: [
        {
          title: 'Wake Me Up',
          cover: '/images/wake-me-up.jpg',
          audioUrl: '/audio/wake-me-up.mp3'
        },
        {
          title: 'Levels',
          cover: '/images/levels.jpg',
          audioUrl: '/audio/levels.mp3'
        },
        {
          title: 'Hey Brother',
          cover: '/images/hey-brother.jpg',
          audioUrl: '/audio/hey-brother.mp3'
        },
        {
          title: 'The Nights',
          cover: '/images/the-nights.jpg',
          audioUrl: '/audio/the-nights.mp3'
        }
      ]
    },
    {
      id: 'walker',
      name: 'Alan Walker',
      image: '/images/alan-walker.jpg',
      time: '02:00 AM',
      color: 'border-cyan-400',
      grammar: 'He will close the festival with a huge light show and his famous tracks like Faded.',
      bio: 'Alan Walker is a Norwegian DJ and producer known for his masked visual identity and melodic electro-pop sound.',
      songs: [
        {
          title: 'Faded',
          cover: '/images/faded.jpg',
          audioUrl: '/audio/faded.mp3'
        },
        {
          title: 'Alone',
          cover: '/images/alone.jpg',
          audioUrl: '/audio/alone.mp3'
        },
        {
          title: 'The Spectre',
          cover: '/images/the-spectre.jpg',
          audioUrl: '/audio/the-spectre.mp3'
        }
      ]
    }
  ];

  const handlePlaySong = (url) => {
    if (playingTrack === url) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingTrack(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(url);
      audioRef.current = newAudio;

      newAudio.play();
      setPlayingTrack(url);

      newAudio.ontimeupdate = () => {
        setCurrentTime(newAudio.currentTime);
        setDuration(newAudio.duration || 0);
      };

      newAudio.onended = () => {
        setPlayingTrack(null);
        setCurrentTime(0);
      };
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeSec) => {
    if (isNaN(timeSec)) return '0:00';
    const minutes = Math.floor(timeSec / 60);
    const seconds = Math.floor(timeSec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const closeModal = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingTrack(null);
    setSelectedArtist(null);
    setCurrentTime(0);
  };

  return (
    <section id="lineup" className="py-24 px-4 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
          MAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPink">LINEUP</span>
        </h2>
        <p className="text-gray-400">Grammar Focus: Future Predictions & Intentions (Will / Be going to)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-6 sm:p-8 rounded-3xl bg-white/5 border-l-4 ${artist.color} backdrop-blur-xl border-t border-r border-b border-white/10 hover:border-white/30 transition-all shadow-2xl flex flex-col justify-between relative overflow-hidden`}
          >
            <div>
              <div className="flex items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-2xl font-bold text-white">{artist.name}</h3>

                  {/* Ribbon/Listón Blanco para Avicii en la tarjeta */}
                  {artist.hasWhiteRibbon && (
                    <span 
                      title="White Ribbon Tribute"
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/40 text-xs font-semibold text-white backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                    >
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2C9.24 2 7 4.24 7 7c0 3.25 3.32 7.82 5 9.87 1.68-2.05 5-6.62 5-9.87 0-2.76-2.24-5-5-5zm0 13.5c-1.34-1.74-3.5-5.07-3.5-6.5C8.5 7.62 10.07 6 12 6s3.5 1.62 3.5 3c0 1.43-2.16 4.76-3.5 6.5z"/>
                        <path d="M7.5 15.5L4 22l4.5-1.5L10 22l-1.5-4.5zM16.5 15.5L14 22l1.5-4.5L12 22l3.5-1.5z"/>
                      </svg>
                      Tribute
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono px-3 py-1 bg-white/10 rounded-full text-neonBlue border border-neonBlue/30 shrink-0">
                  {artist.time}
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed font-light text-sm bg-black/40 p-4 rounded-2xl border border-white/5 mb-6">
                "{artist.grammar}"
              </p>
            </div>

            <button
              onClick={() => setSelectedArtist(artist)}
              className="w-full py-3 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-neonBlue hover:to-neonPink hover:text-black text-white font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-md border border-white/10"
            >
              <User className="w-4 h-4" />
              View Bio & Music Player
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-darkBg/90 border border-white/20 p-6 sm:p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-2xl shadow-[0_0_50px_rgba(161,0,255,0.3)] relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-neonPink text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                <div className="relative shrink-0">
                  <img
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="w-32 h-32 rounded-2xl object-cover border-2 border-neonBlue shadow-lg"
                  />
                  
                  {/* Ribbon/Listón Blanco flotante sobre la foto en la Modal */}
                  {selectedArtist.hasWhiteRibbon && (
                    <div 
                      title="White Ribbon Tribute"
                      className="absolute -top-2 -right-2 bg-black/80 border border-white/60 p-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] backdrop-blur-md"
                    >
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2C9.24 2 7 4.24 7 7c0 3.25 3.32 7.82 5 9.87 1.68-2.05 5-6.62 5-9.87 0-2.76-2.24-5-5-5zm0 13.5c-1.34-1.74-3.5-5.07-3.5-6.5C8.5 7.62 10.07 6 12 6s3.5 1.62 3.5 3c0 1.43-2.16 4.76-3.5 6.5z"/>
                        <path d="M7.5 15.5L4 22l4.5-1.5L10 22l-1.5-4.5zM16.5 15.5L14 22l1.5-4.5L12 22l3.5-1.5z"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-3xl font-extrabold text-white">{selectedArtist.name}</h3>
                    {selectedArtist.hasWhiteRibbon && (
                      <span className="text-xs px-2.5 py-1 bg-white/20 text-white rounded-full border border-white/40 font-semibold shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                        White Ribbon Tribute
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{selectedArtist.bio}</p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                <Music className="w-5 h-5 text-neonPink" />
                Featured Music & Live Player
              </h4>

              <div className="space-y-4">
                {selectedArtist.songs.map((song, idx) => {
                  const isThisPlaying = playingTrack === song.audioUrl;
                  const progressPercentage = (currentTime / (duration || 1)) * 100;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 backdrop-blur-md hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={song.cover}
                          alt={song.title}
                          className="w-16 h-16 rounded-xl object-cover shadow-md"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-bold text-white truncate">{song.title}</p>
                          <p className="text-xs text-neonBlue font-mono">{selectedArtist.name}</p>
                        </div>

                        <button
                          onClick={() => handlePlaySong(song.audioUrl)}
                          className={`p-3.5 rounded-full transition-all ${
                            isThisPlaying
                              ? 'bg-neonPink text-white shadow-[0_0_15px_#ff007f]'
                              : 'bg-neonBlue/20 text-neonBlue hover:bg-neonBlue hover:text-black'
                          }`}
                        >
                          {isThisPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </button>
                      </div>

                      {/* Barra de Progreso Interactiva con Estilo Neón */}
                      {isThisPlaying && (
                        <div className="space-y-1">
                          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden flex items-center">
                            {/* Relleno con Degradado Neón */}
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonBlue to-neonPink transition-all duration-150 pointer-events-none"
                              style={{ width: `${progressPercentage}%` }}
                            />
                            {/* Input tipo Rango transparente encima para capturar clics/arrastres */}
                            <input
                              type="range"
                              min="0"
                              max={duration || 0}
                              value={currentTime}
                              onChange={handleSeek}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                          </div>

                          <div className="flex justify-between text-[10px] font-mono text-gray-400">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}