import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock } from 'lucide-react';

export default function LocationMap() {
  // Venue & Event details
  const locationName = "DAVIarena";
  const address = "Sabaneta, Medellín Metropolitan Area, Antioquia, Colombia";
  
  // Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.098492837264!2d-75.61803242417537!3d6.151112893835619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682390f7d4d4b%3A0x6a0a0307f5d60f0!2sSabaneta%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1710000000000!5m2!1sen!2sco";

  // Direct Google Maps link
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationName + " " + address)}`;

  return (
    <section id="location" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide uppercase bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          Festival Location
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Get ready to experience the biggest multisensory event of the year in a state-of-the-art indoor arena.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-darkBg/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-[0_0_30px_rgba(161,0,255,0.15)]"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neonPink/10 rounded-2xl border border-neonPink/30 text-neonPink">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{locationName}</h3>
                <p className="text-gray-400 text-sm mt-1">{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-neonBlue/10 rounded-2xl border border-neonBlue/30 text-neonBlue">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Event Date</h3>
                <p className="text-gray-400 text-sm mt-1">Saturday, November 13, 2037</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-neonPurple/10 rounded-2xl border border-neonPurple/30 text-neonPurple">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Schedule</h3>
                <p className="text-gray-400 text-sm mt-1">2:00 PM – 4:00 AM</p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-neonBlue to-neonPink text-black font-bold text-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all transform hover:-translate-y-1"
          >
            <Navigation className="w-5 h-5 fill-current" />
            Open in Google Maps
          </a>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-neonBlue/30 shadow-[0_0_35px_rgba(0,240,255,0.2)] min-h-[350px] lg:min-h-[450px]"
        >
          <iframe
            title="DAVIarena Location Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[350px] lg:min-h-[450px]"
          />
        </motion.div>

      </div>
    </section>
  );
}