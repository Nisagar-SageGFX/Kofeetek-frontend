import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, ChevronRight } from 'lucide-react'

const sections = [
  {
    id: 'introduction',
    num: '1',
    title: 'Introduction',
    content: (
      <p>
        Welcome to KofeeTek. KofeeTek ("we", "us", "our", or "Company") is engaged in the supply,
        installation, and servicing of coffee vending machines, tea vending machines, beverage vending
        machines, premix products, consumables, and related maintenance services across India.
        These Terms of Service ("Terms") govern your access to and use of our website, products, and
        services, whether you are an individual customer, a business, an office, an institution, or any
        other entity purchasing or using our offerings. Please read these Terms carefully before placing
        an order or using our services.
      </p>
    ),
  },
  {
    id: 'acceptance',
    num: '2',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>By accessing our website, placing an order, signing a service agreement, or otherwise using
        any product or service offered by KofeeTek, you agree to be bound by these Terms and our
        Privacy Policy. If you do not agree with any part of these Terms, please do not use our website
        or services.</p>
        <p>You confirm that you are at least 18 years of age, or are placing an order on behalf of a
        legally registered business or organisation with the authority to accept these Terms.</p>
        <p>We may update these Terms from time to time. Continued use of our website or services after
        such updates constitutes your acceptance of the revised Terms.</p>
      </>
    ),
  },
  {
    id: 'products-services',
    num: '3',
    title: 'Products and Services',
    content: (
      <>
        <p>KofeeTek offers the following products and services:</p>
        <ul>
          {['Coffee vending machines','Tea vending machines','Beverage vending machines',
            'Premix products and consumables','Machine installation services',
            'Annual Maintenance Contracts (AMC)','Repair and maintenance services'].map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>Product images, specifications, and descriptions on our website are for general reference
        only. Actual machine appearance, dimensions, or features may vary slightly. We reserve the right
        to modify, discontinue, or update any product or service at any time without prior notice.</p>
      </>
    ),
  },
  {
    id: 'orders-payments',
    num: '4',
    title: 'Orders and Payments',
    content: (
      <>
        <p>All orders placed through our website, over phone, or via email are subject to acceptance
        and confirmation by KofeeTek.</p>
        <ul>
          {[
            'Prices listed are subject to change without prior notice and may vary based on location, quantity, and applicable taxes (including GST).',
            'Full or partial advance payment may be required before dispatch or installation, depending on the order value and terms agreed at the time of sale.',
            'Payment can be made through the modes specified by KofeeTek, including bank transfer, UPI, cheque, or other approved methods.',
            'We reserve the right to cancel or refuse any order due to stock unavailability, pricing errors, suspected fraud, or any other valid business reason.',
            "It is the customer's responsibility to provide accurate billing, shipping, and contact details for smooth order processing.",
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
      </>
    ),
  },
  {
    id: 'shipping-delivery',
    num: '5',
    title: 'Shipping and Delivery',
    content: (
      <ul>
        {[
          'Orders within Chennai and nearby areas are generally dispatched and delivered within 1 business day, subject to stock availability.',
          'Deliveries outside Chennai may require additional time depending on the destination and the logistics partner handling the shipment.',
          'Delivery timelines provided at the time of order are estimates only and may vary due to weather, transport delays, courier constraints, or other circumstances beyond our control.',
          'Risk in the goods passes to the customer upon delivery. Customers are encouraged to inspect the machine at the time of delivery and report any visible transit damage immediately.',
        ].map(i => <li key={i}>{i}</li>)}
      </ul>
    ),
  },
  {
    id: 'installation',
    num: '6',
    title: 'Installation Services',
    content: (
      <>
        <p>Where installation is included as part of the order or purchased separately, KofeeTek will
        schedule installation at the customer's premises within a mutually agreed timeframe.</p>
        <ul>
          {[
            "The customer must ensure that the installation site has adequate electrical power supply, water connection (where applicable), and space as per the machine's technical requirements.",
            'Installation carried out by unauthorised third parties may void the applicable warranty.',
            "Any additional civil, electrical, or plumbing work required at the site is the customer's responsibility and is not included in KofeeTek's installation service unless explicitly agreed in writing.",
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
      </>
    ),
  },
  {
    id: 'warranty',
    num: '7',
    title: 'Warranty Policy',
    content: (
      <>
        <p>KofeeTek machines come with a standard warranty as specified in the invoice or product
        documentation at the time of purchase.</p>
        <h3>What the Warranty Covers</h3>
        <ul>
          {['Original Equipment Manufacturer (OEM) spare parts.',
            'Service visits required to rectify manufacturing or functional defects covered under warranty.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
        <h3>What the Warranty Does Not Cover</h3>
        <ul>
          {[
            'Electrical failures caused by external power issues or voltage fluctuations.',
            'Physical damage, misuse, or negligence.',
            'Improper installation carried out by third parties not authorised by KofeeTek.',
            'Water damage or damage due to environmental factors.',
            'Accidents or unauthorised repairs/modifications carried out by anyone other than KofeeTek-approved personnel.',
            'Consumables and wearable parts (such as filters, seals, and gaskets), unless specifically mentioned as covered.',
            'Damage caused by rodents, including rat bites, chewing of wires, or any other pest-related damage.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
        <p>Any attempt to repair, modify, or open the machine by unauthorised personnel will void the
        warranty with immediate effect.</p>
      </>
    ),
  },
  {
    id: 'service-maintenance',
    num: '8',
    title: 'Service & Maintenance Policy',
    content: (
      <>
        <p>KofeeTek offers Annual Maintenance Contracts (AMC) as well as on-demand repair and
        maintenance services. Our standard service claim process is as follows:</p>
        <ul>
          {[
            'The customer contacts KofeeTek support with the relevant invoice or order details.',
            'Our support team verifies the request within 1 working day.',
            'A service ticket is created for tracking the request.',
            'A service engineer is assigned within 2 working days.',
            "The engineer schedules an on-site visit based on availability and the customer's convenience.",
            'If the issue cannot be resolved on-site, the machine may need to be transported to our service centre for further diagnosis and repair.',
            'Customers are responsible for securely packing the machine prior to transportation to avoid damage in transit.',
            'KofeeTek does not provide a temporary replacement machine while repairs are in progress.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
        <h3>Service Charges</h3>
        <ul>
          {[
            'Service visits during the active warranty period are free of charge.',
            'Out-of-warranty service visits are chargeable as per our applicable service rates.',
            'Spare parts and consumables used during service are charged separately unless covered under warranty.',
            'Transportation charges for out-of-warranty machines sent to or from the service centre are borne by the customer.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
      </>
    ),
  },
  {
    id: 'replacement-return',
    num: '9',
    title: 'Replacement & Return Policy',
    content: (
      <ul>
        {[
          'No refunds are provided under any circumstances.',
          'Replacement of a product is offered only where there is a verified manufacturing defect or the product arrives visibly damaged.',
          'Any such issue must be reported to KofeeTek within the specified claim period from the date of delivery, along with supporting photographs or video evidence.',
          'KofeeTek reserves the right to inspect the product, either remotely or on-site, before approving any replacement.',
          'Replacement requests that do not meet the above conditions, or are reported after the claim period, will not be entertained.',
        ].map(i => <li key={i}>{i}</li>)}
      </ul>
    ),
  },
  {
    id: 'cancellation',
    num: '10',
    title: 'Cancellation Policy',
    content: (
      <ul>
        {[
          'Orders may be cancelled by the customer before dispatch by contacting KofeeTek support; cancellations after dispatch are subject to applicable logistics and handling costs.',
          'KofeeTek reserves the right to cancel any order due to non-availability of stock, pricing errors, incomplete payment, or inability to verify customer/business details.',
          'Any advance payment made for a cancelled order will be processed as per the specific cancellation terms agreed at the time of booking.',
          'AMC and service contracts, once activated, may be cancelled only as per the terms specified in the respective service agreement.',
        ].map(i => <li key={i}>{i}</li>)}
      </ul>
    ),
  },
  {
    id: 'customer-responsibilities',
    num: '11',
    title: 'Customer Responsibilities',
    content: (
      <>
        <p>To ensure smooth service and safe operation of the machines, customers agree to:</p>
        <ul>
          {[
            'Provide accurate business, contact, and billing information.',
            'Use the machines strictly as per the instructions and guidelines provided by KofeeTek.',
            'Not attempt any unauthorised repair, modification, or tampering of the machine.',
            'Ensure adequate power supply, water connection, and a suitable operating environment for the machine.',
            'Report any faults, damage, or malfunction promptly to KofeeTek support.',
            'Make timely payments for services, spare parts, and AMC renewals as applicable.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
      </>
    ),
  },
  {
    id: 'liability',
    num: '12',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>KofeeTek strives to provide reliable products and services, however, to the fullest extent
        permitted by law:</p>
        <ul>
          {[
            'We do not guarantee that our products or services will be uninterrupted, error-free, or fully compatible with every business environment.',
            'KofeeTek shall not be liable for any indirect, incidental, special, or consequential damages, including loss of business, revenue, or data, arising from the use of, or inability to use, our products or services.',
            'Our total liability, in any circumstance, shall not exceed the amount actually paid by the customer for the specific product or service giving rise to the claim.',
            'KofeeTek is not responsible for delays or failures caused by circumstances beyond our reasonable control, including but not limited to natural calamities, strikes, power outages, or third-party logistics delays.',
          ].map(i => <li key={i}>{i}</li>)}
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    num: '13',
    title: 'Intellectual Property',
    content: (
      <>
        <p>All content on the KofeeTek website, including logos, trademarks, product designs, text,
        graphics, and images, is the property of KofeeTek or its licensors and is protected under
        applicable intellectual property laws.</p>
        <p>You may not reproduce, copy, distribute, or otherwise use any content from our website for
        commercial purposes without our prior written consent.</p>
      </>
    ),
  },
  {
    id: 'privacy',
    num: '14',
    title: 'Privacy',
    content: (
      <p>Any personal or business information you share with KofeeTek, including through our website,
      during order placement, or in the course of service delivery, is handled in accordance with our{' '}
      <Link to="/privacy-policy" className="text-brand-gold hover:underline font-medium">Privacy Policy</Link>.
      By using our services, you consent to the collection and use of such information as described therein.</p>
    ),
  },
  {
    id: 'governing-law',
    num: '15',
    title: 'Governing Law (India)',
    content: (
      <p>These Terms shall be governed by and construed in accordance with the laws of India. Any
      disputes arising out of or in connection with these Terms or your use of KofeeTek's products or
      services shall be subject to the exclusive jurisdiction of the competent courts located in
      Chennai, Tamil Nadu.</p>
    ),
  },
  {
    id: 'changes',
    num: '16',
    title: 'Changes to Terms',
    content: (
      <p>KofeeTek reserves the right to update, modify, or replace these Terms at any time, at its
      sole discretion. Any changes will be posted on this page along with the updated "Last Updated"
      date. It is the customer's responsibility to periodically review these Terms. Continued use of
      our website or services after changes are posted constitutes acceptance of the revised Terms.</p>
    ),
  },
  {
    id: 'contact',
    num: '17',
    title: 'Contact Information',
    content: (
      <>
        <p>If you have any questions regarding these Terms of Service, please contact us at:</p>
        <div className="mt-4 p-5 bg-brand-beige rounded-xl border border-brand-gold/20">
          <p className="font-semibold text-brand-brownDark mb-1">KofeeTek Customer Support</p>
          <p>Email: <a href="mailto:info@kofeetek.in" className="text-brand-gold hover:underline">info@kofeetek.in</a></p>
          <p>Phone: <a href="tel:+919962242499" className="text-brand-gold hover:underline">+91 99622 42499</a></p>
        </div>
      </>
    ),
  },
]

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | KofeeTek – Coffee & Tea Vending Machines</title>
        <meta name="description" content="Read KofeeTek's Terms of Service covering orders, payments, warranty, installation, service, cancellation, and customer responsibilities for vending machine products and services." />
        <meta name="keywords" content="KofeeTek terms of service, vending machine terms, coffee machine warranty, AMC terms, KofeeTek policy" />
        <link rel="canonical" href="https://www.kofeetek.in/terms-of-service" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-brand-dark to-brand-brownDark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle,rgba(245,184,0,.8) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-brand-gold/60 text-xs font-medium uppercase tracking-widest mb-4">
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Terms of Service</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-xl flex items-center justify-center shrink-0">
                <FileText size={22} className="text-brand-gold" />
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Terms of Service
                </h1>
                <p className="text-white/40 text-sm mt-1">Last Updated: July 2026</p>
              </div>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              These terms govern your use of KofeeTek's website, products, and services.
              Please read them carefully before placing an order or using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Sticky TOC (desktop) ── */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-brand-brown/40 mb-3">Contents</p>
                <nav className="space-y-1">
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`}
                      className="flex items-center gap-2 text-xs text-brand-brown/55 hover:text-brand-gold
                                 transition-colors py-1 border-l-2 border-transparent hover:border-brand-gold pl-3">
                      <span className="text-brand-gold/50 font-mono">{s.num}.</span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ── Main content ── */}
            <motion.article
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="flex-1 min-w-0"
            >
              <style>{`
                .tos-section p { color: rgba(74,44,29,0.75); font-size: 15px; line-height: 1.85; margin-bottom: 12px; }
                .tos-section ul { margin: 12px 0 16px 0; space-y: 8px; }
                .tos-section ul li { position: relative; padding-left: 20px; color: rgba(74,44,29,0.75); font-size: 14.5px; line-height: 1.75; margin-bottom: 8px; }
                .tos-section ul li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; background: #F5B800; }
                .tos-section h3 { font-family: 'Playfair Display', Georgia, serif; font-size: 15px; font-weight: 700; color: #2E1A10; margin: 20px 0 10px; }
                .tos-section a { color: #F5B800; }
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
                  <div className="flex items-start gap-4 mb-4">
                    <span className="w-8 h-8 bg-brand-gold text-brand-brownDark text-xs font-bold rounded-lg
                                     flex items-center justify-center shrink-0 mt-0.5 font-mono">
                      {s.num}
                    </span>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-brand-brownDark pt-1">
                      {s.title}
                    </h2>
                  </div>
                  <div className="pl-12 tos-section">{s.content}</div>
                </motion.div>
              ))}
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-12 bg-brand-cream border-t border-brand-beige">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-brand-brown/60 text-sm mb-4">Questions about our terms?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary text-sm">Contact Us</Link>
            <Link to="/privacy-policy" className="btn-outline text-sm">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </>
  )
}
