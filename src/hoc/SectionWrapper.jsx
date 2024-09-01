import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

function SectionWrapper(Component) {
    function HOC(){
  return (
    <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.25}} className='px-36 ' >

        <Component />
        
    </motion.section>
  )
}

return HOC;
}

export default SectionWrapper