import React from 'react'
import Welcome from './Welcome'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <Welcome/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Body
