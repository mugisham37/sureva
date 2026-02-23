import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Testimonial from '../components/testimonial'
import Why from '../components/why'
import Benefits from '../components/benefits'
import Articles from '../components/articles'
import Footer from '../components/footer'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Why />
      <Benefits />
      <Articles />
      <Footer />
    </>
  )
}

export default page