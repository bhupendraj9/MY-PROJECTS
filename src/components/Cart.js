import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { MainContext } from '../contexts/MainContext';

import CartCard from './CartCard';

const Cart = () => {
  
  const {iscartEmpty,cartdata,calculate,total,count,showSummary,setshowSummary,isLogin}= useContext(MainContext);
  
  useEffect(()=>{calculate()},[cartdata]);
  
  return (
    <div>{
    isLogin?
    <div>
      <div className='flex min-h-screen flex-col items-center justify-center'>
     {
      iscartEmpty?

     <div className='flex flex-col items-center'>
     <BsCart4 className='text-[60px] mb-1'></BsCart4>
      <div className='mb-5 font-bold text-[30px]' >Your Cart is Empty</div>
      <NavLink to="/" className="bg-red-600 p-2 hover:bg-red-700 rounded-lg text-white font-bold">Return to Home</NavLink>
     </div>

     :<div className='flex flex-col gap-10'>
     <div className='flex flex-wrap justify-center items-center mt-5 gap-4'>
      {
        cartdata.map((watch,index)=>{return (<CartCard data={watch} key={index}></CartCard>)})
      }
      
     </div>
     <div>
     { 
      !showSummary && <div className='text-center cursor-pointer font-bold text-white bg-red-500 rounded-md p-2' onClick={()=>{calculate(); setshowSummary(true)}}>Get Cart Summary</div>}
        {
          showSummary &&
          <div className='flex flex-col justify-center items-center gap-2 shd mb-5 py-5 text-[20px]'>
          <div className='text-center font-bold text-[20px]'>Your Cart Summary</div>
            <div><span className='font-bold'>Total Items : </span>{count}</div>
            <div><span className='font-bold'>Total Price :</span> ₹{total}</div>
            <div className='text-center font-bold text-white bg-red-500 rounded-md p-2 cursor-pointer' onClick={()=>{setshowSummary(false)}}>Hide Summary</div>
          </div>
          
        }
      
     </div>
     </div>
     }
    </div>
    </div>
    :<div className='flex flex-col justify-center items-center min-h-screen gap-3'>
      <div className='font-bold text-[30px]'>Login or Sign Up to access the Cart</div>
      <div className='flex gap-3'>
      <NavLink to="/login" className='bg-yellow-500 p-2 rounded-lg font-bold'>Login</NavLink>
      <NavLink to="/signup" className='bg-yellow-500 p-2 rounded-lg font-bold'>Sign Up</NavLink>
      </div>
      
    </div>}
    </div>
    
   

  )
}

export default Cart