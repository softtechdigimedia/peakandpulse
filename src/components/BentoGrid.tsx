import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lock, Globe } from 'lucide-react';

export default function BentoGrid() {
  const items = [
    {
      title: "320%",
      subtitle: "Avg. ROAS Growth",
      description: "Our proprietary attribution modeling maximizes every dollar of ad spend.",
      className: "md:col-span-2 md:row-span-1 bg-zinc-900",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Omnichannel",
      subtitle: "Full-Funnel Mastery",
      description: "Unified messaging across TikTok, Instagram, Google, and Email.",
      className: "md:col-span-1 md:row-span-2 bg-purple-900/10 border-purple-500/20",
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Predictive",
      subtitle: "AI Lead Scoring",
      description: "Identify high-value leads before they even click, optimizing your CPA.",
      className: "md:col-span-1 md:row-span-1 bg-zinc-900",
      icon: <Lock className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Creative",
      subtitle: "High-Impact Assets",
      description: "Custom video and static content designed for viral engagement.",
      className: "md:col-span-1 md:row-span-1 bg-zinc-900",
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-20" id="bento-section">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-purple-500 font-bold uppercase tracking-[0.3em] text-xs">Methodology</span>
          <h2 className="text-white text-4xl md:text-6xl font-medium mt-4 tracking-tighter">Superior Strategy.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-500 ${item.className}`}
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 w-fit"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-purple-400 font-medium text-sm uppercase tracking-wider">{item.subtitle}</p>
              </div>
              <p className="text-zinc-500 text-sm mt-8 max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
