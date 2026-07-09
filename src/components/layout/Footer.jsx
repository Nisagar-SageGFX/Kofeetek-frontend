import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin, Youtube, HeadphonesIcon } from 'lucide-react'

const machines = [
  { label: 'Coffee Vending Machines', to: '/products' },
  { label: 'Tea Vending Machines',    to: '/products' },
  { label: 'Combo Machines',          to: '/products' },
  { label: 'Bean-to-Cup Machines',    to: '/products' },
  { label: 'Rental Solutions',        to: '/rental'   },
]

const quickLinks = [
  { label: 'About KofeeTek',      to: '/about'      },
  // { label: 'Industries We Serve', to: '/industries' },
  // { label: 'Our Clients',         to: '/clients'    },
  { label: 'Blog',                to: '/blog'       },
  { label: 'Teams',               to: '/teams'      },
  { label: 'Terms of Service',     to: '/terms-of-service' },
  // { label: 'Privacy Policy',       to: '/privacy-policy'  },
  { label: 'Contact Us',          to: '/contact'    },
]

const socialLinks = [
  { label: 'Facebook',  icon: Facebook,  href: 'https://www.facebook.com/share/1HM7fXvmjN/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/kofeetek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { label: 'LinkedIn',  icon: Linkedin,  href: 'https://www.linkedin.com/company/kofeetek/' },
  { label: 'YouTube',   icon: Youtube,   href: 'https://youtube.com/@kofeetek?si=L3i_cNalaBsYbXQh' },
]

const certifications = [
  { src: '/assets/logo/ISO.png',   alt: 'ISO Certified Company' },
  { src: '/assets/logo/Fssai.png', alt: 'FSSAI Certified'       },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/75">

      {/* ── CTA Banner ── */}
      <div className="bg-gradient-to-r from-brand-brown to-brand-brownLight py-10 sm:py-12 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
            Ready to Transform Your Workplace Beverage Experience?
          </h2>
          <p className="text-brand-gold/85 text-base sm:text-lg mb-6 sm:mb-8">
            Join 500+ companies across India trusting KofeeTek
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">Schedule Free Demo</Link>
            <a href="tel:+919962242499" className="btn-outline w-full sm:w-auto justify-center">Call Us Now</a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          MAIN FOOTER GRID
          Mobile  (<640px)  : 2 cols — Quick Links | Contact
          Tablet  (640–1023): 2×2 grid — Brand+Social (full row)
                                        Machines | Quick Links
                                        Contact (full row)
          Desktop (≥1024px) : 4 cols — Brand | Machines | Quick Links | Contact
      ════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">

        {/* ── Desktop grid (lg+): all 4 cols in one row ── */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-10">

          {/* Brand */}
          <BrandBlock />

          {/* Our Machines */}
          <div>
            <ColHeading>Our Machines</ColHeading>
            <LinkList items={machines} />
          </div>

          {/* Quick Links */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <LinkList items={quickLinks} />
          </div>

          {/* Contact */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ContactList />
          </div>
        </div>

        {/* ── Tablet grid (sm–lg): 2×2 clean layout ── */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-x-10 gap-y-10">

          {/* Row 1: Brand spans full width */}
          <div className="col-span-2">
            <BrandBlock tablet />
          </div>

          {/* Row 2 col 1: Our Machines */}
          <div>
            <ColHeading>Our Machines</ColHeading>
            <LinkList items={machines} />
          </div>

          {/* Row 2 col 2: Quick Links */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <LinkList items={quickLinks} />
          </div>

          {/* Row 3: Contact spans full width */}
          <div className="col-span-2">
            <ColHeading>Contact</ColHeading>
            {/* 2-col contact layout on tablet */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              <ContactList twoCol />
            </div>
          </div>
        </div>

        {/* ── Mobile grid (<sm): Quick Links | Contact side by side ── */}
        <div className="grid grid-cols-2 gap-x-6 sm:hidden">

          {/* Brand: full width */}
          <div className="col-span-2 mb-8">
            <BrandBlock mobile />
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <ColHeading>Quick Links</ColHeading>
            <LinkList items={quickLinks} small />
          </div>

          {/* Contact */}
          <div className="text-left">
            <ColHeading>Contact</ColHeading>
            <ContactList small />
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/6 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center
                        justify-between gap-3 sm:gap-4 text-center text-[10px] sm:text-[11px] leading-relaxed text-white/30">
          <span className="max-w-md sm:max-w-none">
            © {new Date().getFullYear()} KofeeTek Beverage Pvt Ltd. All rights reserved. ISO & FSSAI Registered.
          </span>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5">
            <Link to="/privacy-policy"   className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
            {/* <Link to="/blog"             className="hover:text-brand-gold transition-colors">Sitemap</Link> */}
          </div>
        </div>
      </div>

    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────
   Sub-components — keeps the JSX above clean
───────────────────────────────────────────────────────────── */

function ColHeading({ children }) {
  return (
    <h3 className="text-white font-semibold mb-4 text-[10px] sm:text-[11px] tracking-[3px] uppercase">
      {children}
    </h3>
  )
}

function LinkList({ items, small }) {
  return (
    <ul className="space-y-2.5 sm:space-y-3">
      {items.map(item => (
        <li key={item.label}>
          <Link
            to={item.to}
            className={`${small ? 'text-[11px]' : 'text-xs sm:text-sm'} leading-relaxed hover:text-brand-gold transition-colors duration-200`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ContactList({ small, twoCol }) {
  const liClass = `flex flex-row items-start gap-2 ${small ? 'text-[11px]' : 'text-xs sm:text-sm'}`
  const iconSize = small ? 13 : 15

  const items = [
    <li key="support" className={liClass}>
      <HeadphonesIcon size={iconSize} className="text-brand-gold shrink-0 mt-0.5" />
      <div className="flex flex-col items-start gap-0.5">
        <span className="text-white/80 text-[10px] uppercase tracking-wide">Customer Support</span>
        <a href="tel:+919962242499" className="hover:text-brand-gold transition-colors leading-relaxed">
          +91 99622 42499
        </a>
      </div>
    </li>,

    <li key="phones" className={liClass}>
      <Phone size={iconSize} className="text-brand-gold shrink-0 mt-0.5" />
      <div className="flex flex-col items-start gap-0.5">
        <a href="tel:+919789728605" className="hover:text-brand-gold transition-colors leading-relaxed">+91 97897 28605</a>
        <a href="tel:+918072847972" className="hover:text-brand-gold transition-colors leading-relaxed">+91 80728 47972</a>
      </div>
    </li>,

    <li key="email" className={liClass}>
      <Mail size={iconSize} className="text-brand-gold shrink-0 mt-0.5" />
      <a href="mailto:info@kofeetek.in" className="hover:text-brand-gold transition-colors break-all leading-relaxed">
        info@kofeetek.in
      </a>
    </li>,

    <li key="website" className={liClass}>
      <Globe size={iconSize} className="text-brand-gold shrink-0 mt-0.5" />
      <a href="https://www.kofeetek.in" className="hover:text-brand-gold transition-colors leading-relaxed">
        www.kofeetek.in
      </a>
    </li>,

    <li key="address" className={liClass}>
      <MapPin size={iconSize} className="text-brand-gold shrink-0 mt-0.5" />
      <span className="text-white/70 leading-relaxed">
        Plot No 10, C-Block,<br />
        G3, Kalpathru Garden,<br />
        Priya Nagar, Urapakkam,<br />
        Chennai – 603210
      </span>
    </li>,
  ]

  if (twoCol) {
    // On tablet: split contact items into 2 columns of the parent grid
    return (
      <>
        <ul className="space-y-3.5 flex flex-col">{items.slice(0, 3)}</ul>
        <ul className="space-y-3.5 flex flex-col">{items.slice(3)}</ul>
      </>
    )
  }

  return <ul className="space-y-3.5 flex flex-col">{items}</ul>
}

function BrandBlock({ tablet, mobile }) {
  return (
    <div className={`flex flex-col ${tablet ? 'items-start' : mobile ? 'items-center' : 'items-start'}`}>
      <Link to="/" className="inline-block mb-4">
        <img
          src="/assets/logo/Kofeetek_logo.PNG"
          alt="KofeeTek"
          className="h-10 sm:h-12 object-contain"
        />
      </Link>

      <p className={`text-xs sm:text-sm leading-relaxed mb-5 text-white/50 ${mobile ? 'text-center max-w-[230px]' : 'max-w-sm'}`}>
        India's premier B2B vending machine manufacturer. ISO registered.
        FSSAI certified. Trusted by 500+ corporates since 2017.
      </p>

      {/* Social icons */}
      <div className="flex gap-2.5 mb-5">
        {socialLinks.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 bg-white/6 hover:bg-brand-gold rounded-lg flex items-center
                       justify-center transition-all duration-200 hover:text-brand-brownDark
                       hover:scale-110 hover:shadow-lg hover:shadow-brand-gold/20"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* Certification logos */}
      <div className={`flex items-center gap-4 ${mobile ? 'justify-center' : 'justify-start'}`}>
        {certifications.map(({ src, alt }) => (
          <div
            key={alt}
            className="group cursor-default transition-all duration-300
                       hover:scale-110 hover:drop-shadow-[0_4px_12px_rgba(245,184,0,0.25)]"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-12 sm:h-20 w-auto object-contain opacity-60 group-hover:opacity-100
                         transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
