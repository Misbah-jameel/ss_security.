'use client'

import { useEffect, useState } from 'react'
import HeroBannerSlider from './hero-banner-slider'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Banner Slider */}
      <div className="relative z-10 w-full max-w-6xl mb-12 animate-in fade-in duration-700">
        <HeroBannerSlider />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Main heading */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Welcome To <span className="text-primary">SS Security</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Professional Security Services - Your Safety Is Our Priority
            </p>
          </div>

          {/* Description */}
          <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our ambition is providing best army personnel, well trained, educated and best quality services for valued clients. We provide Bodyguards, Protocol Guards, Professional Bouncers, Trained Security Guards, and All Security Accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <a
                href="tel:+923042775661"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Call Us: +92 3445533787
              </a>
              <a
                href="#services"
                className="px-8 py-3 border-2 border-primary text-primary dark:text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
