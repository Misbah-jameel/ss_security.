'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SliderImage {
  id: number
  image: string
  title: string
}

interface HorizontalImageSliderProps {
  images: SliderImage[]
  title?: string
  autoplay?: boolean
}

export default function HorizontalImageSlider({
  images,
  title = 'Professional Security Services',
  autoplay = true,
}: HorizontalImageSliderProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoplay || !sliderRef.current) return

    const interval = setInterval(() => {
      const container = sliderRef.current
      if (!container) return

      const maxScroll = container.scrollWidth - container.clientWidth
      let newPosition = scrollPosition + 300

      if (newPosition > maxScroll) {
        newPosition = 0
      }

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })
      setScrollPosition(newPosition)
    }, 5000)

    return () => clearInterval(interval)
  }, [scrollPosition, autoplay])

  const scroll = (direction: 'left' | 'right') => {
    const container = sliderRef.current
    if (!container) return

    const scrollAmount = 300
    const newPosition =
      direction === 'right'
        ? scrollPosition + scrollAmount
        : Math.max(0, scrollPosition - scrollAmount)

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    })
    setScrollPosition(newPosition)
  }

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-foreground">
            {title}
          </h2>
        )}

        <div className="relative">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden scroll-smooth pb-4"
          >
            {images.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-72 sm:w-96 group cursor-pointer"
              >
                <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
