import OrbitalIcons from '../components/OrbitalIcons';
import FloatingChatCards from '../components/FloatingChatCards';

const Info = () => {
  return (
   <>
       <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glows for Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
      
      {/* The Focused Animation - Orbit */}
      <div className="relative z-20 w-full h-screen flex flex-col items-center justify-center pt-20">
        <OrbitalIcons />
        
        {/* Floating Cards Section - Positioned to flow upward through the scene */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <FloatingChatCards />
        </div>
      </div>
    </main>
   </>
  )
}

export default Info
