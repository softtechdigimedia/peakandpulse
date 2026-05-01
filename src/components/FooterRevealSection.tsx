import { motion } from 'motion/react';

export default function FooterRevealSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden z-20 bg" id="footer-reveal-container">

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4 px-6"
        >
          <span className="text-purple-400 font-bold uppercase tracking-[0.3em] text-sm"></span>
          <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tighter"></h2>
        </motion.div>
      </div>
    </section>
  );
}
