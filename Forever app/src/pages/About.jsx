import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-2xl text-center pt-8 border-t'
      >
        <Title text1={'ABOUT'} text2={'US'} />
      </motion.div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <motion.img
          src={assets.about_img}
          alt="about img"
          className='w-full md:max-w-[450px]'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-xl py-4'
      >
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </motion.div>

      <motion.div
        className='flex flex-col md:flex-row text-sm mb-20'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {[
          { title: "Quality Assurance:", desc: "We meticulously select and vet each product to ensure it meets our stringent quality standards." },
          { title: "Convenience:", desc: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier." },
          { title: "Exceptional Customer Service:", desc: "Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority." }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default About