// Projects.jsx
import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../useScrollReveal'

const projects = [
  { name: 'Scheduler Checker', desc: 'AI-powered schedule validation with smart recommendations based on Google Sheets data.' },
  { name: 'Your Smart Gym Buddy', desc: 'Fitness tracking app with AI-powered workout suggestions.' },
  { name: 'Buildwise', desc: 'Project Monitoring Tool uses AI for automated insights.' },
]

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const intervalRef = useRef(null)
  const [titleRef, titleVisible] = useScrollReveal()
  const [carouselRef, carouselVisible] = useScrollReveal()

  const slides = [...projects, projects[0]]

  const startAutoplay = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 3000)
  }

  useEffect(() => {
    startAutoplay()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setIsTransitioning(false)
      setIndex(0)
    }
  }

  // Re-enable transition on the next frame after snapping back
  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true))
      })
      return () => cancelAnimationFrame(id)
    }
  }, [isTransitioning])

  const goToSlide = (i) => {
    setIsTransitioning(true)
    setIndex(i)
    startAutoplay() // reset the timer so it doesn't jump right after a manual click
  }

  return (
    <section id="projects" className="p-10" style={{ background: '#0a0a14' }}>
      <h2
        ref={titleRef}
        className="text-3xl font-bold mb-8"
        style={{
          color: '#ffffff',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        Projects
      </h2>

      <div
        ref={carouselRef}
        className="overflow-hidden max-w-sm mx-auto"
        style={{
          opacity: carouselVisible ? 1 : 0,
          transform: carouselVisible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s',
        }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((p, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2">
              <div
                className="p-5 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  backdropFilter: 'blur(8px)',
                  minHeight: '120px',
                }}
              >
                <h3 className="font-bold text-base mb-1" style={{ color: '#a78bfa' }}>
                  {p.name}
                </h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index % projects.length ? '#7c3aed' : 'rgba(124,58,237,0.25)',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}