import React from 'react'
import { NavLink } from 'react-router-dom'

import {FaShoppingCart,FaUserAlt} from 'react-icons/fa';

const Navbar = () => {

 
  return (
    <div className='flex p-4  font-bold text-white bg-black items-center justify-between px-5'>
       <div className=' text-[#ffd700] font-extrabold text-[20px] text-ellipsis font-sans'>Watch Galaxy</div>
       <div className='flex flex-wrap gap-6 items-center ml-[-80px]'>
        <NavLink to ="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/watches">Watches</NavLink>
        
       </div>
      <div className='flex justify-center items-center gap-4'>
        <NavLink to="/cart"><FaShoppingCart className='text-[20px]'></FaShoppingCart></NavLink>
        <NavLink to="/login"><FaUserAlt className='text-[20px]'></FaUserAlt></NavLink>
      </div>
        
          
       
       
       
    </div>
  )
}

export default Navbar;