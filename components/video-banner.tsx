'use client'

import { useEffect, useState } from 'react'

interface VideoBannerProps {
  title: string
  subtitle?: string
  imageUrl: string
}

export default function VideoBanner({ title, subtitle, imageUrl }: VideoBannerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden mt-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className={`text-center space-y-4 ${mounted ? 'animate-in fade-in slide-in-from-bottom-4 duration-1000' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Animated accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent" />
    </div>
  )
}
