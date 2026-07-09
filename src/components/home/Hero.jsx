import { useRef, Suspense, Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle2, Star } from 'lucide-react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, OrbitControls, Text, RoundedBox, ContactShadows } from '@react-three/drei'

/* ── Error boundary — catches WebGL / Three.js failures ─────────────────── */
class ThreeBoundary extends Component {
  constructor(p) { super(p); this.state = { err: false } }
  static getDerivedStateFromError() { return { err: true } }
  componentDidCatch(e) { console.warn('Three.js error caught:', e.message) }
  render() { return this.state.err ? <PhotoHero /> : this.props.children }
}

/* ── Fallback: real machine photo when WebGL unavailable ─────────────────── */
function PhotoHero() {
  return (
    <div className="h-full flex items-center justify-center">
      {/* <div className="relative w-full max-w-sm mx-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/assets/machines/machine_hero.jpeg"
          alt="KofeeTek Coffee Vending Machine"
          className="w-full object-contain drop-shadow-2xl animate-float"
          style={{ filter: 'drop-shadow(0 28px 56px rgba(245,184,0,0.22))' }}
          onError={e => { e.target.style.display = 'none' }}
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-56 h-12 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,rgba(245,184,0,.28) 0%,transparent 70%)', filter: 'blur(14px)' }} />
      </div> */}
    </div>
  )
}

/* ── Photoreal KofeeTek rig — brewer + creamer unit, branded front door ──── */
function MachineModel() {
  const ref = useRef()
  useFrame(state => {
    if (!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.28) * 0.22
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.05
  })

  // Shared material recipes so every panel reads as the same physical product
  const bodyGloss = { color: '#0c0c0d', metalness: 0.55, roughness: 0.22, clearcoat: 0.6, clearcoatRoughness: 0.25 }
  const doorGloss = { color: '#111113', metalness: 0.5, roughness: 0.28, clearcoat: 0.7, clearcoatRoughness: 0.2 }
  const orangeAccent = { color: '#E8650A', emissive: '#E8650A', emissiveIntensity: 0.35, metalness: 0.4, roughness: 0.3 }
  const steel = { color: '#c9c9c9', metalness: 0.95, roughness: 0.12 }

  const buttons = [
    { pos: [-0.32, 0.66], c: '#F5B800' }, { pos: [0.32, 0.66], c: '#F2C94C' },
    { pos: [-0.32, 0.32], c: '#4499ff' }, { pos: [0.32, 0.32], c: '#E8650A' },
    { pos: [-0.32, -0.02], c: '#4499ff' }, { pos: [0.32, -0.02], c: '#E8650A' },
    { pos: [-0.32, -0.36], c: '#63c7ff' }, { pos: [0.32, -0.36], c: '#c0392b' },
  ]

  return (
    <group ref={ref} scale={[0.8, 0.8, 0.8]}>
      {/* ══════════ MAIN BREWER UNIT ══════════ */}
      <group>
        {/* Rear chassis */}
        <RoundedBox args={[1.7, 3.0, 1.05]} radius={0.05} smoothness={4} position={[0, 0.05, -0.05]} castShadow receiveShadow>
          <meshPhysicalMaterial {...bodyGloss} />
        </RoundedBox>

        {/* Recessed front door panel */}
        <RoundedBox args={[1.5, 2.86, 0.15]} radius={0.04} smoothness={4} position={[0, 0.1, 0.52]} castShadow>
          <meshPhysicalMaterial {...doorGloss} />
        </RoundedBox>

        {/* Orange frame — top / left / right, matching the real housing trim */}
        <RoundedBox args={[1.66, 0.1, 1.1]} radius={0.03} smoothness={3} position={[0, 1.55, 0.02]}>
          <meshStandardMaterial {...orangeAccent} />
        </RoundedBox>
        <RoundedBox args={[0.07, 2.9, 1.1]} radius={0.02} smoothness={3} position={[-0.85, 0.05, 0.02]}>
          <meshStandardMaterial {...orangeAccent} />
        </RoundedBox>
        <RoundedBox args={[0.07, 2.9, 1.1]} radius={0.02} smoothness={3} position={[0.85, 0.05, 0.02]}>
          <meshStandardMaterial {...orangeAccent} />
        </RoundedBox>

        {/* LCD housing + glow + fake status lines */}
        <mesh position={[0, 1.12, 0.605]}>
          <boxGeometry args={[1.0, 0.44, 0.035]} />
          <meshStandardMaterial color="#050912" roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.12, 0.626]}>
          <planeGeometry args={[0.86, 0.32]} />
          <meshStandardMaterial color="#123a7a" emissive="#2f6fe0" emissiveIntensity={1.1} />
        </mesh>
        <mesh position={[0, 1.18, 0.628]}>
          <planeGeometry args={[0.62, 0.05]} />
          <meshStandardMaterial color="#8fd6ff" emissive="#8fd6ff" emissiveIntensity={1.4} />
        </mesh>
        <mesh position={[0, 1.06, 0.628]}>
          <planeGeometry args={[0.72, 0.045]} />
          <meshStandardMaterial color="#63b8ff" emissive="#63b8ff" emissiveIntensity={1.1} />
        </mesh>

        {/* 8 beverage buttons (2×4 grid), each lit like the real keypad */}
        {buttons.map(({ pos: [x, y], c }, i) => (
          <group key={i} position={[x, y, 0]}>
            <RoundedBox args={[0.4, 0.24, 0.04]} radius={0.03} smoothness={3} position={[0, 0, 0.635]}>
              <meshStandardMaterial color="#161616" roughness={0.45} metalness={0.2} />
            </RoundedBox>
            <mesh position={[0, 0.045, 0.662]}>
              <circleGeometry args={[0.05, 16]} />
              <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.9} />
            </mesh>
            <mesh position={[0, -0.06, 0.661]}>
              <planeGeometry args={[0.26, 0.028]} />
              <meshStandardMaterial color="#e8e8e8" emissive="#e8e8e8" emissiveIntensity={0.3} />
            </mesh>
          </group>
        ))}

        {/* KOFEETEK brand mark + tagline, embossed on the door */}
        <Text
          position={[0, -0.6, 0.635]}
          fontSize={0.14}
          letterSpacing={0.02}
          anchorX="center"
          anchorY="middle"
          color="#ffffff"
        >
          KOFEETEK
        </Text>
        <Text
          position={[0, -0.77, 0.635]}
          fontSize={0.058}
          letterSpacing={0.14}
          anchorX="center"
          anchorY="middle"
          color="#E8650A"
        >
          FEEL THE BREWS
        </Text>

        {/* Lock + key ring, right edge of the door */}
        <mesh position={[0.78, 0.35, 0.66]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.05, 12]} />
          <meshStandardMaterial {...steel} />
        </mesh>
        <mesh position={[0.78, 0.24, 0.66]}>
          <torusGeometry args={[0.045, 0.008, 8, 16]} />
          <meshStandardMaterial {...steel} />
        </mesh>

        {/* Dispense nozzle */}
        <mesh position={[0, -1.0, 0.68]}>
          <cylinderGeometry args={[0.035, 0.055, 0.2, 14]} />
          <meshStandardMaterial {...steel} />
        </mesh>

        {/* Brushed drip tray */}
        <RoundedBox args={[1.35, 0.07, 0.36]} radius={0.02} smoothness={3} position={[0, -1.24, 0.68]}>
          <meshStandardMaterial {...steel} />
        </RoundedBox>

        {/* Base plinth */}
        <RoundedBox args={[2.0, 0.1, 1.35]} radius={0.02} smoothness={3} position={[0, -1.62, 0.05]}>
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
        </RoundedBox>
      </group>

      {/* ══════════ SIDE CREAMER / MILK UNIT ══════════ */}
      <group position={[1.4, -0.42, -0.35]} rotation={[0, -0.18, 0]}>
        <RoundedBox args={[1.15, 1.55, 1.35]} radius={0.05} smoothness={4} castShadow receiveShadow>
          <meshPhysicalMaterial {...bodyGloss} />
        </RoundedBox>
        {/* Twin canister lids with grab handles */}
        {[[-0.24, 0.15], [0.24, -0.1]].map(([x, z], i) => (
          <group key={i} position={[x, 0.8, z]}>
            <mesh>
              <cylinderGeometry args={[0.34, 0.34, 0.05, 24]} />
              <meshStandardMaterial {...steel} />
            </mesh>
            <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.12, 0.018, 8, 20, Math.PI]} />
              <meshStandardMaterial color="#0d0d0d" metalness={0.3} roughness={0.6} />
            </mesh>
          </group>
        ))}
        {/* Feet */}
        {[-0.5, 0.5].map((x, i) => (
          <mesh key={i} position={[x, -0.8, 0.55]}>
            <cylinderGeometry args={[0.05, 0.06, 0.08, 10]} />
            <meshStandardMaterial color="#111" roughness={0.6} />
          </mesh>
        ))}
      </group>

      {/* Connector tube between units, with orange fittings */}
      <mesh position={[0.98, -0.28, 0.66]} rotation={[0, 0, Math.PI / 2.4]}>
        <cylinderGeometry args={[0.028, 0.028, 0.55, 10]} />
        <meshStandardMaterial color="#e9e9e9" roughness={0.4} />
      </mesh>
      <mesh position={[0.82, -0.05, 0.66]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial {...orangeAccent} />
      </mesh>
      <mesh position={[1.18, -0.52, 0.55]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial {...orangeAccent} />
      </mesh>
    </group>
  )
}

function CoffeeBean({ position, speed }) {
  const ref = useRef()
  useFrame(state => {
    if (!ref.current) return
    ref.current.rotation.x += 0.013 * speed
    ref.current.rotation.z += 0.008 * speed
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.75 + position[0]) * 0.28
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.07, 8, 8]} />
      <meshStandardMaterial color="#2E1A10" roughness={0.65} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 5, 4]} intensity={1.8} color="#F5B800" />
      <pointLight position={[-4, 2, -3]} intensity={0.7} color="#ffffff" />
      <pointLight position={[0, -3, 4]} intensity={0.5} color="#E8650A" />
      <pointLight position={[0, 0.2, 6]} intensity={0.55} color="#ffffff" />
      <spotLight position={[0, 8, 5]} intensity={1.4} angle={0.4} penumbra={0.6} castShadow />
      <Float speed={0.95} rotationIntensity={0.07} floatIntensity={0.18}>
        <MachineModel />
      </Float>
      <ContactShadows position={[0, -1.85, 0]} opacity={0.55} scale={9} blur={2.6} far={3} resolution={512} color="#000000" />
      {[[-3.0, 0.5, -0.5], [3.3, -0.4, -0.8], [-2.6, -1.6, 0.3],
      [2.9, 1.7, 0.2], [-2.9, 1.9, -0.3], [3.1, 0.1, 0.6],
      [-2.1, -0.9, -0.9], [3.7, -1.1, 0.4]].map((p, i) => (
        <CoffeeBean key={i} position={p} speed={0.33 + i * 0.11} />
      ))}
      <OrbitControls
        enableZoom={false} enablePan={false}
        autoRotate autoRotateSpeed={0.45}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3.2}
      />
    </>
  )
}

/* ── Data ─────────────────────────────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Corporate Clients' },
  { value: '7+', label: 'Years Experience' },
  { value: '15K+', label: 'Cups Daily' },
  { value: 'ISO', label: 'Registered' },
]
const badges = ['IT Companies', 'Manufacturing', 'Hospitals', 'Corporates']

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

/* ── Hero ──────────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0d0603] via-[#1a0a03] to-brand-brownDark overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.032] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(245,184,0,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(245,184,0,.5) 1px,transparent 1px)', backgroundSize: '72px 72px' }} />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 75% 50%,rgba(245,184,0,0.065) 0%,transparent 65%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center w-full pt-24 sm:pt-20 pb-14 text-left">

          {/* ── LEFT ── */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-1 lg:order-1 text-left">

            {/* Industry pills */}
            {/* <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-5">
              {badges.map(b => (
                <span key={b} className="flex items-center gap-1.5 text-[11px] bg-brand-gold/12
                  text-brand-gold border border-brand-gold/22 px-3 py-1 rounded-full font-medium">
                  <CheckCircle2 size={10} className="fill-brand-gold" />{b}
                </span>
              ))}
            </motion.div> */}

            {/* Eyebrow */}
            <motion.p variants={fadeUp}
              className="text-brand-gold/65 text-[11px] font-semibold uppercase tracking-[3.5px] mb-3">
              India's Trusted Vending Partner
            </motion.p>

            {/* Headline — improved sizing */}
            <motion.h1 variants={fadeUp}
              className="font-clash font-medium tracking-tight leading-[0.9] text-white mb-5 mt-5"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Smart Beverage{' '}
              <span className="text-brand-gold relative whitespace-nowrap">
                Solutions
                {/* <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 240 8" fill="none">
                  <path d="M2 6 Q120 1 238 6" stroke="#F5B800" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                </svg> */}
              </span>
              <br />
              <span className="text-white/88">for Modern Workplaces</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeUp}
              className="text-white/85 text-[15px] leading-[1.78] mb-7 max-w-[430px]">
              Premium Coffee & Tea Vending Machines — manufactured, rented and fully serviced
              across Tamil Nadu & Karnataka. ISO Certified. FSSAI Approved.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link to="/contact" className="btn-primary gap-2 shadow-lg shadow-brand-gold/18 text-sm">
                Schedule Free Demo <ArrowRight size={15} />
              </Link>
              <Link to="/products" className="btn-outline gap-2 text-sm">
                Explore Machines
              </Link>
            </motion.div>

            {/* Quick contact */}
            {/* <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
              <a href="tel:+919962242499"
                className="flex items-center gap-2 text-white/52 hover:text-brand-gold transition-colors text-[13px]">
                <div className="w-7 h-7 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={12} className="text-brand-gold" />
                </div>
                +91 99622 42499
              </a>
              <span className="text-white/15 hidden sm:block">|</span>
              <a href="mailto:sales@kofeetek.in"
                className="text-white/52 hover:text-brand-gold transition-colors text-[13px]">
                sales@kofeetek.in
              </a>
            </motion.div> */}

            {/* Stats */}
            {/* <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="border-l-2 border-brand-gold/22 pl-3">
                  <div className="font-display text-[20px] font-bold text-white">{s.value}</div>
                  <div className="text-white/38 text-[10px] mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* ── RIGHT: 3D Canvas ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.25 }}
            className="order-2 lg:order-2 w-full max-w-[420px] sm:max-w-none mx-auto h-[300px] sm:h-[420px] md:h-[470px] lg:h-[570px] relative"
          >
            <ThreeBoundary>
              <Suspense fallback={<PhotoHero />}>
                <Canvas camera={{ position: [0, 0.2, 6.2], fov: 42 }} shadows>
                  <Scene />
                </Canvas>
              </Suspense>
            </ThreeBoundary>

            {/* Floating badge */}
            {/* <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute top-8 left-0 bg-white/8 backdrop-blur-md border border-white/14
                         rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 pointer-events-none"
            >
              <div className="w-8 h-8 bg-[#E8650A]/20 rounded-lg flex items-center justify-center text-sm">☕</div>
              <div>
                <div className="text-white text-[11px] font-semibold">KT FreshMilk Pro 8</div>
                <div className="text-brand-gold text-[11px]">₹7,700 / month</div>
              </div>
            </motion.div> */}

            {/* Stars badge */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              // className="absolute bottom-14 right-0 bg-white/8 backdrop-blur-md border border-white/14
              //            rounded-xl px-3.5 py-2.5 flex items-center gap-2 pointer-events-none"
            >
              {/* <div className="flex">{[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="text-brand-gold fill-brand-gold" />
              ))}</div> */}
              {/* <span className="text-white/72 text-[11px]">500+ Clients</span> */}
            </motion.div>

            {/* Ground glow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-10 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(245,184,0,.2) 0%,transparent 70%)', filter: 'blur(10px)' }} />
          </motion.div>

          
        </div>
      </div>

      {/* Scroll cue */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-5 h-8 border-2 border-white/18 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-brand-gold rounded-full"
          />
        </div>
      </motion.div> */}
    </section>
  )
}
