'use client'

import { Shield, Users, Lock, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: Shield,
    title: 'Personal Bodyguards',
    description:
      'We provide trained personal bodyguards with heavy weapons, who always stay with you in every critical situation and protect you from danger.',
    image: '/pro_3.jpeg',
  },
  {
    icon: Users,
    title: 'Professional Bouncers',
    description:
      'We provide professional bouncers for events, always ready to handle critical situations and keep your event peaceful.',
    image: '/pro_1.jpeg',
  },
  {
    icon: Lock,
    title: 'Protocol Guards',
    description:
      'We provide professional protocol guards with advanced equipment and protocol vehicles on client demand.',
    image: '/pro_2.jpeg',
  },
]

export default function Services() {
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
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-primary">Security Services</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Providing the best security services all over Karachi. The security you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Link href="/services" key={index}>
                <div
                  className={`group relative bg-card dark:bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 cursor-pointer h-full ${
                    isVisible
                      ? 'animate-in fade-in slide-in-from-bottom-4'
                      : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom border animation */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground/80">
            We have{' '}
            <span className="font-bold text-primary">
              professional army retired officers
            </span>{' '}
            providing elite security with years of expertise and tactical training.
          </p>
        </div>
      </div>
    </section>
  )
}
