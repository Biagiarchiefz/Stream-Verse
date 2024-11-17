import React from 'react'
import { BRAND_LOGOS, HERO_CONTENT } from '../../constants/index'
import tws from "../../assets/tws.jpeg"
import { motion } from 'framer-motion'

// nama dari variable boleh bebas
const containerVariants = {
  // nama dari statenya boleh bebas di bagian hidden, visible itu boleh bebas
  hidden: { opacity: 0 },                
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2}},

}

const fadeInUp = {
  // y: 20 itu dari bawah ke atas 
  hidden: { opacity: 0, y: 20},
  visible: { 
    opacity: 1, y: 0 , 
    transition: { duration: 0.6 }},

}

const fadeIn = {
  hidden : { opacity: 0},
  visible: {
    opacity: 1,
    transition: { duration: 0.6}}

 }

const Hero = () => {
  return (
    <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className='pt-28 lg:pt-36'>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

        <motion.div
        variants={fadeInUp}
        className="mb-8 border-neutral-800 rounded-full px-3 py-2 text-xs ">
          {HERO_CONTENT.badgeText}
        </motion.div>

        <motion.h1
        variants={fadeInUp}
        className='text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300
        to-neutral-700 bg-clip-text text-transparent'>
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        <motion.p
        variants={fadeInUp}
        className='mt-6 text-neutral-400 max-w-xl'>
          {HERO_CONTENT.subHeading}
          </motion.p>

          <motion.div
          variants={fadeInUp}
          className="mt-6 space-x-4">
              <a href="" className='inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium'>
                {HERO_CONTENT.callToAction.primary}
                </a>
                <a href="" className='inline-block border border-gray-500 hover:bg-gray-400 duration-300 text-white py-3 px-6 rounded-lg font-medium'>
                {HERO_CONTENT.callToAction.secondary}
                </a>
          </motion.div>

          <motion.div
          variants={fadeInUp}
          className="py-10">
            <p className='text-gray-400 text-center mb-8'>{HERO_CONTENT.trustedByText}</p>

            <div className="flex flex-wrap justify-center gap-8">
              {BRAND_LOGOS.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="h-8" />
              ))}
            </div>
            
          </motion.div>

          <motion.div
           variants={fadeInUp}
           className="my-12">
            <img src={tws} alt="" className='h-auto w-full object-cover rounded-3xl'/>
          </motion.div>
          
      </div>
  
    </motion.section>
  )
}

export default Hero
