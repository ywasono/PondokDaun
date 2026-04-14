/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Facebook, 
  Instagram, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  UtensilsCrossed,
  Leaf
} from 'lucide-react';

// --- Data ---

const LOGO_URL = "https://i.imgur.com/pZMIrIz.png";

const MENU_DATA = [
  {
    category: "Snacks",
    items: [
      { name: "Fried Chicken Spring Roll", description: "Crispy rolls filled with seasoned chicken and vegetables." },
      { name: "Wonton", description: "Crispy fried wontons served with sweet chili sauce." },
      { name: "Chicken Satay", description: "Grilled chicken skewers with peanut sauce." },
      { name: "Potato Croquette", description: "Creamy mashed potato with minced meat, breaded and fried." },
      { name: "Chicken Risoles", description: "Indonesian style crepes filled with chicken ragout." }
    ]
  },
  {
    category: "Traditional Soup",
    items: [
      { name: "Beef Ribs Soup", description: "Tender beef ribs in a rich, aromatic clear broth." },
      { name: "Traditional Chicken Soup", description: "Soto Ayam - Indonesian turmeric chicken soup with vermicelli." },
      { name: "Wonton Noodle Soup", description: "Handmade wontons in a delicate broth with egg noodles." }
    ]
  },
  {
    category: "Indonesian Curry",
    items: [
      { name: "Chicken Curry", description: "Slow-cooked chicken in a rich coconut curry sauce." },
      { name: "Lamb Curry", description: "Tender lamb pieces in a spicy and fragrant curry." },
      { name: "Beef Rendang", description: "The legendary slow-cooked dry beef curry from West Sumatra." }
    ]
  },
  {
    category: "Traditional Grilled & Satay",
    items: [
      { name: "Grilled Beef Ribs", description: "Iga Bakar - Sweet and savory glazed grilled ribs." },
      { name: "Grilled Chicken", description: "Ayam Bakar - Traditional charcoal-grilled chicken." },
      { name: "Chicken Satay", description: "Classic skewers served with our signature peanut sauce." }
    ]
  },
  {
    category: "Traditional Fried",
    items: [
      { name: "Fried Chicken with Belacan Sauce", description: "Crispy chicken served with spicy shrimp paste sambal." },
      { name: "Smashed Chicken in Penyet Sauce", description: "Ayam Penyet - Smashed fried chicken with super spicy sambal." },
      { name: "Fried Chicken with Crispy Fried Flakes", description: "Ayam Kremes - Topped with savory crispy bits." },
      { name: "Crispy Duck", description: "Bebek Goreng - Balinese style crispy fried duck." }
    ]
  },
  {
    category: "Coconut Rice (Nasi Lemak/Uduk)",
    items: [
      { name: "Fried Chicken Set", description: "Fragrant coconut rice with crispy chicken and sides." },
      { name: "Slow Cooked Sweet Beef Set", description: "Empal Gentong style beef with coconut rice." },
      { name: "Fried Whole Tilapia Fish Set", description: "Crispy whole fish served with fragrant rice." },
      { name: "Hainanese Chicken Rice", description: "Poached chicken served with ginger-infused rice." }
    ]
  },
  {
    category: "Fried Rice (Nasi Goreng)",
    items: [
      { name: "Chicken Fried Rice", description: "Classic Indonesian fried rice with chicken." },
      { name: "Seafood Fried Rice", description: "Wok-tossed rice with prawns and calamari." },
      { name: "Beef Fried Rice", description: "Savory fried rice with tender beef slices." },
      { name: "Lamb Fried Rice", description: "Fragrant fried rice with spiced lamb." },
      { name: "Terasi Fried Rice", description: "Fried rice with aromatic shrimp paste." },
      { name: "Anchovy Fried Rice", description: "Salty and savory with crispy anchovies." },
      { name: "Vegetarian Fried Rice", description: "Loaded with fresh seasonal vegetables." }
    ]
  },
  {
    category: "Fried Noodle",
    items: [
      { name: "Chicken Fried Noodle", description: "Wok-tossed egg noodles with chicken and vegetables." },
      { name: "Seafood Fried Noodle", description: "Egg noodles with prawns, fish cake, and calamari." },
      { name: "Beef Fried Noodle", description: "Savory fried noodles with tender beef slices." },
      { name: "Lamb Fried Noodle", description: "Spiced fried noodles with succulent lamb." },
      { name: "Terasi Fried Noodle", description: "Aromatic fried noodles with shrimp paste." },
      { name: "Vegetarian Fried Noodle", description: "Stir-fried noodles with seasonal greens and tofu." }
    ]
  },
  {
    category: "Fried Vermicelli",
    items: [
      { name: "Chicken Fried Vermicelli", description: "Thin rice noodles stir-fried with chicken." },
      { name: "Seafood Fried Vermicelli", description: "Rice vermicelli with fresh seafood mix." },
      { name: "Beef Fried Vermicelli", description: "Savory rice vermicelli with tender beef." },
      { name: "Lamb Fried Vermicelli", description: "Fragrant rice vermicelli with spiced lamb." },
      { name: "Terasi Fried Vermicelli", description: "Rice vermicelli with aromatic shrimp paste." },
      { name: "Vegetarian Fried Vermicelli", description: "Light and healthy rice vermicelli with vegetables." }
    ]
  }
];

const GALLERY_IMAGES = [
  "https://i.imgur.com/x6Z1piV.png",
  "https://i.imgur.com/oUSWenQ.png",
  "https://i.imgur.com/QBv8ZLp.png",
  "https://i.imgur.com/CsKL1hO.png",
  "https://i.imgur.com/Gczoeo7.png",
  "https://i.imgur.com/UczBVKl.png",
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src={LOGO_URL} 
            alt="Pondok Daun Logo" 
            className="h-12 w-auto group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-stone-600 hover:text-brand-olive transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-olive transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="tel:0882121449" 
            className="bg-brand-olive text-brand-cream px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-brand-terracotta transition-colors"
          >
            Call to Book
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-olive" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-stone-200 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-stone-800 hover:text-brand-olive transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:0882121449" 
                className="bg-brand-olive text-brand-cream text-center py-3 rounded-xl font-medium uppercase tracking-widest"
              >
                Call to Book
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Indonesian Food Feast" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/40 via-brand-cream/70 to-brand-cream"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium text-stone-500 uppercase tracking-widest">4.6/5 from more than 1200 reviews</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 leading-[0.9] mb-8">
            Authentic <br />
            <span className="text-brand-olive">Indonesian</span> <br />
            Soul Food.
          </h1>
          
          <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
            Experience the vibrant flavors of the archipelago. From our legendary Beef Rendang to grilled ribs, every dish is a journey to Indonesia.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="bg-brand-olive text-brand-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-terracotta transition-all flex items-center gap-2 group shadow-lg shadow-brand-olive/20"
            >
              Explore Menu
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-brand-olive text-brand-olive px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-olive hover:text-brand-cream transition-all"
            >
              Find Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          className="relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3 bg-brand-olive/10 p-4">
            <img 
              src="https://imgur.com/SZxEXku.png" 
              alt="Signature Dish" 
              className="w-full h-full object-cover rounded-[30px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].category);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-terracotta font-medium uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Taste the Archipelago
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-stone-900"
          >
            Our Menu
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {MENU_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.category 
                ? 'bg-brand-olive text-brand-cream shadow-md' 
                : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {MENU_DATA.find(c => c.category === activeCategory)?.items.map((item, idx) => (
              <div key={idx} className="group border-b border-stone-100 pb-6 hover:border-brand-olive/30 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-brand-olive transition-colors">{item.name}</h3>
                  <div className="h-[1px] flex-grow mx-4 border-b border-dotted border-stone-300"></div>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 text-center">
          <p className="text-stone-400 italic mb-8">Prices and availability may vary. Please check in-store for the latest menu.</p>
          <a 
            href="https://www.facebook.com/PondokDaunADL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-olive font-medium hover:underline"
          >
            <Facebook size={20} />
            Follow us for daily specials
          </a>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-terracotta font-medium uppercase tracking-[0.3em] text-sm mb-4 block">Visual Feast</span>
          <h2 className="text-5xl font-serif font-bold text-stone-900">Our Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg group"
            >
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
            <img 
              src="https://imgur.com/0H6rG5r.png" 
              alt="Our Story" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-12 -right-12 w-48 h-48 bg-brand-terracotta rounded-full flex flex-col items-center justify-center text-brand-cream p-6 text-center shadow-xl rotate-12">
            <UtensilsCrossed size={32} className="mb-2" />
            <p className="text-sm font-bold uppercase tracking-widest">Est. 2014</p>
            <p className="text-xs opacity-80">Serving Adelaide for over a decade</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-terracotta font-medium uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
          <h2 className="text-5xl font-serif font-bold text-stone-900 mb-8">A Taste of Home in the Heart of Adelaide</h2>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            Pondok Daun, which translates to "Leaf Hut," was born from a passion for sharing the rich culinary heritage of Indonesia with the people of Adelaide. 
          </p>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            We believe that food is a universal language. Our chefs use traditional techniques and authentic spices to recreate the flavors of Indonesian street food and home-cooked classics. Whether it's the smoky aroma of our charcoal grill or the complex spices in our rendang, every bite tells a story.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-serif font-bold text-brand-olive mb-1">4.6</p>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Google Rating</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-brand-olive mb-1">10+</p>
              <p className="text-sm text-stone-500 uppercase tracking-widest">Years of Service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Budi Santoso", review: "The best Beef Rendang in Adelaide! Tastes exactly like home. Highly recommended for anyone craving authentic Indonesian flavors." },
    { name: "Sarah Jenkins", review: "Amazing flavors and great service. The grilled chicken is a must-try. I've been coming here for years and it's always consistent." },
    { name: "Siti Aminah", review: "Pondok Daun never disappoints. The Sambal Penyet is perfectly spicy! It's our favorite spot for family dinners." },
    { name: "Michael Thompson", review: "Authentic Indonesian food at its best. Love the atmosphere here. The staff are friendly and the food comes out quickly." },
    { name: "Dewa Gede", review: "Reminds me of the warungs in Bali. The Crispy Duck is incredible and the coconut rice is so fragrant." },
    { name: "Emily Watson", review: "Great vegetarian options too. The vegetarian fried rice is delicious and full of fresh vegetables. A gem in the city!" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-terracotta font-medium uppercase tracking-[0.3em] text-sm mb-4 block">Guest Reviews</span>
          <h2 className="text-5xl font-serif font-bold text-stone-900">What People Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic mb-6 leading-relaxed">"{t.review}"</p>
              </div>
              <p className="font-serif font-bold text-stone-900">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-olive shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Location</h4>
                  <p className="text-stone-600">75 Currie St, Adelaide SA 5000, Australia</p>
                  <a 
                    href="https://www.google.com/maps/place/Pondok+Daun+Restaurant/@-34.9244098,138.5961326,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-terracotta text-sm font-bold hover:underline mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-olive shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Contact</h4>
                  <p className="text-stone-600">0882121449</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-olive shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 text-stone-600">
                    <span>Mon - Sat:</span>
                    <span>11:30 AM - 8:30 PM</span>
                    <span>Sun:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://www.facebook.com/PondokDaunADL" className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-brand-olive hover:text-brand-cream hover:border-brand-olive transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-lg border border-stone-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.282846875704!2d138.5935576767475!3d-34.92440977284149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf288bd6fe09%3A0x7d36c07f6ad7f196!2sPondok%20Daun%20Restaurant!5e0!3m2!1sen!2sau!4v1713094800000!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_URL} 
              alt="Pondok Daun Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/PondokDaunADL" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Pondok Daun Restaurant. All rights reserved.</p>
          <p>Designed with ❤️ for Adelaide Foodies</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
