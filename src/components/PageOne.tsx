'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CiClock1, CiClock2 } from 'react-icons/ci'

const sentence = [
    "how long has it", "been since Reeva", "promised to call?"
]

const PageOne = () => {
  return (
    <section className='sm:hidden flex items-center font-pop text-zinc-900 mt-[14rem] justify-center w-full max-w-[90rem]'>
        <div className='mx-[2rem] py-[2rem] w-full relative flex'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ y: {delay: 1.8, type: 'spring', stiffness: 100, damping: 25, duration: 0.4}, opacity: {delay: 1.8, duration: 0.4} }}
            viewport={{ once: true}}
            className='textContainerPageOne text-start justify-start flex-col font-bold flex text-xl px-[2rem] py-[1.5rem] shadow-2xl text-white bg-red-600 bg-opacity-75 rounded-[2rem] backdrop-blur-[0.4rem] z-[5]'>
                {sentence.map((line: string, index: number) => (
                <React.Fragment key={index}>
                <motion.span className=''
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ y: {delay: 1.8 + index * 0.2, type: 'spring', stiffness: 100, damping: 20}, opacity: {delay: 1.8 + index * 0.2,} }}
                viewport={{ once: true}}
                >
                    {line}
                </motion.span>
                </React.Fragment>
                ))}
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -4, 4, 0] }}
            transition={{ x: {delay: 2.2, type: 'spring', stiffness: 100, damping: 20, duration: 0.4}, opacity: {delay: 2.2, duration: 0.4},
            y: { 
                duration: 7,  // Duration of one oscillation cycle
                repeat: Infinity,  // Repeat indefinitely
                repeatType: "loop", // The animation loops back to the start
                repeatDelay: 0,
                delay: 2.2  
            } }}
            viewport={{ once: true}}
            className='absolute top-0 right-0 text-[13rem] z-[2]'>
                <CiClock1 />
            </motion.div>
        </div>
    </section>
  )
}

export default PageOne