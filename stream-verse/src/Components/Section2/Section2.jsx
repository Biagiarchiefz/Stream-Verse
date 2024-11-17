import React from 'react'
import { HOW_IT_WORKS_CONTENT } from '../../constants'
import { delay, easeIn, motion } from 'framer-motion'

const Section2 = () => {

  const stepVariants = {
    // properti initial bisa mengambil dari variabel meskipun variantnya tida sesuai dengan variable
    pp: { opacity: 0, x: 50},
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",}
    })
  }

  return (
    <section id = "work">
      <div className="mx-auto max-w-7xl px-4">
          <motion.div
           initial={{ opacity: 0, y: -20}}
           animate= {{ opacity: 1, y: 0}}
           transition={{ duration:0.6 , ease: "easeOut" }}

          className="text-center mb-12 border-t border-neutral-800">
            <h2 className='text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-purple-300 to-neutral-600
            bg-clip-text text-transparent font-semibold'>{HOW_IT_WORKS_CONTENT.sectionTitle}
            </h2>
            <p className='mt-4 text-neutral-400 max-w-xl mx-auto'>{HOW_IT_WORKS_CONTENT.sectionDescription}</p>
          </motion.div>

          <motion.div
          initial="pp"
          // whileinView artinya ketika layar di element itu
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              // index sebagai key karna di dalam array object steps tidak ada id jdi kita menggunakan index mengambil index dari si array
              HOW_IT_WORKS_CONTENT.steps.map( (step, index) => (   
            <motion.div
                custom={index}
                variants={stepVariants}
                className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between" key={index}>
                  <div className="">
                  <h3 className='mb-3 text-xl font-semibold'>{step.title}</h3>
                  <p className='text-neutral-400 mb-4'>{step.description}</p>
                  </div>

                  <div className="flex justify-center">
                    <img src={step.imageSrc} alt={step.imageAlt} className='rounded-lg w-full h-[200px] object-cover' />
                  </div>

                  {step.users && (
                    <div className="flex justify-between items-center mt-4">
                      
                      <div className="flex -space-x-2">
                        {step.users.map( (user, userindex) => (
                          <img src={user} alt={`Person ${userindex + 1}`} key={userindex} className='w-8 h-8 rounded-full' />
                        ))}
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg ">
                        Connect
                      </button>

                    </div>
                  )}

                </motion.div> 

              ) )
            }
          </motion.div>
      </div>

      
    </section>
  )
}

export default Section2
