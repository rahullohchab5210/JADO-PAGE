import React from 'react'
import HeroSection from '../components/HeroSection'
import OurServices from '../components/OurServices'
import AboutUs from '../components/AboutUs'
import SubjectAreas from '../components/SubjectAreas'
import ContactUs from '../components/ContactUs'

function Home() {
    return (
      <> 
            <HeroSection />
            <OurServices />
            <AboutUs />
            <SubjectAreas />
            <ContactUs />
        </>
  )
}

export default Home