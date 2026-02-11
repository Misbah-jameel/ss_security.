'use client'

import { Phone, MapPin, MessageSquare } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Contact() {
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

  const contacts = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+92 304 2775661',
      link: 'tel:+923042775661',
    },
    {
      icon: MessageSquare,
      title: 'Chat With Us',
      value: 'Available 24/7',
      link: '#',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      value: 'Karachi, Pakistan',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Contact us for any security needs or inquiries. Our team is ready to help you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.link}
                className={`group relative bg-card dark:bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 cursor-pointer ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10 space-y-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-foreground/70 text-lg">
                    {contact.value}
                  </p>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </a>
            )
          })}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-card to-card/50 dark:from-card/70 dark:to-card/30 border border-border/50 rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Send us a <span className="text-primary">Message</span>
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your security needs"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              Send Message
            </button>
          </form>
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
