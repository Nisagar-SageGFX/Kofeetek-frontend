import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { blogPosts } from './Blog'

/* ─────────────────────────────────────────────────────────────────────────────
   INTERNAL LINK MAP
   keyword (lowercase) → internal route
   Priority: longer phrases first so they match before shorter substrings
───────────────────────────────────────────────────────────────────────────── */
const KEYWORD_LINKS = [
  // Rental keywords → /rental
  { phrase: 'coffee vending machine rental service in chennai', to: '/rental' },
  { phrase: 'coffee vending machine rental in chennai',         to: '/rental' },
  { phrase: 'coffee vending machine on rental basis',           to: '/rental' },
  { phrase: 'coffee machine rental for office',                 to: '/rental' },
  { phrase: 'coffee machine for rental',                        to: '/rental' },
  { phrase: 'coffee machine rental',                            to: '/rental' },
  { phrase: 'vending machine rental',                           to: '/rental' },
  { phrase: 'rental service',                                   to: '/rental' },

  // Manufacturer / product keywords → /products
  { phrase: 'coffee vending machine manufacturers in chennai',  to: '/products' },
  { phrase: 'coffee maker machine manufacturers in chennai',    to: '/products' },
  { phrase: 'tea coffee vending machine manufacturers in chennai', to: '/products' },
  { phrase: 'coffee processing machine manufacturers in chennai',  to: '/products' },
  { phrase: 'filter coffee vending machine dealers in chennai', to: '/products' },
  { phrase: 'filter coffee machine dealers in chennai',         to: '/products' },
  { phrase: 'coffee vending machines dealers in chennai',       to: '/products' },
  { phrase: 'coffee vending machines for sale',                 to: '/products' },
  { phrase: 'best coffee vending machines',                     to: '/products' },
  { phrase: 'fresh milk coffee vending machine in chennai',     to: '/products' },
  { phrase: 'fresh milk coffee vending machine',                to: '/products' },
  { phrase: 'coffee vending machine price in chennai',          to: '/products' },
  { phrase: 'bean-to-cup machines',                             to: '/products' },
  { phrase: 'bean to cup machines',                             to: '/products' },
  { phrase: 'tea coffee vending machine in chennai',            to: '/products' },
  { phrase: 'tea coffee vending machine dealers in chennai',    to: '/products' },
  { phrase: 'tea coffee vending machine',                       to: '/products' },

  // Office / corporate → /contact  (lead gen)
  { phrase: 'coffee vending machine for office',                to: '/contact' },
  { phrase: 'coffee machine for office',                        to: '/contact' },

  // General machines in Chennai → /products
  { phrase: 'coffee vending machines in chennai',               to: '/products' },
  { phrase: 'coffee vending machine in chennai',                to: '/products' },
  { phrase: 'coffee vending machines',                           to: '/products' },
  { phrase: 'vending machine manufacturers in chennai',         to: '/products' },
]

/* ─────────────────────────────────────────────────────────────────────────────
   linkifyText
   Replaces keyword phrases in a plain-text string with <Link> components.
   Returns an array of strings / React elements.
───────────────────────────────────────────────────────────────────────────── */
function linkifyText(text) {
  if (!text || typeof text !== 'string') return [text]

  // Build a single regex alternating all phrases (longest first, case-insensitive)
  const escaped = KEYWORD_LINKS.map(k => k.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi')

  const parts = text.split(pattern)
  return parts.map((part, idx) => {
    if (!part) return null
    const lower = part.toLowerCase()
    const match = KEYWORD_LINKS.find(k => k.phrase === lower)
    if (match) {
      return (
        <Link
          key={idx}
          to={match.to}
          className="kft-keyword-link"
          title={`KofeeTek – ${part}`}
        >
          {part}
        </Link>
      )
    }
    return part
  })
}

/* ─────────────────────────────────────────────────────────────────────────────
   renderContent  – converts markdown-ish blocks to JSX, with keyword links
───────────────────────────────────────────────────────────────────────────── */
function renderContent(text) {
  return text.split('\n\n').map((block, i) => {
    const trimmed = block.trim()

    if (trimmed.startsWith('## ')) {
      const heading = trimmed.replace('## ', '')
      return (
        <h2 key={i} className="font-display text-xl font-bold text-brand-brownDark mt-8 mb-3">
          {heading}
        </h2>
      )
    }

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      return (
        <p key={i} className="font-semibold text-brand-brownDark mb-2">
          {trimmed.replace(/\*\*/g, '')}
        </p>
      )
    }

    if (trimmed.includes('\n') && trimmed.includes('- ')) {
      const lines = trimmed.split('\n').filter(l => l.trim().startsWith('-'))
      return (
        <ul key={i} className="space-y-1.5 my-4 ml-4">
          {lines.map((l, j) => (
            <li key={j} className="flex items-start gap-2 text-brand-brown/75 text-sm">
              <span className="text-brand-gold mt-0.5">•</span>
              <span>{linkifyText(l.slice(l.indexOf('-') + 1).trim())}</span>
            </li>
          ))}
        </ul>
      )
    }

    if (trimmed.includes('|')) {
      return (
        <div key={i} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            {trimmed.split('\n').filter(r => !r.includes('---')).map((row, j) => (
              <tr key={j} className={j === 0 ? 'bg-brand-brown text-white' : 'border-b border-brand-beige'}>
                {row.split('|').filter(c => c.trim()).map((cell, k) => (
                  j === 0
                    ? <th key={k} className="px-4 py-2 text-left text-xs font-semibold">{cell.trim()}</th>
                    : <td key={k} className="px-4 py-2 text-brand-brown/80 text-xs">{linkifyText(cell.trim())}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
      )
    }

    return (
      <p key={i} className="text-brand-brown/75 text-[15px] leading-[1.85] mb-4">
        {linkifyText(trimmed)}
      </p>
    )
  })
}

/* ─────────────────────────────────────────────────────────────────────────────
   Per-post SEO meta  (title / description optimised for target keywords)
───────────────────────────────────────────────────────────────────────────── */
const POST_SEO = {
  'coffee-vending-machine-benefits-corporate-offices-chennai': {
    metaTitle: 'Coffee Vending Machine Manufacturers in Chennai | KofeeTek',
    metaDesc:  'KofeeTek is the leading coffee vending machine manufacturer in Chennai. Get premium machines, wholesale prices & customised solutions for offices & corporates.',
  },
  'coffee-vending-machine-manufacturers-chennai': {
    metaTitle: 'Coffee Maker Machine Manufacturers in Chennai | KofeeTek',
    metaDesc:  'Looking for coffee maker machine manufacturers in Chennai? KofeeTek delivers smart, energy-efficient vending machines tailored for modern workplaces. Call now.',
  },
  'office-coffee-machine-rental-bangalore': {
    metaTitle: 'Coffee Vending Machine Rental in Chennai | KofeeTek Rental Service',
    metaDesc:  'Rent a coffee vending machine in Chennai for your office at competitive prices. KofeeTek offers flexible coffee machine rental plans with free installation & service.',
  },
  'filter-coffee-vending-machine-vs-instant-coffee-which-is-better': {
    metaTitle: 'Tea Coffee Vending Machine Dealers in Chennai | KofeeTek',
    metaDesc:  'KofeeTek is one of the best tea coffee vending machine dealers in Chennai. Explore our filter coffee & instant coffee machines for offices and institutions.',
  },
  'vending-machine-maintenance-tips-office': {
    metaTitle: 'Best Coffee Vending Machine for Office in Chennai | KofeeTek',
    metaDesc:  'Get the best coffee vending machine for your office in Chennai. KofeeTek provides fresh milk coffee machines, bean-to-cup machines & AMC maintenance services.',
  },
  'Tea-vending-machine-manufacturers-in-chennai': {
    metaTitle: 'Tea Vending Machine Manufacturers in Chennai | KofeeTek',
    metaDesc:  'KofeeTek is a trusted tea vending machine manufacturer in Chennai. Supplying tea & coffee vending machines to IT companies, hospitals & corporates since 2017.',
  },
}

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 2)

  const seo = POST_SEO[slug] || {
    metaTitle: `${post.title} | KofeeTek Blog`,
    metaDesc:  post.excerpt.slice(0, 160),
  }

  return (
    <>
      <style>{`
        /* ── Keyword internal links ─────────────────────── */
        .kft-keyword-link {
          color: #1a56db;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: rgba(26,86,219,.35);
          text-underline-offset: 2px;
          transition: color .2s ease, text-decoration-color .2s ease;
        }
        .kft-keyword-link:hover {
          color: #1239a8;
          text-decoration-color: #1239a8;
        }
      `}</style>

      <Helmet>
        {/* ── Optimised title & description ── */}
        <title>{seo.metaTitle}</title>
        <meta name="description"        content={seo.metaDesc} />
        <meta name="keywords"           content={post.tags.join(', ')} />
        <link rel="canonical"           href={`https://www.kofeetek.in/blog/${post.slug}`} />

        {/* ── Open Graph ── */}
        <meta property="og:title"       content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDesc} />
        <meta property="og:type"        content="article" />
        <meta property="og:url"         content={`https://www.kofeetek.in/blog/${post.slug}`} />
        <meta property="og:image"       content={`https://www.kofeetek.in${post.image}`} />
        <meta property="og:site_name"   content="KofeeTek" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={seo.metaTitle} />
        <meta name="twitter:description" content={seo.metaDesc} />
        <meta name="twitter:image"       content={`https://www.kofeetek.in${post.image}`} />

        {/* ── Article schema ── */}
        <script type="application/ld+json">{JSON.stringify({
          '@context':       'https://schema.org',
          '@type':          'BlogPosting',
          headline:         seo.metaTitle,
          description:      seo.metaDesc,
          datePublished:    post.date,
          dateModified:     post.date,
          image:            `https://www.kofeetek.in${post.image}`,
          url:              `https://www.kofeetek.in/blog/${post.slug}`,
          inLanguage:       'en-IN',
          author: {
            '@type': 'Organization',
            name:    'KofeeTek',
            url:     'https://www.kofeetek.in',
          },
          publisher: {
            '@type': 'Organization',
            name:    'KofeeTek',
            url:     'https://www.kofeetek.in',
            logo: {
              '@type': 'ImageObject',
              url:     'https://www.kofeetek.in/assets/logo/Kofeetek_logo.PNG',
            },
          },
          keywords: post.tags.join(', '),
          mainEntityOfPage: {
            '@type': '@id',
            '@id':   `https://www.kofeetek.in/blog/${post.slug}`,
          },
        })}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="pt-28 pb-0 bg-gradient-to-br from-brand-dark to-brand-brownDark">
        <div className="max-w-4xl mx-auto px-4 pb-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors text-sm mb-6">
              <ArrowLeft size={15} /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-brand-gold text-brand-brownDark text-[10px] font-bold px-3 py-1 rounded-full uppercase">{post.category}</span>
              <span className="flex items-center gap-1 text-white/40 text-xs"><Calendar size={11} />{post.date}</span>
              <span className="flex items-center gap-1 text-white/40 text-xs"><Clock size={11} />{post.readTime}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-5">{post.title}</h1>
            <p className="text-white/60 text-lg leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full rounded-t-2xl object-contain max-h-[380px] pb-10"
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}>
            {renderContent(post.content)}
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-brand-beige">
            <span className="flex items-center gap-1 text-xs text-brand-brown/50 font-medium">
              <Tag size={12} />Tags:
            </span>
            {post.tags.map(t => (
              <span key={t} className="text-xs bg-brand-beige text-brand-brown px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-brand-brown to-brand-brownDark rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-white mb-2">Ready to Upgrade Your Workplace Beverages?</h3>
            <p className="text-white/60 text-sm mb-5">Get a free demo from KofeeTek — no commitment required.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/contact" className="btn-primary text-sm">Schedule Free Demo</Link>
              <a href="tel:+919962242499" className="btn-outline text-sm">+91 99622 42499</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="py-12 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="font-display font-bold text-xl text-brand-brownDark mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="card-premium group flex gap-4 p-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                    onError={e => { e.target.style.display = 'none' }}
                  />
                  <div>
                    <h4 className="font-semibold text-brand-brownDark text-sm leading-tight mb-1 group-hover:text-brand-gold transition-colors line-clamp-2">{p.title}</h4>
                    <span className="flex items-center gap-1 text-[10px] text-brand-brown/40"><Clock size={9}/>{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
