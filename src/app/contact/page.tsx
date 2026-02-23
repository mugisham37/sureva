import React from 'react'
import contact from '../../components/contact'
import Footer from '../../components/footer'

const page = () => {
  const ContactComponent = contact
  return (
    <>
      <ContactComponent />
      <Footer />
    </>
  )
}

export default page