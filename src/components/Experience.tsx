import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full bg-black overflow-hidden" id="experience-section">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=2070&auto=format&fit=crop" 
          alt="Close up of hands with card"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto" id="experience-content">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="space-y-12"
        >
          <h2 className="text-white text-5xl md:text-6xl font-medium tracking-tight" id="experience-title">Experience It Now</h2>
          
          <div className="max-w-xs space-y-8">
            <p className="text-white text-lg font-medium leading-tight" id="experience-desc">
              Step into a more secure future by reserving your place in our first production run
            </p>
            <button 
              className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-all text-sm uppercase tracking-wider"
              id="get-demo-btn"
            >
              Get a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
