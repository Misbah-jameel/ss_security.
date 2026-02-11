'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Weapons from '@/components/weapons'
import PrideSection from '@/components/pride-section'
import ImageCarousel from '@/components/image-carousel'
import WhyChooseUs from '@/components/why-choose-us'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Weapons />
      <PrideSection />
      <ImageCarousel />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}
