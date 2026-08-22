import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import WhyUs from '../../components/WhyUs/WhyUs'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import ServiceArea from '../../components/ServiceArea/ServiceArea'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <ServiceArea />
      <FAQ />
      <Contact />
    </>
  )
}
