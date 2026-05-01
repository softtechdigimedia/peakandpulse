import { motion } from 'motion/react';
import Beams from './Beams';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black" id="hero-section">
      {/* Background Image with dramatic lighting */}
      <div style={{ width: '100%', height: '900px', position: 'relative' }}>
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
</div>
      <div className="absolute inset-0 z-0">
     
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className=" h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto absolute z-99 inset-0" id="hero-content ">
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
                className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-all text-sm uppercase tracking-wider cursor-pointer"
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
