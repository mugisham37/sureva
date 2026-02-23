import React from 'react'
import HeroComponent from '../../components/about/hero'
import ClientsComponent from '../../components/about/clients'
import ExperienceComponent from '../../components/about/experience'
import TeamComponent from '../../components/about/team'
import WhyComponent from '../../components/why'
import TestimonialComponent from '../../components/testimonial'
import FooterComponent from '../../components/footer'

const page = () => {
  return (
    <>
      <HeroComponent />
      <ClientsComponent />
      <ExperienceComponent />
      <TeamComponent />
      <WhyComponent />
      <TestimonialComponent />
      <FooterComponent />
    </>
  )
}

export default page