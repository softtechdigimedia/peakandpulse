import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black" id="hero-section">
      {/* Background Image with dramatic lighting */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2070&auto=format&fit=crop" 
          alt="Majestic mountain peak at sunset"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto" id="hero-content">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white max-w-4xl leading-tight tracking-tight mb-8 md:mt-20" id="hero-title">
            Understand the Pulse <br /> Reach Your Peak
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12" id="hero-bottom">
            <div className="max-w-md">
              <p className="text-white text-lg font-medium mb-6 leading-relaxed" id="hero-desc">
                We help brands grow through strategic marketing, powerful storytelling, and data-driven campaigns that deliver measurable results.
              </p>
              <button 
                className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-all text-sm uppercase tracking-wider"
                id="book-call-btn"
              >
                Book a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
