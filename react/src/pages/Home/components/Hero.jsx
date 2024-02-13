import React from 'react'
import '../../../index.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='flex m-8 items-center justify-center gap-x-12'>
      
      {/* Hero text */}
      
      <div className="relative w-1/2">
        {/* Black text (shadow/border effect) */}
        <h1 className='font-ibmPlex text-[4.51em] drop-shadow-lg text-black absolute' style={{ top: '-2px', left: '-5px' }}>
          Software Engineering and Computer Science
        </h1>
        {/* White text */}
        <h1 className='font-ibmPlex text-[4.5em] drop-shadow-lg text-white relative'>
          Software Engineering and Computer Science<span className='blinker text-gray-200 drop-shadow-lg font-ibmPlex'>|</span>
        </h1>
        
      </div>
      
      
      <motion.div initial={{x: "100%" }} animate={{ x: "-5%" }} transition={{duration: 0.7}}>
      <div className=''>
        <img src="./assets/graphics/concbuilding.png" className="" alt="Concordia Building" />
        <span className=''>Sign up to newsletter</span>
      </div>
      </motion.div>
    
    </div>
  )
}

export default Hero