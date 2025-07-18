import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Carrier from './components/Carrier'
import Services from './components/Services'
import Facilities from './components/Facilities'
import Team from './components/Team'
import Performance from './components/Performance'

const page = () => {
  return (
 <div className='max-w-12x px-10  mx-auto'>
  <Hero></Hero>
  <About></About>
  <Carrier></Carrier>
  <Performance></Performance>
  <Services></Services>
  <Facilities></Facilities>
  <Team></Team>
 </div>

   
  )
}

export default page