import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import ClientLogos from '../components/home/ClientLogos'
import WhyUs from '../components/home/WhyUs'
import MachineShowcase from '../components/home/MachineShowcase'
import Industries from '../components/home/Industries'
import ConsumableSection from '../components/home/ConsumableSection'
import Testimonials from '../components/home/Testimonials'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Best Coffee Vending Machine in Chennai | Kofeetek</title>
        <meta name="description" content="Looking for a coffee vending machine Chennai? Kofeetek provides advanced coffee vending machines with hassle-free installation, maintenance, and customized beverage solutions for businesses." />
        <meta name="keywords" content="coffee vending machine Chennai, tea vending machine, vending machine manufacturer, coffee machine" />
        <link rel="canonical" href="https://www.kofeetek.in" />
      </Helmet>

      <Hero />
      <ClientLogos />
      <WhyUs />
      <MachineShowcase />
       <Industries /> 
      <ConsumableSection />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
