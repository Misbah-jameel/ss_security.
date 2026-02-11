'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card dark:bg-card/80 border-t border-border/50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center">
                  <Image 
                    src="/logo2.png" 
                    alt="SS Security" 
                    width={40} 
                    height={40}
                    className="rounded"
                  />
                </div>
                <span className="font-bold text-xl text-foreground">SS Security</span>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Professional security services providing peace of mind for over a decade with expert personnel and equipment.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-lg">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Bodyguards
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Protocol Guards
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Bouncers
                  </a>
                </li>
                <li>
                  <a href="#weapons" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Security Equipment
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-lg">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-lg">Contact Info</h4>
              <div className="space-y-3">
                <a
                  href="tel:+923445533787"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>+92 3445533787</span>
                </a>
                <a
                  href="mailto:mj162332@gmail.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>mj162332@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Address: DHA PHASE-2
Near Iqra University
Karachi,Sindh

</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 py-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-foreground/60 text-sm">
              © {currentYear} SS Security Services. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Gradient bottom */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
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
      `}</style>
    </footer>
  )
}
