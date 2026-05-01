import { motion } from 'motion/react';

export default function Anatomy() {
  const specs = [
    { label: "Research", value: "Audience Persona Extraction" },
    { label: "Optimization", value: "A/B Multivariate Testing" },
    { label: "Analytics", value: "Custom G4 Tracking Setup" },
    { label: "Scaling", value: "Vertical & Horizontal Spends" }
  ];

  return (
    <section className="bg-black py-32 px-6 md:px-20 border-t border-zinc-900" id="anatomy-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12 order-2 lg:order-1">
          <div className="space-y-4">
            <span className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs">Anatomy of a Campaign</span>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter italic">Pure Impact.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md italic">
              Every touchpoint of your brand is meticulously audited, every creative piece engineered for maximum conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {specs.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <div className="h-px bg-zinc-800 w-full mb-4" />
                <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">{spec.label}</p>
                <p className="text-white font-medium">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
           {/* Visual representation of "Anatomy" using geometric shapes */}
           <div className="relative w-full aspect-square max-w-md">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[0.5px] border-zinc-800 rounded-full" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-[0.5px] border-dashed border-zinc-700 rounded-full" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-4/5 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl rotate-12 flex items-center justify-center">
                   <div className="w-10 h-10 border border-purple-500/50 rounded-full animate-pulse" />
                </div>
              </div>
              
              {/* Leader lines */}
              <div className="absolute top-1/4 right-0 w-24 h-px bg-purple-500/30 hidden lg:block" />
              <div className="absolute bottom-1/4 left-0 w-32 h-px bg-zinc-500/20 hidden lg:block" />
           </div>
        </div>
      </div>
    </section>
  );
}
