
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
