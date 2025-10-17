import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Games from './components/Games'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <ParticleBackground />

      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.1), transparent 80%)`,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Games />
        <Services />
        <Contact />
      </main>

      <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 Tragestudios. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Oyun geliştirme ve yazılım çözümlerinde öncü
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
