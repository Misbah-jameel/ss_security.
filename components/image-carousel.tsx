'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: '/slid_1.jpeg',
    alt: 'Professional Security Team',
    title: 'Elite Security Personnel',
  },
  {
    src: '/slid_2.jpeg',
    alt: 'Event Security & Bouncers',
    title: 'Event Security Services',
  },
  {
    src: '/slid_3.jpeg',
    alt: 'Professional Bodyguard',
    title: 'VIP Protection Services',
  },
  {
    src: '/banner.jpg',
    alt: 'Security Operations Center',
    title: 'Advanced Security Operations',
  },
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-card/30 dark:bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Our <span className="text-primary">Security Services</span> in Action
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Experience our professional security operations and expert personnel
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative group">
          {/* Images Container */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === current}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Title overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <h3 className="text-3xl font-bold text-white text-balance">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 z-30 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              {current + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-3 mt-6 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                  index === current
                    ? 'border-primary shadow-lg shadow-primary/50'
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {index === current && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex gap-2 mt-6 justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
