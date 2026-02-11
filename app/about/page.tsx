'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import VideoBanner from '@/components/video-banner'
import HorizontalImageSlider from '@/components/horizontal-image-slider'
import Image from 'next/image'
import { Award, Users, Zap, Target } from 'lucide-react'

const aboutStats = [
  {
    icon: Users,
    number: '500+',
    label: 'Trained Personnel',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
  },
  {
    icon: Target,
    number: '1000+',
    label: 'Satisfied Clients',
  },
  {
    icon: Zap,
    number: '24/7',
    label: 'Available',
  },
]

const values = [
  {
    title: 'Professional Excellence',
    description:
      'We maintain the highest standards of professionalism in all our operations, ensuring superior service delivery.',
  },
  {
    title: 'Trust & Integrity',
    description:
      'Your safety is our priority. We operate with complete transparency and unwavering commitment to your security.',
  },
  {
    title: 'Expertise & Training',
    description:
      'All our personnel are professionally trained military officers with years of tactical and security expertise.',
  },
  {
    title: '24/7 Availability',
    description:
      'We are always ready to respond to your security needs at any time, anywhere in Karachi.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <VideoBanner
        title="About SS Security"
        subtitle="Professional Security Services Excellence Since 2009"
        imageUrl="/banner.jpg"
      />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* About Content */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                Who We <span className="text-primary">Are</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We take this opportunity in extending best wishes from S.S Security.We are a progressive security group , comprising of core professionals. In a world where changes is the only constant factor and the risks increase daily , you can rely on us to make your security our top priority.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
               S.S Security is a professional company organized ,trained and equipped to undertake any size and type of security managment task within shortest possible time .Our mission is to establish and maintain effective security service without compormising on quality and effiency, in a very competitive package.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
               Whether you require discreet executive protection for buisness ,nor a security system for home or office ,S.S Security can provide you all the solutions. We invite you to explore options with us and we can offer you assistance to meet your urgent security needs.
              </p>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-4 duration-1000">
              <Image
                src="/slid_1.jpeg"
                alt="SS Security Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </section>

          {/* Stats */}
          <section className="grid md:grid-cols-4 gap-6">
            {aboutStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-card dark:bg-card/50 border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              )
            })}
          </section>

          {/* Values */}
          <section className="space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                What drives us to be the best in the security industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card dark:bg-card/50 border border-border/50 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Experienced professionals dedicated to your security
              </p>
            </div>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      name: "Chief Faiz",
      role: "Chief Security Officer",
      image: "/major.jpeg",
    },
    {
      name: "Captain Sulaiman",
      role: "Operations Manager",
      image: "/salman.jpeg",
    },
    {
      name: "Lt. Director",
      role: "Training Director",
      image: "/director.jpeg",
    },
  ].map((member, index) => (
    <div
      key={index}
      className="bg-card dark:bg-card/50 border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="relative h-64 bg-black flex items-center justify-center">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground">
          {member.name}
        </h3>
        <p className="text-primary font-semibold">
          {member.role}
        </p>
      </div>
    </div>
  ))}
</div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 rounded-2xl p-12 text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to Experience Premium Security?
            </h3>
            <p className="text-lg text-foreground/70">
              Contact us today for a consultation with our security experts.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Get in Touch
            </a>
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
        title="15+ Years of Excellence in Security"
        autoplay
      />

      <Footer />
    </div>
  )
}
