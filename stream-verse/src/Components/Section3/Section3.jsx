import React from 'react'
import { motion, stagger } from 'framer-motion';
import { KEY_FEATURES_CONTENT } from '../../constants';

const Section3 = () => {

  const containerVariants = {
    hidden : { opacity: 0},
    visible : {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  }

  const featureVariants = {
    hidden : { opacity: 0},
    visible : {
      opacity: 1,
      y : 0,
      transition : {
        duration: 0.5,
      }
    }
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 mt-20">

        <div className="text-center mb-12 border-t border-neutral-800">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent font-semibold">
            {KEY_FEATURES_CONTENT.sectionTitle}
          </h2>
          <p className='mt-4'>
            {KEY_FEATURES_CONTENT.sectionDescription}
          </p>
        </div>

        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap justify-between">

          {
            KEY_FEATURES_CONTENT.features.map( (item) => (
              <motion.div 
              variants={featureVariants}
              className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6" key={item.id}>
                <div className="flex justify-center items-center mb-4">
                  {item.icon}
                </div>
                <h3 className='text-xl'>{item.title}</h3>
              <p className='mt-2 text-neutral-400'>{item.description}</p>
              </motion.div>
            ))
          }


        </motion.div>
        
      </div>
      
    </section>
  )
}

export default Section3
