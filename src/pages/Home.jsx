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
        <title>Coffee Vending Machines in Chennai | Sales, Rental & Service</title>
        <meta name="description"
          content="Looking for coffee vending machines in Chennai? We offer sales, rental, installation, and maintenance services with reliable machines for offices and businesses." />
        <meta name="keywords"
          content="coffee vending machines in chennai" />
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
