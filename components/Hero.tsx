'use client'

// Use a small intersection observer to show the scroll indicator only while
// the hero section is visible.
import { useEffect, useRef, useState } from 'react'
import { FiArrowDown, FiDownload } from 'react-icons/fi'


export default function Hero() {
  // No role text requested — all role/rotator content removed

  const heroRef = useRef<HTMLElement | null>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // show indicator only if at least 40% of hero is visible
          setShowScrollIndicator(entry.isIntersecting && entry.intersectionRatio >= 0.4)
        })
      },
      { threshold: [0, 0.2, 0.4, 0.6, 1] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-[#0f172a]"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting (no animation) */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
              👋 Hello, I'm
            </span>
            {/* removed motion wrapper */}
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-space-grotesk font-bold mb-6">
            <span className="text-slate-100">Hariharan</span>
            <br />
            {/* subtitle removed as requested */}
          </h1>

          {/* Role content removed */}

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Aspiring Full Stack Engineer & AI/ML Enthusiast with strong skills in React, Python, and AI-driven applications. 
            Experienced in developing scalable projects that integrate Machine Learning, NLP, GenAI APIs, and Web Technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('projects')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <FiDownload className="w-5 h-5" />
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          {/* fixed to viewport bottom so the button stays at the bottom of the page */}
          {showScrollIndicator && (
            <div className="fixed bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-50">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <span className="text-sm font-medium slide-down">Scroll Down</span>
              <FiArrowDown className="w-6 h-6" />
            </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
