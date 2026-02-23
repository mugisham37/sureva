import React from 'react'
import Hero from '../components/landing/hero'
import About from '../components/landing/about'
import Services from '../components/landing/services'
import Testimonial from '../components/landing/testimonial'
import Why from '../components/why'
import Benefits from '../components/landing/benefits'
import Articles from '../components/landing/articles'
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