'use client'

import { Zap, Award, Users, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    icon: Award,
    title: 'Professional Army Officers',
    description: 'We have professional army retired officers with extensive experience and tactical training.',
  },
  {
    icon: Zap,
    title: 'Well Trained Personnel',
    description: 'All our security personnel are well trained, educated, and equipped to handle any situation.',
  },
  {
    icon: Shield,
    title: 'Best Quality Service',
    description: 'We pride ourselves on delivering the highest quality security services to our valued clients.',
  },
  {
    icon: Users,
    title: '24/7 Availability',
    description: 'Our team is available round the clock to provide security services whenever you need us.',
  },
]

export default function WhyChooseUs() {
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
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Why Choose <span className="text-primary">SS Security</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Our ambition is providing best quality services for valued clients with years of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className={`group relative bg-card dark:bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible ? 'animate-in fade-in scale-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300 transform group-hover:scale-110">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 pt-1">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            )
          })}
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 rounded-2xl p-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <p className="text-foreground/70">Professional Guards</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-foreground/70">Satisfied Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <p className="text-foreground/70">Available Service</p>
            </div>
          </div>
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
