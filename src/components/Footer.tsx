
import { FaFacebook,  FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-10 w-full bg-white text-zinc-900 pt-24 pb-12 px-6 md:px-20 " id="main-footer">
      <div className="max-w-7xl mx-auto" id="footer-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24" id="footer-top">
          <div className="space-y-8 text-black" id="footer-brand">
            <h2 className="text-3xl font-bold text-zinc-300 tracking-tighter uppercase">PEAK & PULSE</h2>
            <div className="space-y-4">
               <h4 className="font-semibold text-lg">Subscribe to Our Newsletter</h4>
               <div className="flex flex-col gap-2 text-black">
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="w-full  border-b border-zinc-300 py-2 focus:border-black transition-colors outline-none"
                   id="newsletter-input"
                 />
                 <button className="text-left font-medium hover:text-zinc-600 transition-colors">Join</button>
               </div>
            </div>
          </div>

          <div className="space-y-6 md:ml-20" id="footer-links ">
            <div className="flex flex-col gap-4 text-sm text-black font-medium">
              <a href="#peak" className="hover:text-zinc-900 transition-colors">Go to Peak</a>
              <a href="#pulse" className="hover:text-zinc-500 transition-colors">Know the Pulse</a>
              <a href="#careers" className="hover:text-zinc-500 transition-colors">Careers</a>
              <a href="#portfolio" className="hover:text-zinc-500 transition-colors">Portfolio Page</a>
              <a href="#blog" className="hover:text-zinc-500 transition-colors">Blog</a>
            </div>
          </div>

          <div className="space-y-6 text-black" id="footer-contact">
            <div className="space-y-2 text-sm font-medium">
              <p>info@mysite.com</p>
              <p>123-456-7890</p>
              <p>500 Terry Francine St. SF, CA 94158</p>
            </div>
          </div>

          <div className="space-y-8 flex flex-col items-start lg:items-end justify-between" id="footer-social">
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"><FaLinkedin className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"><FaTwitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"><FaFacebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"><FaInstagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"><FaYoutube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium text-zinc-500" id="footer-bottom">
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Accessibility Statement</a>
          </div>
          <div>
            © 2026 PEAK & PULSE. Powered and secured by TechWizard.
           
          </div>
        </div>
      </div>
    </footer>
  );
}
