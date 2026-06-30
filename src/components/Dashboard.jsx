// Dashboard.jsx
import { useState, useEffect } from 'react'
import heroImage from '../assets/Background.jpg'
import avatarImage from '../assets/PictureofMe.jpg'

export default function Dashboard() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden"
      style={{ background: '#0a0a14' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '130%',
          top: '-15%',
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,20,0.85) 0%, rgba(15,10,30,0.9) 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '300px',
          height: '300px',
          maxWidth: '80vw',
          maxHeight: '80vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          transform: `translate(-50%, ${scrollY * 0.6}px)`,
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative z-10 w-full"
        style={{
          opacity: Math.max(1 - scrollY / 500, 0),
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <p className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4" style={{ color: '#7c3aed' }}>
          Available for Work
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
          <img
            src={avatarImage}
            alt="Sean"
            className="rounded-full"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              border: '2px solid rgba(124,58,237,0.5)',
              boxShadow: '0 0 20px rgba(124,58,237,0.35)',
            }}
          />
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hi, I'm Sean 👋
          </h1>
        </div>

        <p className="text-base md:text-lg mb-2 px-2" style={{ color: '#94a3b8' }}>
          IT Graduate · Full-Stack Developer
        </p>

        <p className="text-xs md:text-sm mb-8 md:mb-10 tracking-wide px-2" style={{ color: '#64748b' }}>
          React · Vite · Tailwind · Android · Data Analytics
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center px-4">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(124,58,237,0.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.35)')}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{
              border: '1px solid rgba(124,58,237,0.5)',
              color: '#a78bfa',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(124,58,237,0.1)'
              e.currentTarget.style.borderColor = '#7c3aed'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}