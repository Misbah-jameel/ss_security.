'use client'

import React from "react"

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import VideoBanner from '@/components/video-banner'
import HorizontalImageSlider from '@/components/horizontal-image-slider'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+92 3445533787', '+92 3445533787'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['mj162332@gmail.com', 'mj162332@gmail.com'],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Address: DHA PHASE-2 Near Iqra University Karachi,Sindh', 'Available 24/7 across Karachi'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['24 Hours Available', 'Emergency Response: Immediate'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <VideoBanner
        title="Contact Us"
        subtitle="Get in touch with our security experts"
        imageUrl="/banner.jpg"
      />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Contact Info Cards */}
          <section className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-card dark:bg-card/50 border border-border/50 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-foreground/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </section>

          {/* Contact Form and Map */}
          <section className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-foreground/70 text-lg">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="+92 300 0000000"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="bodyguard">Personal Bodyguards</option>
                    <option value="bouncers">Professional Bouncers</option>
                    <option value="protocol">Protocol Guards</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
1
                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-primary font-medium text-center">
                      Thank you! We'll contact you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Quick Contact */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-1000">
              <div>
                <h3 className="text-3xl font-bold text-balance mb-4">
                  Quick <span className="text-primary">Contact</span>
                </h3>
                <p className="text-foreground/70 text-lg">
                  For urgent inquiries, please call us directly. We're available
                  24/7 to address your security needs immediately.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+923445533787"
                  className="flex items-center gap-4 p-6 bg-card dark:bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Call Anytime</p>
                    <p className="text-lg font-bold text-primary">
                      +92 3445533787
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:mj162332@gmail.com"
                  className="flex items-center gap-4 p-6 bg-card dark:bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email Us</p>
                    <p className="text-lg font-bold text-primary">
                      mj162332@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-card dark:bg-card/50 border border-border/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">
                      Available 24/7
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      Emergency Response
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 rounded-xl p-6 space-y-3">
                <h4 className="font-bold text-foreground">
                  Frequently Asked Questions:
                </h4>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>• How quickly can you provide security personnel?</li>
                  <li>• Do you offer customized security solutions?</li>
                  <li>• What is your response time for emergencies?</li>
                  <li>• Can we hire personnel on short notice?</li>
                </ul>
              </div>
            </div>
          </section>
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
        title="Contact Our Professional Team Today"
        autoplay
      />

      <Footer />
    </div>
  )
}
