import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail } from 'lucide-react'

/* ─────────────────────────────────────────────
   Replace placeholder data with real names,
   roles, images, and social links later.
───────────────────────────────────────────── */
const teamMembers = [
  { name: 'Rajesh Kumar',       role: 'Founder & CEO',            image: 'https://placehold.co/400x400/2E1A10/F5B800?text=RK', linkedin: '#', email: '#' },
  { name: 'Priya Venkataraman', role: 'Chief Operations Officer',  image: 'https://placehold.co/400x400/4A2C1D/F5B800?text=PV', linkedin: '#', email: '#' },
  { name: 'Suresh Babu',        role: 'Head of Engineering',       image: 'https://placehold.co/400x400/2E1A10/F5B800?text=SB', linkedin: '#', email: '#' },
  { name: 'Anitha Rajan',       role: 'Sales Director',            image: 'https://placehold.co/400x400/4A2C1D/F5B800?text=AR', linkedin: '#', email: '#' },
  { name: 'Mohammed Farhan',    role: 'Service Manager',           image: 'https://placehold.co/400x400/2E1A10/F5B800?text=MF', linkedin: '#', email: '#' },
  { name: 'Kavitha Sundaram',   role: 'Marketing Lead',            image: 'https://placehold.co/400x400/4A2C1D/F5B800?text=KS', linkedin: '#', email: '#' },
  { name: 'Dr. Srinivasan',     role: 'Quality Assurance Head',    image: 'https://placehold.co/400x400/2E1A10/F5B800?text=DS', linkedin: '#', email: '#' },
  { name: 'Deepa Krishnan',     role: 'Customer Success Manager',  image: 'https://placehold.co/400x400/4A2C1D/F5B800?text=DK', linkedin: '#', email: '#' },
]

function TeamCard({ member, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 4) * 0.1, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-brand-beige
                 shadow-sm hover:shadow-xl hover:shadow-brand-brown/10
                 hover:-translate-y-2 transition-all duration-400 ease-out"
    >
      {/* Gold accent line on top — grows on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-beige
                      group-hover:bg-brand-gold transition-colors duration-300" />

      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-brand-cream">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500
                     group-hover:scale-105"
        />
        {/* Overlay on hover with social links */}
        <div className="absolute inset-0 bg-brand-brownDark/70 opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 flex items-center justify-center gap-4">
          {member.linkedin !== '#' && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="w-10 h-10 bg-white/15 hover:bg-brand-gold hover:text-brand-brownDark
                         text-white rounded-full flex items-center justify-center
                         transition-colors duration-200 backdrop-blur-sm"
            >
              <Linkedin size={18} />
            </a>
          )}
          {member.email !== '#' && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="w-10 h-10 bg-white/15 hover:bg-brand-gold hover:text-brand-brownDark
                         text-white rounded-full flex items-center justify-center
                         transition-colors duration-200 backdrop-blur-sm"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4 text-center">
        <h3 className="font-display font-bold text-brand-brownDark text-base leading-snug mb-1
                       group-hover:text-brand-gold transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-brand-brown/55 text-xs font-medium leading-relaxed">
          {member.role}
        </p>
      </div>
    </motion.div>
  )
}

export default function Teams() {
  return (
    <>
      <Helmet>
        <title>Our Team | KofeeTek – The People Behind The Brews</title>
        <meta name="description" content="Meet the KofeeTek team — passionate professionals dedicated to delivering the best workplace coffee and beverage experience across South India." />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-brand-dark to-brand-brownDark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Our People</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Team Behind <span className="text-brand-gold">The Brews</span>
            </h1>
            <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Meet the passionate professionals who make KofeeTek the most trusted vending machine partner across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-brand-gold py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-2">
          {[
            ['500+', 'Machines Served'],
            ['50+',  'Team Members'],
            ['9+',   'Years Experience'],
            ['24/7', 'Support'],
          ].map(([val, label]) => (
            <div key={label} className="flex items-center gap-2 text-brand-brownDark">
              <span className="font-display font-bold text-lg sm:text-xl">{val}</span>
              <span className="text-xs sm:text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Team grid */}
      <section className="py-14 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label">Meet The Team</span>
            <h2 className="section-heading">People Who Power KofeeTek</h2>
            <p className="section-subheading mx-auto text-center">
              Dedicated, skilled, and coffee-obsessed — our team works every day to deliver excellence.
            </p>
          </div>

          {/* Cards:
              mobile  → 1 col
              sm/tablet → 2 cols
              md → 3 cols
              lg → 4 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* Join us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 sm:mt-20 bg-white rounded-2xl border border-brand-beige shadow-sm
                       p-8 sm:p-12 text-center"
          >
            <div className="w-14 h-14 bg-brand-gold/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <span className="text-2xl">☕</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-brownDark mb-3">
              Want to Join Our Team?
            </h3>
            <p className="text-brand-brown/60 text-sm sm:text-base max-w-lg mx-auto mb-7 leading-relaxed">
              We're always looking for passionate people who love great coffee and great service.
              Reach out and let's brew something together.
            </p>
            <a
              href="mailto:info@kofeetek.in"
              className="btn-primary inline-flex"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
