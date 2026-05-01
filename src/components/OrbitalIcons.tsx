/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { FaFacebook,  FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useAnimationControls } from 'motion/react';
import { 
  Globe, 
  Ghost, 
  MessageCircle, 
  Share2 
} from 'lucide-react';
import { useEffect } from 'react';

const SOCIAL_ICONS = [
  { icon: FaInstagram, gradient: 'from-[#FF0080] via-[#7928CA] to-[#4c1d95]', label: 'Instagram' },
  { icon: FaFacebook, gradient: 'from-[#0061ff] to-[#60efff]', label: 'Facebook' },
  { icon: FaTwitter, gradient: 'from-[#1DA1F2] to-[#0d8bd9]', label: 'Twitter' },
  { icon: FaYoutube, gradient: 'from-[#FF0000] to-[#b91c1c]', label: 'YouTube' },
  { icon: FaLinkedin, gradient: 'from-[#0077B5] to-[#004a71]', label: 'LinkedIn' },
  { icon: Globe, gradient: 'from-[#00f2fe] to-[#4facfe]', label: 'Web' },
  { icon: Ghost, gradient: 'from-[#FFFC00] to-[#e6e200]', label: 'Snapchat', textColor: 'text-black' },
  { icon: MessageCircle, gradient: 'from-[#00d2ff] to-[#3a7bd5]', label: 'Chat' },
  { icon: Share2, gradient: 'from-[#f093fb] to-[#f5576c]', label: 'Share' },
];

export default function OrbitalIcons() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center orbit-container overflow-visible scale-110 lg:scale-125">
      {/* Central Ambient Hub - High End Nebula */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
        className="z-20 w-40 h-40 flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[100px] scale-125" />
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]" />
      </motion.div>
      
      {/* The Main Orbiting System */}
      <motion.div 
        animate={controls}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', rotateX: 15 }}
      >
        {SOCIAL_ICONS.map((item, index) => {
          const totalIcons = SOCIAL_ICONS.length;
          const angle = (index / totalIcons) * Math.PI * 2;
          const radius = 320; 
          
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.label}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: x,
                z: z,
              }}
              transition={{ 
                delay: index * 0.08, 
                duration: 2,
                x: { duration: 0 },
                z: { duration: 0 }
              }}
              style={{
                top: '50%',
                left: '50%',
                transformStyle: 'preserve-3d',
                marginTop: '-32px',
                marginLeft: '-32px',
              }}
            >
              {/* Individual Icon Block */}
              <motion.div
                animate={{
                  rotateY: -360,
                  rotateX: -15,
                  y: [0, -35, 0],
                }}
                transition={{
                  rotateY: { duration: 40, repeat: Infinity, ease: "linear" },
                  y: { duration: 5 + index * 0.6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:scale-125 group-hover:border-white/60 cursor-pointer overflow-hidden`}>
                  {/* Glass Specular Reflect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-12 translate-y-[-50%] pointer-events-none" />
                  
                  {/* Icon */}
                  <item.icon className={`w-7 h-7 relative z-10 ${item.textColor || 'text-white'} drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]`} />
                </div>
                
                {/* Precision shadow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all pointer-events-none" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Precision Trace Lines */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-[0.05]">
        <div className="absolute w-[640px] h-[640px] border-[0.5px] border-white rounded-full rotate-x-[75deg]" />
        <div className="absolute w-[680px] h-[680px] border-[0.5px] border-white/40 rounded-full rotate-x-[75deg]" />
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl translate-y-32 rotate-x-90" />
      </div>
    </div>
  );
}
