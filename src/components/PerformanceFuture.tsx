import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function PerformanceFuture() {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0b] flex flex-col items-center justify-center py-32 px-6 overflow-hidden" id="future-section">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Background Visual Element (Blurry/Abstract) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-700/30 rounded-full blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-[14rem] md:text-[22rem] font-bold leading-[0.75] tracking-[-0.05em] text-zinc-100/90 select-none">
              fu
            </h2>
            <div className="flex items-start gap-8 md:gap-16 mt-[-2rem] md:mt-[-4rem]">
              <div className="flex flex-col gap-6 max-w-sm md:max-w-md pt-8">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-zinc-100 rounded-lg text-black">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                    <div className="space-y-0.5 mt-10">
                      <h3 className="text-zinc-100 text-3xl font-bold tracking-tight">Innovating</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-6 border border-zinc-500 rounded-full flex items-center justify-center">
                           <div className="w-2 h-2 bg-zinc-500 rounded-full animate-pulse" />
                        </div>
                        <h3 className="text-zinc-100 text-3xl font-bold tracking-tight">for the</h3>
                      </div>
                    </div>
                 </div>
                 
                 <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                   DigiPulse delivers stunningly detailed, high-fidelity marketing strategies for an unparalleled brand experience. Each part of our custom-built growth stack works to produce results with ultra-low friction across the entire funnel—so you'll see every conversion with a new sense of clarity.
                 </p>
              </div>
              <h2 className="text-[14rem] md:text-[22rem] font-bold leading-[0.75] tracking-[-0.05em] text-zinc-100/90 select-none">
                ture
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
