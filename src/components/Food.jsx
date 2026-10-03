import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, GlassWater, Cookie, ShoppingBag } from 'lucide-react';

export default function Food() {
  const [activeCategory, setActiveCategory] = useState('food');

  // Menú de comida, bebidas y snacks con precios en Pesos Colombianos (COP)
  const menuData = {
    food: [
      {
        id: 1,
        name: "Cyber Smash Burger",
        description: "Double smashed Angus beef, cheddar cheese, crispy bacon, and secret neon sauce on a brioche bun.",
        price: "$45,000 COP",
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        name: "Neon Pepperoni Pizza",
        description: "Personal artisan pizza topped with double pepperoni, mozzarella cheese, and hot honey drizzle.",
        price: "$38,000 COP",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        name: "Electric Hot Dog",
        description: "Jumbo smoked sausage, caramelized onions, melted cheese, jalapenos, and crispy bacon chips.",
        price: "$32,000 COP",
        badge: "Fast & Hot",
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 4,
        name: "Veggie Pulse Wrap",
        description: "Grilled veggies, hummus, avocado, crisp lettuce, and feta cheese in a spinach tortilla.",
        price: "$35,000 COP",
        badge: "Vegan Choice",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
      }
    ],
    drinks: [
      {
        id: 5,
        name: "Electric Energy Cocktail",
        description: "Vodka, Red Bull Energy, blue curaçao, and fresh lime juice served over crushed ice.",
        price: "$48,000 COP",
        badge: "Signature",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 6,
        name: "Cyber Gin & Tonic",
        description: "Premium Gin, tonic water, infused dragonfruit, and a slice of dehydrated grapefruit.",
        price: "$42,000 COP",
        badge: "Refreshing",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 7,
        name: "Craft IPA Beer",
        description: "Local cold craft beer with citrus and tropical fruit notes.",
        price: "$22,000 COP",
        badge: "Cold Draught",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 8,
        name: "Hydration Electrolyte Mocktail",
        description: "Zero-alcohol sparkling mocktail with coconut water, passion fruit, and electrolytes.",
        price: "$18,000 COP",
        badge: "Zero Alcohol",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
      }
    ],
    snacks: [
      {
        id: 9,
        name: "Loaded Nachos Supreme",
        description: "Crispy tortilla chips, melted cheese blend, guacamole, jalapenos, sour cream, and pico de gallo.",
        price: "$30,000 COP",
        badge: "To Share",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 10,
        name: "Truffle & Parmesan Fries",
        description: "Golden crispy french fries tossed with white truffle oil, grated parmesan, and herbs.",
        price: "$26,000 COP",
        badge: "Crispy",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 11,
        name: "Churro Bites with Chocolate",
        description: "Warm cinnamon-sugar churro bites served with hot Belgian dark chocolate dip.",
        price: "$20,000 COP",
        badge: "Sweet Treat",
        image: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 12,
        name: "Gourmet Popcorn Bucket",
        description: "Giant bucket with your choice of Cheddar Cheese, Sweet Caramel, or Classic Butter.",
        price: "$16,000 COP",
        badge: "Quick Snack",
        image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80"
      }
    ]
  };

  const categories = [
    { id: 'food', label: 'Food', icon: Utensils },
    { id: 'drinks', label: 'Drinks', icon: GlassWater },
    { id: 'snacks', label: 'Snacks', icon: Cookie }
  ];

  return (
    <section id="gastronomy" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide uppercase bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          Food & Drinks Zone
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Fuel your energy throughout the night with gourmet street food, signature cocktails, and quick festival snacks.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-12 flex-wrap">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-300 transform ${
                isActive
                  ? 'bg-gradient-to-r from-neonBlue to-neonPink text-black shadow-[0_0_25px_rgba(0,240,255,0.5)] scale-105'
                  : 'bg-darkBg/80 text-gray-300 border border-white/10 hover:border-neonBlue/50 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Menu Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuData[activeCategory].map((item) => (
            <div
              key={item.id}
              className="group bg-darkBg/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-neonPink/50 transition-all duration-300 flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,127,0.2)] hover:-translate-y-1.5"
            >
              {/* Image & Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-neonBlue text-xs font-bold px-3 py-1 rounded-full border border-neonBlue/30">
                  {item.badge}
                </div>
                <div className="absolute top-3 right-3 bg-neonPink text-black text-sm font-black px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,0,127,0.5)]">
                  {item.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neonPink transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <button className="w-full py-2.5 rounded-xl border border-neonBlue/40 text-neonBlue hover:bg-neonBlue hover:text-black font-bold text-sm transition-all flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Available at Food Court
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}