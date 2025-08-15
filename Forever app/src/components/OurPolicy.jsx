import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

function OurPolicy() {
  return (
    <motion.div
      className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants}>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="exchange icon" />
        <p className='font-semibold'>Eazy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange  policy</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="quality icon" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="support icon" />
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
      </motion.div>
    </motion.div>
  )
}

export default OurPolicy