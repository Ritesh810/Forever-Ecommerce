import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function ProductItem({id, image, name, price}) {

    const { currency } =  useContext(ShopContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }} // 'once: true' animates only the first time in view
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`} >
        <div className='overflow-hidden'>
            <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
    </motion.div>
  )
}

export default ProductItem