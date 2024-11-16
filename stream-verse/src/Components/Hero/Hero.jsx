import React from 'react'
import { HERO_CONTENT } from '../../constants/index'

const Hero = () => {
  return (
    <section className='pt-28 lg:pt-36 '>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 border-neutral-800 rounded-full px-3 py-2 text-xs ">
          {HERO_CONTENT.badgeText}
        </div>

        <h1 className=''>
          {HERO_CONTENT.mainHeading}
        </h1>

      </div>
  
    </section>
  )
}

export default Hero
