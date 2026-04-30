import { motion } from 'motion/react';


export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 bg-black text-white"
      id="navbar"
    >
      <div className="flex items-center gap-2 " id="nav-logo">
     <img src="/navlogo.png" alt="" width={'150px'} height={'20px'}/>
        <span className="sr-only">Tri.wi</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium" id="nav-links">
        <a href="#peak" className="hover:text-gray-400 transition-colors">Go to Peak</a>
        <a href="#pulse" className="hover:text-gray-400 transition-colors">Know the Pulse</a>
        <a href="#portfolio" className="hover:text-gray-400 transition-colors">Portfolio Page</a>
        <a href="#blog" className="hover:text-gray-400 transition-colors">Blog</a>
      </div>

      <button 
        className="px-6 py-2 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition-all"
        id="call-now-btn"
      >
        Call Now
      </button>
    </motion.nav>
  );
}
