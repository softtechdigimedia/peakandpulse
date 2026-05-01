import { motion } from 'motion/react';

const CARDS = [
  { id: 1, color: 'bg-zinc-800', title: 'CTR', value: '8.4%' },
  { id: 2, color: 'bg-purple-900/40', title: 'ROAS', value: '12.5x' },
  { id: 3, color: 'bg-zinc-900', title: 'Leads', value: '124K' },
  { id: 4, color: 'bg-zinc-800', title: 'CPC', value: '$0.12' },
  { id: 5, color: 'bg-purple-800/20', title: 'Reach', value: '45.2M' },
  { id: 6, color: 'bg-zinc-900', title: 'CPA', value: 'Reduced' },
];

const Column = ({ reverse = false, speed = 20 }: { reverse?: boolean; speed?: number }) => {
  return (
    <div className="flex flex-col gap-4 py-4 h-full relative overflow-hidden">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {[...CARDS, ...CARDS].map((card, i) => (
          <div
            key={i}
            className={`w-48 h-64 md:w-56 md:h-72 rounded-2xl border border-zinc-800/50 ${card.color} backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative group overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-lg bg-zinc-700/50" />
              <div className="w-1/2 h-2 rounded-full bg-zinc-700/30" />
            </div>
            <div className="space-y-2">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{card.title}</p>
              <h4 className="text-white text-xl font-bold">{card.value}</h4>
              <div className="flex gap-1">
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-purple-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function InfiniteMarquee() {
  return (
    <section className="relative bg-black w-full h-[800px] overflow-hidden flex flex-col justify-center border-y border-zinc-900" id="marquee-section">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-20">
        <span className="text-purple-500 font-bold uppercase tracking-[0.3em] text-xs">Global Impact</span>
        <h2 className="text-white text-4xl md:text-6xl font-medium mt-4 tracking-tighter">Scaling Without Limits.</h2>
      </div>

      <div 
        className="flex gap-4 md:gap-8 justify-center items-center h-[900px] -rotate-12 scale-110" 
        style={{ perspective: '1200px' }}
        id="marquee-container"
      >
        <div className="flex gap-4 md:gap-8 transform [rotateX(25deg)]">
          <Column speed={25} />
          <Column reverse speed={30} />
          <Column speed={22} />
          <div className="hidden md:block">
             <Column reverse speed={35} />
          </div>
          <div className="hidden lg:block">
             <Column speed={28} />
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
