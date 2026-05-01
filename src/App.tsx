
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Anatomy from './components/Anatomy';
import PerformanceFuture from './components/PerformanceFuture';
import Footer from './components/Footer';
import Info from './components/Info';
import FooterRevealSection from './components/FooterRevealSection';
import ThankYou from './components/ThankYou';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
      <Navbar />
       <main className="relative z-20 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        <Hero />
      
        <Features />
           <BentoGrid />
               <Info />
        <Anatomy />
           <PerformanceFuture />
          {/* <InfiniteMarquee /> */}
        <Experience />
        <ThankYou />
      

      </main>
            <FooterRevealSection />
      <Footer />
    </div>
  );
}
