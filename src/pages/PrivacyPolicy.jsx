import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ChevronRight } from 'lucide-react'

const sections = [
  {
    id: 'information-we-collect',
    num: '1',
    title: 'Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information when you use our Site:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, billing and shipping address, and other details you provide when creating an account, placing an order, or contacting us.</li>
          <li><strong>Payment Information:</strong> Payment details are processed by our third-party payment gateway providers. We do not store your full card or bank details on our servers.</li>
          <li><strong>Order Information:</strong> Products purchased, order history, and preferences.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device information, and pages visited, collected automatically through cookies and similar technologies.</li>
          <li><strong>Communications:</strong> Any information you provide when you contact our customer support or subscribe to our newsletter.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    num: '2',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          {[
            'Process and fulfill your orders, including shipping and delivery.',
            'Create and manage your account.',
            'Respond to customer service requests and support needs.',
            'Send order confirmations, updates, and transactional communications.',
            'Send promotional emails and marketing communications, where you have opted in.',
            'Improve our Site, products, and services.',
            'Detect and prevent fraud, abuse, and security incidents.',
            'Comply with legal obligations.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    num: '3',
    title: 'Cookies and Tracking Technologies',
    content: (
      <p>Our Site uses cookies and similar tracking technologies to enhance your browsing experience,
      analyze site traffic, and understand where our visitors come from. You can choose to disable
      cookies through your browser settings; however, this may affect the functionality of the Site.</p>
    ),
  },
  {
    id: 'sharing',
    num: '4',
    title: 'Sharing of Information',
    content: (
      <>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third parties who help us operate our business, such as payment processors, shipping and logistics partners, and IT service providers.</li>
          <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process, or to protect the rights, property, or safety of Kofeetek, our customers, or others.</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-security',
    num: '5',
    title: 'Data Security',
    content: (
      <p>We implement reasonable technical and organizational measures to protect your personal
      information from unauthorized access, alteration, disclosure, or destruction. However, no
      method of transmission over the internet or electronic storage is completely secure, and we
      cannot guarantee absolute security.</p>
    ),
  },
  {
    id: 'data-retention',
    num: '6',
    title: 'Data Retention',
    content: (
      <p>We retain your personal information for as long as necessary to fulfill the purposes described
      in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
    ),
  },
  {
    id: 'your-rights',
    num: '7',
    title: 'Your Rights and Choices',
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          {[
            'Access the personal information we hold about you.',
            'Request correction of inaccurate or incomplete information.',
            'Request deletion of your personal information.',
            'Opt out of receiving marketing communications at any time by using the unsubscribe link in our emails or contacting us directly.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
        <p>To exercise any of these rights, please contact us at{' '}
          <a href="mailto:info@kofeetek.in" className="text-brand-gold hover:underline">info@kofeetek.in</a>.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    num: '8',
    title: 'Third-Party Links',
    content: (
      <p>Our Site may contain links to third-party websites. We are not responsible for the privacy
      practices or content of these external sites. We encourage you to review the privacy policies
      of any third-party sites you visit.</p>
    ),
  },
  {
    id: 'childrens-privacy',
    num: '9',
    title: "Children's Privacy",
    content: (
      <p>Our Site is not intended for children under the age of 18. We do not knowingly collect
      personal information from children. If you believe we have inadvertently collected such
      information, please contact us so we can delete it.</p>
    ),
  },
  {
    id: 'policy-changes',
    num: '10',
    title: 'Changes to This Privacy Policy',
    content: (
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or
      for legal, operational, or regulatory reasons. The updated policy will be posted on this page
      with a revised effective date.</p>
    ),
  },
  {
    id: 'contact',
    num: '11',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices,
        please contact us at:</p>
        <div className="mt-4 p-5 bg-brand-beige rounded-xl border border-brand-gold/20">
          <p className="font-semibold text-brand-brownDark mb-2">Kofeetek</p>
          <p>Website:{' '}
            <a href="https://www.kofeetek.in" className="text-brand-gold hover:underline">kofeetek.in</a>
          </p>
          <p>Email:{' '}
            <a href="mailto:info@kofeetek.in" className="text-brand-gold hover:underline">info@kofeetek.in</a>
          </p>
        </div>
      </>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | KofeeTek – Coffee & Tea Vending Machines Chennai</title>
        <meta name="description" content="KofeeTek's Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website, products, and vending machine services." />
        <meta name="keywords" content="KofeeTek privacy policy, data protection, personal information, cookie policy, vending machine company privacy" />
        <link rel="canonical" href="https://www.kofeetek.in/privacy-policy" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-brand-dark to-brand-brownDark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle,rgba(245,184,0,.8) 1px,transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-brand-gold/60 text-xs font-medium uppercase tracking-widest mb-5">
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Privacy Policy</span>
            </div>

            {/* Title row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-xl flex items-center justify-center shrink-0">
                <Shield size={22} className="text-brand-gold" />
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Privacy Policy
                </h1>
                <p className="text-white/40 text-sm mt-1">Effective Date: July 9, 2026</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mt-5">
              Welcome to <span className="text-brand-gold font-medium">kofeetek.in</span>. We respect
              your privacy and are committed to protecting the personal information you share with us.
              This policy explains what we collect, how we use it, and the choices you have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Sticky TOC — desktop only ── */}
            <aside className="hidden lg:block w-52 shrink-0">
              <div className="sticky top-24">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-brand-brown/40 mb-3">
                  Contents
                </p>
                <nav className="space-y-0.5">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-2 text-[11px] text-brand-brown/55 hover:text-brand-gold
                                 transition-colors py-1.5 border-l-2 border-transparent hover:border-brand-gold pl-3"
                    >
                      <span className="text-brand-gold/50 font-mono w-4 shrink-0">{s.num}.</span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ── Main article ── */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 min-w-0"
            >
              <style>{`
                .pp-section p {
                  color: rgba(74,44,29,0.75);
                  font-size: 15px;
                  line-height: 1.85;
                  margin-bottom: 12px;
                }
                .pp-section ul {
                  margin: 12px 0 16px 0;
                }
                .pp-section ul li {
                  position: relative;
                  padding-left: 20px;
                  color: rgba(74,44,29,0.75);
                  font-size: 14.5px;
                  line-height: 1.75;
                  margin-bottom: 10px;
                }
                .pp-section ul li::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 10px;
                  width: 6px;
                  height: 6px;
                  border-radius: 50%;
                  background: #F5B800;
                  flex-shrink: 0;
                }
                .pp-section strong {
                  color: #2E1A10;
                  font-weight: 600;
                }
                .pp-section a {
                  color: #F5B800;
                  text-decoration: underline;
                  text-underline-offset: 2px;
                }
              `}</style>

              {sections.map((s, i) => (
                <motion.div
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="mb-10 pb-10 border-b border-brand-beige last:border-0 last:mb-0 last:pb-0"
                >
                  {/* Section header */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="w-8 h-8 bg-brand-gold text-brand-brownDark text-xs font-bold
                                     rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-mono">
                      {s.num}
                    </span>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-brand-brownDark pt-1">
                      {s.title}
                    </h2>
                  </div>

                  {/* Section body */}
                  <div className="pl-12 pp-section">
                    {s.content}
                  </div>
                </motion.div>
              ))}
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-12 bg-brand-cream border-t border-brand-beige">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-brand-brown/55 text-sm mb-4">
            Questions about your data or our privacy practices?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary text-sm">Contact Us</Link>
            <Link to="/terms-of-service" className="btn-outline text-sm">Terms of Service</Link>
          </div>
        </div>
      </section>
    </>
  )
}
