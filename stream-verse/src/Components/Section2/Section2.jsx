import React from 'react'
import { HOW_IT_WORKS_CONTENT } from '../../constants'
import { steps } from 'framer-motion'

const Section2 = () => {
  return (
    <section id = "work">
      <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 border-t border-neutral-800">
            <h2 className='text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-purple-300 to-neutral-600
            bg-clip-text text-transparent'>{HOW_IT_WORKS_CONTENT.sectionTitle}
            </h2>
            <p className='mt-4 text-neutral-400 max-w-xl mx-auto'>{HOW_IT_WORKS_CONTENT.sectionDescription}</p>
          </div>

          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              // index sebagai key karna di dalam array object steps tidak ada id jdi kita menggunakan index mengambil index dari si array
              HOW_IT_WORKS_CONTENT.steps.map( (step, index) => (   
                <div className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between" key={index}>
                  <div className="">
                  <h3 className='mb-4'>{step.title}</h3>
                  <p className='text-neutral-400 mb-4'>{step.description}</p>
                  </div>

                  <div className="flex justify-center">
                    <img src={step.imageSrc} alt="" className='rounded-lg' />
                  </div>
                </div> 

              ) )
            }
          </div>
      </div>

      
    </section>
  )
}

export default Section2
