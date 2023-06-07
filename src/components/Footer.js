import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col  bg-black'>
        <div className='flex justify-evenly mt-5 bg-black text-white items-center min-h-[300px]'>
        <div>
        <div className=' font-extrabold text-white text-[36px]'>Watch 
        <div>Galaxy</div></div></div>
        <div className=' flex flex-col gap-3 '>
            <div className=' font-semibold underline  text-yellow-400' >HELP DESK</div>
           <ul className='text-white'>
            <li><a href='x'>Support</a></li>
            <li><a href='x'>Service Center</a></li>
            <li><a href='x'>Track Your Order</a></li>
             <li><a href='x'>Warranty Policy</a></li>
            <li><a href='x'>Contact Us</a></li>
           </ul>
        </div>


          <div className=' flex flex-col gap-3 '>
            <div className=' font-semibold underline  text-yellow-400' >POLICIES AND ORDER</div>
           <ul className='text-white'>
            <li><a href='x'>Support</a></li>
            <li><a href='x'>Service Center</a></li>
            <li><a href='x'>Track Your Order</a></li>
             <li><a href='x'>Warranty Policy</a></li>
            <li><a href='x'>Contact Us</a></li>
           </ul>
        </div>

         <div className=' flex flex-col gap-3 '>
            <div className=' font-semibold underline text-yellow-400' >COMPANY</div>
           <ul className='text-white'>
            <li><a href='x'>Blog</a></li>
            <li><a href='x'>About Us</a></li>
            <li><a href='x'>Our Stores</a></li>
             <li><a href='x'>Contact Us</a></li>
           </ul>
        </div>
    </div>
    <div className='h-[0.1px] w-full bg-slate-700'></div>
    <div className='text-white text-center p-2'>© 2023 Watch Galaxy. All Rights Reserved. 
  
    </div>
    </div>
   
  )
}

export default Footer