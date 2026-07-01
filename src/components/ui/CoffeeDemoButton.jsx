import { Link } from 'react-router-dom'

/**
 * CoffeeDemoButton
 * Premium coffee-fill hover animation for the "Book Free Demo" CTA.
 * Self-contained — uses a <style> tag so it doesn't touch btn-primary globally.
 */
export default function CoffeeDemoButton({ to = '/contact', label = 'Book Free Demo', onClick, className = '' }) {
  return (
    <>
      <style>{`
        /* ── Wrapper ─────────────────────────────────────────────── */
        .kft-brew-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .3px;
          color: #2E1A10;
          background: #F5B800;
          border: none;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          /* base shadow */
          box-shadow: 0 2px 10px rgba(245,184,0,.30);
          /* smooth base transitions */
          transition:
            transform  .45s cubic-bezier(.34,1.56,.64,1),
            box-shadow .45s ease,
            color       .42s ease;
          will-change: transform;
        }
        .kft-brew-btn:focus-visible {
          outline: 2px solid #F5B800;
          outline-offset: 3px;
        }

        /* ── Coffee fill layer (pseudo-element) ─────────────────── */
        .kft-brew-btn::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0%;                /* starts at 0, fills up on hover */
          /* espresso → caramel gradient */
          background: linear-gradient(
            to top,
            #2E1A10  0%,
            #4A2C1D 38%,
            #6B3F2A 72%,
            #8B5A3A 100%
          );
          border-radius: 0 0 999px 999px;
          transition: height .52s cubic-bezier(.4, 0, .2, 1);
          z-index: 0;
        }

        /* ── Foam layer ─────────────────────────────────────────── */
        .kft-brew-btn::after {
          content: '';
          position: absolute;
          bottom: -12px; left: -5%; right: -5%;
          height: 18px;
          /* creamy foam ripple */
          background: radial-gradient(
            ellipse 60% 100% at 50% 0%,
            #FFF8F0 0%,
            #F5EDE0 35%,
            rgba(245,237,224,0) 100%
          );
          border-radius: 50% 50% 0 0 / 80% 80% 0 0;
          opacity: 0;
          transform: scaleX(.85) translateY(0);
          transition:
            opacity    .30s ease .10s,
            transform  .52s cubic-bezier(.4, 0, .2, 1),
            bottom     .52s cubic-bezier(.4, 0, .2, 1);
          z-index: 1;
        }

        /* ── Steam wisps ────────────────────────────────────────── */
        .kft-steam {
          position: absolute;
          top: -22px; left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity .3s ease .22s;
          z-index: 3;
        }
        .kft-steam span {
          display: block;
          width: 3px;
          height: 14px;
          border-radius: 3px;
          background: rgba(255,248,240,.55);
          transform-origin: bottom center;
          animation: none;
        }
        /* offset each wisp timing slightly */
        .kft-steam span:nth-child(1) { animation-delay: 0ms; }
        .kft-steam span:nth-child(2) { animation-delay: 120ms; }
        .kft-steam span:nth-child(3) { animation-delay: 60ms; }

        @keyframes kft-steam-rise {
          0%   { transform: translateY(0)    scaleX(1)    opacity: 1; }
          40%  { transform: translateY(-6px) scaleX(1.3); }
          70%  { transform: translateY(-11px) scaleX(.8); }
          100% { transform: translateY(-18px) scaleX(1.1); opacity: 0; }
        }

        /* ── Label ──────────────────────────────────────────────── */
        .kft-brew-label {
          position: relative;
          z-index: 2;
          transition: color .42s ease;
          white-space: nowrap;
        }

        /* ── Cup icon ───────────────────────────────────────────── */
        .kft-cup-icon {
          position: relative;
          z-index: 2;
          font-size: 14px;
          transition: transform .45s cubic-bezier(.34,1.56,.64,1);
          line-height: 1;
        }

        /* ══ HOVER STATE ════════════════════════════════════════════ */
        .kft-brew-btn:hover {
          transform: translateY(-4px) scale(1.035);
          box-shadow:
            0  8px 28px rgba(46,26,16,.50),
            0  2px 8px  rgba(46,26,16,.30),
            0  0  0  1px rgba(139,90,58,.40);
          color: #FFF8F0;   /* text goes cream-white */
        }

        /* fill coffee to 100% */
        .kft-brew-btn:hover::before {
          height: 110%;
        }

        /* foam rises up with the fill */
        .kft-brew-btn:hover::after {
          bottom: calc(100% - 10px);
          opacity: 1;
          transform: scaleX(1.05) translateY(0);
        }

        /* show steam */
        .kft-brew-btn:hover .kft-steam {
          opacity: 1;
        }
        .kft-brew-btn:hover .kft-steam span {
          animation: kft-steam-rise .9s ease-in-out infinite alternate;
        }

        /* cup wobbles slightly */
        .kft-brew-btn:hover .kft-cup-icon {
          transform: rotate(-8deg) scale(1.15);
        }

        /* active press */
        .kft-brew-btn:active {
          transform: translateY(0) scale(.975);
          box-shadow: 0 2px 10px rgba(46,26,16,.30);
        }
      `}</style>

      <Link
        to={to}
        onClick={onClick}
        className={`kft-brew-btn ${className}`}
        aria-label={label}
      >
        {/* Steam wisps — rendered above the button */}
        <span className="kft-steam" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        {/* Cup icon */}
        {/* <span className="kft-cup-icon" aria-hidden="true">☕</span> */}

        {/* Label */}
        <span className="kft-brew-label">{label}</span>
      </Link>
    </>
  )
}
