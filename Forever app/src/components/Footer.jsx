import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="logo" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About us
                    </NavLink>
                    <NavLink to="/delivery">
                        Delivery
                    </NavLink>
                    <NavLink to="/privacy">
                        Privacy Policy
                    </NavLink>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <NavLink to="tel:+1555505494">
                        +1 (555) 505 494
                    </NavLink>
                    <NavLink to="mailto:contact@foreveryou.com">
                        contact@foreveryou.com
                    </NavLink>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer