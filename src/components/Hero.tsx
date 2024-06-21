'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll'

const letters = [
    'h', 'o', 'w', 'l', 'o', 'n', 'g', 'h', 'a', 's', 'i', 't', 'b', 'e', 'e', 'n', '?'
]

const Hero = () => {
  return (
    <section id='navTop' className='sm:hidden max-w-[90rem] relative mx-auto w-full justify-center items-center text-zinc-900'>
        <div className='fixed left-0 right-0 top-0 justify-center text-center items-center m-[0.5rem] py-[2rem] bg-white bg-opacity-70 backdrop-blur-lg rounded-[2rem] z-10'>
        <Link 
        to='navTop'
        spy={true} 
      smooth={true} 
      offset={50} 
      duration={1000}
      
        className='font-fancy font-bold text-[1.5rem] text-center justify-center items-center flex lowercase'>
            {letters.map((letter: string, index: number) => (
                <React.Fragment key={index}>
            <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ y: {delay: index * 0.08, duration: 0.2, type: 'spring', stiffness: 200, damping: 20}, opacity: {delay: index * 0.08, duration: 0.3} }}
                viewport={{ once: true}}
            className={`${index === 3 || index === 7 || index === 10 || index === 12 ? 'pl-2' : ''}`}>
                {letter}
            </motion.span>
            </React.Fragment>
        ))}
        </Link>
        </div>
    </section>
  )
}

export default Hero