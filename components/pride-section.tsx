'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Users, Zap } from 'lucide-react'

export default function PrideSection() {
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

  const benefits = [
    {
      icon: Award,
      title: 'PERSONAL BODY GUARDS',
      description: 'We provide trained personal body guards with heavy weapons, who always with you in your every critical situation and safe you from the damages.',
    },
    {
      icon: Users,
      title: 'BOUNCERS',
      description: 'We provide best professional bouncers for the events, who always ready to handle the critical situations and make your event peaceful.',
    },
    {
      icon: Zap,
      title: 'PROTOCOL GUARDS',
      description: 'We provide professional protocol guards to our client with best weapons and also provide protocol vehicle on demand of client.',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            We <span className="text-primary">Proud Our Services</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Our ambition to providing best army personnel well trained, educational and best quality services for valued clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`group relative bg-card dark:bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            )
          })}
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
