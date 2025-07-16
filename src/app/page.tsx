import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Carrier from './components/Carrier'

const page = () => {
  return (
 <div className='max-w-12x px-10  mx-auto'>
  <Hero></Hero>
  <About></About>
  <Carrier></Carrier>
 </div>

   
  )
}

export default page