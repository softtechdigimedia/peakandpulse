import { motion } from 'motion/react';
import { useState, type MouseEvent } from 'react';

export default function ThankYou() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[800px] w-full bg-black overflow-hidden py-32 px-6 md:px-20" 
      id="thank-you-section"
    >
      {/* Interactive Spotlight Glow */}
      <motion.div
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
          opacity: isHovered ? 0.35 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none z-10 bg-purple-500/40 rounded-full blur-[120px]"
      />

      {/* Animated Grid Lines - Adjusted for dark theme */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" id="grid-svg">
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Vertical Lines */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={`${(i + 1) * 8.33}%`}
              y1="0"
              x2={`${(i + 1) * 8.33}%`}
              y2="100%"
              stroke="#A855F7"
              strokeWidth="0.5"
              initial={{ opacity: 0.1 }}
              animate={{ 
                opacity: [0.1, isHovered ? 0.6 : 0.4, 0.1],
                strokeWidth: [0.5, isHovered ? 2 : 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          {/* Horizontal Lines */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={`${(i + 1) * 8.33}%`}
              x2="100%"
              y2={`${(i + 1) * 8.33}%`}
              stroke="#A855F7"
              strokeWidth="0.5"
              initial={{ opacity: 0.1 }}
              animate={{ 
                opacity: [0.1, isHovered ? 0.6 : 0.4, 0.1],
                strokeWidth: [0.5, isHovered ? 2 : 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Background Blobs/Blocks - More subtle on dark */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 z-0">
        <div className="grid grid-cols-4 md:grid-cols-8 h-full gap-4 p-4 opacity-20">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl ${
                i % 3 === 0 ? 'bg-purple-900/50 blur-xl' : 
                i % 5 === 0 ? 'bg-purple-700/50 blur-2xl' : 'bg-purple-800/30 blur-lg'
              }`}
              style={{
                height: `${Math.random() * 100 + 100}px`,
                marginTop: `${Math.random() * 50}px`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-between" id="thank-you-content">
        <div className="space-y-4" id="thank-you-header">
           <span className="text-zinc-600 font-bold uppercase tracking-widest text-xs">Marketing Insights</span>
           <div className="relative">
             <h2 className="text-8xl md:text-[10rem] font-bold text-white leading-none tracking-tighter" id="thank-text">
               Grow
             </h2>
             <h2 className="text-8xl md:text-[10rem] font-bold leading-none tracking-tighter bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent" id="you-text">
               Fast.
             </h2>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 right-0 md:right-1/4 text-zinc-600"
             >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z" />
                </svg>
             </motion.div>
           </div>
           
           <div className="mt-8">
              <span className="text-purple-400 font-bold uppercase tracking-widest text-lg block">Follow</span>
              <span className="text-purple-300 font-bold uppercase tracking-widest text-lg block">For More</span>
           </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-end" id="thank-you-footer">
          <div className="space-y-4">
             <h3 className="text-zinc-400 text-4xl font-medium leading-tight max-w-sm">
               Latest Marketing Strategy Guides
             </h3>
             <button className="flex items-center gap-2 border border-zinc-800 rounded-full px-6 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-900 transition-colors">
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-bold">L</span>
                Latest Guide
             </button>
          </div>

          <div className="flex flex-col md:items-end gap-12 text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em]">
            <div className="flex justify-between w-full md:w-auto md:gap-24">
               <div className="text-zinc-400">Scaling strategies<br/>beyond metrics</div>
               <div className="text-right text-zinc-400">Save your<br/>business</div>
            </div>
            <div className="flex justify-between w-full md:w-auto md:gap-24 opacity-40">
               <div>Scale<br/>Resources</div>
               <div className="text-right">2026<br/>May</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
