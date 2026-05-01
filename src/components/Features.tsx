import { motion } from 'motion/react';
import { Laptop, Globe, Fingerprint,  Zap } from 'lucide-react';

const features = [
  {
    title: "Data-Driven SEO Strategies",
    icon: Globe,
    description: "Rank higher and dominate search results with our predictive keyword modeling and technical optimizations."
  },
  {
    title: "High-Performance Paid Media",
    icon: Zap,
    description: "Scale spend efficiently across Meta, Google, and TikTok with machine-learning powered bidding strategies."
  },
  {
    title: "Conversion-Led Design",
    icon: Laptop,
    description: "Beautifully crafted user experiences designed with a single goal: turning visitors into loyal customers."
  },
  {
    title: "Content That Converts",
    icon: Fingerprint,
    description: "High-impact storytelling that resonates with your audience and builds lasting brand equity."
  }
];

export default function Features() {
  return (
    <section className="bg-black py-24 px-6 md:px-20" id="features-section">
      <div className="max-w-7xl mx-auto" id="features-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20" id="features-header">
          <motion.h3 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-xl font-medium max-w-xs"
          >
            Dominating the <br /> Digital Landscape
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-3xl md:text-5xl font-medium max-w-2xl leading-[1.1] tracking-tight"
          >
            Experience the impact of precision-engineered marketing that speaks to your results
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12" id="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-6 group"
              id={`feature-item-${index}`}
            >
              <div className="w-full aspect-square border border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-zinc-500 transition-colors duration-500 overflow-hidden relative">
                <feature.icon className="w-24 h-24 text-zinc-700 stroke-[1] group-hover:text-zinc-500 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center gap-2 group-hover:text-zinc-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
