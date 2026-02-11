'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import VideoBanner from '@/components/video-banner'
import HorizontalImageSlider from '@/components/horizontal-image-slider'
import { useState, useEffect, useRef } from 'react'
import { Shield, Users, Lock, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const serviceDetails = [
  {
    icon: Shield,
    title: 'Personal Bodyguards',
    description: 'We provide trained personal bodyguards with heavy weapons, who are always with you in every critical situation and safe you from damages.',
    features: [
      'Armed and Unarmed Training',
      'Tactical Expertise',
      '24/7 Protection',
      'VIP Client Experience',
      'Vehicle Escort',
      'Counter Surveillance',
    ],
    image: '/slid_2_.jpeg',
  },
  {
    icon: Users,
    title: 'Professional Bouncers',
    description: 'We provide the best professional bouncers for events, who are always ready to handle critical situations and make your event peaceful.',
    features: [
      'Event Security',
      'Crowd Management',
      'De-escalation Experts',
      'Professional Appearance',
      'Radio Communication',
      'Emergency Response',
    ],
    image: '/slid_3.jpeg',
  },
  {
    icon: Lock,
    title: 'Protocol Guards',
    description: 'We provide professional protocol guards with best weapons and protocol vehicles on demand of client.',
    features: [
      'Presidential Protection',
      'Diplomatic Security',
      'Armed Response Team',
      'Vehicle Escort Services',
      'Security Planning',
      'Risk Assessment',
    ],
    image: '/slid_1.jpeg',
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(new Array(serviceDetails.length).fill(false))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setIsVisible((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-index]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <VideoBanner
        title="Our Services"
        subtitle="Professional security solutions tailored to your needs"
        imageUrl="/banner.jpg"
      />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Comprehensive <span className="text-primary">Security Solutions</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              We offer a wide range of security services designed to protect what matters most to you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20" ref={sectionRef}>
            {serviceDetails.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-80 rounded-2xl overflow-hidden shadow-2xl ${
                      isVisible[index]
                        ? 'animate-in fade-in slide-in-from-left-4'
                        : 'opacity-0'
                    }`}
                    style={{
                      animationDuration: '0.6s',
                      animationFillMode: 'both',
                    }}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-6 ${
                      isVisible[index]
                        ? 'animate-in fade-in slide-in-from-right-4'
                        : 'opacity-0'
                    }`}
                    style={{
                      animationDuration: '0.6s',
                      animationFillMode: 'both',
                      animationDelay: '0.1s',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/20 dark:bg-primary/30 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 pt-4">
                      <p className="font-semibold text-foreground">
                        Key Features:
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-foreground/80"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="/contact"
                      className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Get This Service
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 rounded-2xl p-12 text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Need Custom Security Solutions?
            </h3>
            <p className="text-lg text-foreground/70">
              Contact us today to discuss your specific security requirements.
            </p>
            <a
              href="tel:+923042775661"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Call: +92 304 2775661
            </a>
          </div>
        </div>
      </div>

      <HorizontalImageSlider
        images={[
          { id: 1, image: '/slid_1.jpeg', title: 'Professional Team' },
          { id: 2, image: '/slid_2.jpeg', title: 'VIP Protection' },
          { id: 3, image: '/banner.jpg', title: 'Tactical Training' },
          { id: 4, image: '/slid_3.jpeg', title: 'Operations' },
          { id: 5, image: '/slid_4.jpeg', title: 'Command Center' },
        ]}
        title="Our Professional Services in Action"
        autoplay
      />

      <Footer />
    </div>
  )
}
