'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const weapons = [
  {
    name: 'M416',
    badge: 'Rifle',
    description: 'Best gun we provide to our guards on client demand.',
    image: '/wep_1.jpeg',
  },
  {
    name: 'Pump-action',
    badge: 'Shotgun',
    description: 'We commonly provide Pump-action to our guards.',
    image: '/wep_2.jpeg',
  },
  {
    name: 'AK 47',
    badge: 'Rifle',
    description: 'We commonly provide AK 47 to our guards.',
    image: '/wep_3.jpeg',
  },
  {
    name: '9mm',
    badge: 'Handgun',
    description: 'The most common one hand gun we provide to our guards.',
    image: '/wep_4.jpeg',
  },
]

export default function Weapons() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="weapons" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-primary">Weapons</span> We Provide
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We provide our guards the best weapons and we also give a choice to our client for their own choice of weapons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {weapons.map((weapon, index) => (
            <div
              key={index}
              className={`group relative bg-card dark:bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? 'animate-in fade-in slide-in-from-left-4' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={weapon.image || "/placeholder.svg"}
                  alt={weapon.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Badge and Title */}
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {weapon.name}
                  </h3>
                  <span className="px-3 py-1 bg-primary/20 dark:bg-primary/30 text-primary rounded-full text-xs font-semibold group-hover:bg-primary/30 dark:group-hover:bg-primary/40 transition-colors duration-300 whitespace-nowrap">
                    {weapon.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {weapon.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-16 bg-card dark:bg-card/50 border-2 border-primary/30 rounded-2xl p-10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Custom Weapon Selection</h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We understand that different situations require different weapons. Our clients can request their own choice of weapons, and we'll provide them with proper training and safety protocols.
          </p>
        </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
