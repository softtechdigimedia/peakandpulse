/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mic } from 'lucide-react';



function GlossySphere() {
  return (
    <div className="w-14 h-14 rounded-full relative overflow-hidden shadow-2xl">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95] via-[#7e22ce] to-[#1e1b4b]" />
      {/* Top Gloss */}
      <div className="absolute top-1 left-2 w-8 h-8 bg-white/20 rounded-full blur-md" />
      <div className="absolute top-1 left-3 w-4 h-4 bg-white/40 rounded-full blur-[2px]" />
      {/* Brand text on sphere as seen in image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <span className="text-[6px] font-bold tracking-tighter text-white">boddy</span>
      </div>
      {/* Rim light */}
      <div className="absolute inset-0 border border-white/10 rounded-full" />
    </div>
  );
}

function ChatCard({ message, xOffset, delay }: { message: string, xOffset: number, delay: number }) {
  return (
    <motion.div
      initial={{ y: "120vh", opacity: 0 }}
      animate={{ 
        y: "-120vh", 
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        y: { duration: 30, repeat: Infinity, ease: "linear", delay: delay },
        opacity: { times: [0, 0.1, 0.9, 1], duration: 30, repeat: Infinity, delay: delay },
      }}
      className="absolute w-[340px] p-8 rounded-[32px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-8 group"
      style={{ left: `calc(50% + ${xOffset}px)`, translateX: '-50%' }}
    >
      {/* Premium Glass Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-white/[0.02] rounded-[32px] pointer-events-none" />
      
      <GlossySphere />

      <p className="text-xl font-medium text-white/90 leading-tight tracking-tight">
        {message}
      </p>

      <div className="relative flex items-center justify-between mt-auto">
        <span className="text-xs font-medium text-white/20 uppercase tracking-widest">Start typing...</span>
        <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <Mic className="w-4 h-4 text-white/40" />
        </div>
        <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      </div>
    </motion.div>
  );
}

export default function FloatingChatCards() {
  const cards = [
    { message: "How is that new agency working for you,?", xOffset: -400, delay: 0 },
    { message: "Your branding is complete. All metrics are optimal.", xOffset: 450, delay: 5 },
    { message: "New potential lead connection detected in your vicinity.", xOffset: -300, delay: 10 },
    { message: "Schedule updated for the upcoming launch.", xOffset: 350, delay: 15 },
    { message: "Deep analysis of your content strategy is ready.", xOffset: -500, delay: 20 },
    { message: "Anomaly detected in the Marketing sector.", xOffset: 400, delay: 25 },
  ];

  return (
    <div className="relative inset-0 z-0 pointer-events-none">
      {/* Ambient Depth Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-60" />
      
      {cards.map((card, i) => (
        <ChatCard 
          key={i} 
          message={card.message} 
          xOffset={card.xOffset} 
          delay={card.delay} 
        />
      ))}
    </div>
  );
}
