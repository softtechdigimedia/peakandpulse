import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

 
  return (
    <section ref={containerRef} className="bg-black py-24 px-6 md:px-20 overflow-hidden" id="product-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-12" id="product-container">
        {/* Title animate from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <h2 className="text-white text-2xl font-medium" id="product-heading">Meet the <br /> PEAK AND PULSE</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          {/* Device visual animate from left */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ perspective: 1000 }}
            className="flex-1 flex justify-center md:justify-start relative" id="product-visual"
          >
            <motion.div 
               style={{ rotateY, rotateX }}
               className="w-[300px] h-[200px] bg-zinc-900 rounded-lg shadow-2xl border border-zinc-700/50 flex flex-col relative overflow-hidden group"
            >
      <img src="/logo.png" alt="" />

         
            </motion.div>
          </motion.div>

          {/* Description text animate from left */}
          <motion.div 
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             viewport={{ once: true, margin: "-100px" }}
             className="flex-1" id="product-text"
          >
            <p className="text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight" id="product-desc">
              An elegant, physical key meticulously engineered for a simpler, more secure digital life, significantly enhancing your everyday security.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
