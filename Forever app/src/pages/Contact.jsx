import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-center text-2xl pt-10 border-t'
      >
        <Title text1={'CONTACT'} text2={'US'} />
      </motion.div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
        <motion.img 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='w-full md:max-w-[480px]' 
          src={assets.contact_img} 
          alt="Contact Us" 
        />
        
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='flex flex-col justify-center items-start gap-6'
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='font-semibold text-xl text-gray-600'
          >
            Our Store
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-gray-500'
          >
            54709 Willms Station <br /> Suit 350, Washington, USA
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-gray-500'
          >
            Tel: (415) 555-0132
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-gray-500'
          >
            Email: admin@forever.com
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-gray-600 font-semibold text-xl'
          >
            Careers at Forever
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='text-gray-500'
          >
            Learn more about our teams and job openings.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
          >
            Explore Jobs
          </motion.button>
        </motion.div>
      </div>
      
      <NewsLetterBox />
    </div>
  )
}

export default Contact