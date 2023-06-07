import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { MainContext } from '../contexts/MainContext';
import Card from './Card';

const Watches = () => {
  
  const {display,setdisplay,data,filtermale,filterfemale,filteruni}= useContext(MainContext)

 

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
    <div className='font-bold text-[30px]'>Discover By Category</div>
    <div className='flex flex-wrap gap-5 justify-center items-center mt-4'>
     <div className='bg-yellow-400 p-2 min-w-[60px] text-center rounded-lg font-bold cursor-pointer' onClick={()=>{setdisplay(data)}}>All</div>
    <div className='bg-yellow-400 p-2 min-w-[60px] text-center rounded-lg font-bold cursor-pointer' onClick={()=>{filtermale()}} >Male</div>
     <div className='bg-yellow-400 p-2 min-w-[60px] text-center rounded-lg font-bold cursor-pointer' onClick={()=>{filterfemale()}} >Female</div>
     <div className='bg-yellow-400 p-2 min-w-[60px] text-center rounded-lg font-bold cursor-pointer' onClick={()=>{filteruni()}} >Unisex</div>
    </div>
    
     {
     <div className='flex flex-wrap justify-center items-center mt-5 gap-4'>
      {
        display.map((watch,index)=>{return (<Card data={watch} key={index}></Card>)})
      }
     </div>

     }
     <div className='flex justify-center bg-red-600 text-white p-2 m-3 font-bold cursor-pointer'>Load More</div>
    </div>

  )
   
}

export default Watches