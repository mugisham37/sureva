import Hero from '@/src/components/quote/hero'
import Data from '@/src/components/quote/data'
import Testimonial from '@/src/components/testimonial'
import Faq from '@/src/components/services/faq'
import Footer from '@/src/components/footer'

const page = () => {
  return (
    <>
      <Hero />
      <Data />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}

export default page