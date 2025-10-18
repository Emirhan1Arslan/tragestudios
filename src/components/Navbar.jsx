import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Gamepad2 } from 'lucide-react'
import GooeyNav from './GooeyNav'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Oyunlar', href: '#games' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'İletişim', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-primary-500 group-hover:text-primary-400 transition-colors" />
              <div className="absolute inset-0 blur-xl bg-primary-500 opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-2xl font-bold text-gradient">T-Rage Studios</span>
          </motion.a>

          {/* Desktop Menu with GooeyNav */}
          <div className="hidden md:flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GooeyNav
                items={navItems}
                particleCount={12}
                particleDistances={[70, 8]}
                particleR={80}
                initialActiveIndex={0}
                animationTime={500}
                timeVariance={250}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                onItemClick={(item) => {
                  // Smooth scroll to section
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-primary-400 transition-colors border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
