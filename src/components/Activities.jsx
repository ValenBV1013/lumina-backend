import React from 'react';
import { motion } from 'framer-motion';

// Option A: If you want to use local images from src/assets, import them here:
// import cyberDomeImg from '../assets/cyber-dome.jpg';
// import facePaintImg from '../assets/face-paint.jpg';
// import laserMazeImg from '../assets/laser-maze.jpg';
// import chillZoneImg from '../assets/chill-zone.jpg';

export default function Activities() {
  const activities = [
    {
      title: 'Cyber Projection Dome 360°',
      desc: 'You are going to experience 360-degree immersive visualizers and futuristic spatial audio inside the dome.',
      // Replace with your local import variable (e.g., cyberDomeImg) or public path (e.g., '/images/cyber-dome.jpg')
      image: '/images/cyber-dome.png', // Using public folder path
    },
    {
      title: 'Neon Face Painting',
      desc: 'Artists will paint futuristic glow-in-the-dark designs on your face for free.',
      image: '/images/face-painting.jpe', // Using public folder path
    },
    {
      title: 'Interactive Laser Maze',
      desc: 'Visitors are going to compete with friends to cross a laser room without touching the beams.',
      image: '/images/laser-maze.jpe', // Using public folder path
    },
    {
      title: 'Chill-Out Hammock Zone',
      desc: 'When you get tired, you will relax in comfortable hammocks with soft ambient music.',
      image: '/images/chill-zone.jpe', // Using public folder path
    },
  ];

  return (
    <section id="attractions" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            ATTRACTIONS & <span className="text-neonPink">ACTIVITIES</span>
          </h2>
          <p className="text-gray-400">Experience the future beyond the music</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-neonPink/50 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{act.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">{act.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}