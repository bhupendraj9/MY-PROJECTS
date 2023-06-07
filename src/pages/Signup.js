import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { MainContext } from '../contexts/MainContext'
const Signup = () => {
    const {setisLogin}= useContext(MainContext);
  return (
    <form>
        <div className=" flex flex-col justify-center items-center h-[100vh] bg-[#F0F2F5]">
    <div className="flex flex-col justify-center items-center ">
      <div className='font-bold text-[30px] mb-5'>WATCH GALAXY</div>
      <div className="flex-col justify-center items-center bg-white px-10 py-2 rounded-lg shd">
        <div className="flex justify-center mb-3 mt-3 font-bold">Create An Account</div>
        <input  type="text" placeholder="Email address or a phone number" required className="flex justify-center outline-none p-4 border rounded-lg mb-2 mt-2 w-[350px] text-[18px]" ></input>
      
         <input type="text" placeholder="Password" required className="flex justify-center outline-none p-4 border rounded-lg mb-2 w-[350px] text-[18px]"></input>
         
        <input type="text" placeholder="Address" required={true}  className="flex justify-center outline-none p-4 border rounded-lg mb-2 w-[350px] text-[18px]"></input>

         <NavLink to="/" type='submit' onClick={()=>{toast.success("Account created Successfully");setisLogin(true)}} className="flex justify-center bg-yellow-500 p-3 rounded-lg text-white font-bold ">Create Account</NavLink>
         <div className="flex justify-around text-[14px] mt-2  mb-5"> 
          

         </div>
      </div>
    </div>
  </div>
    </form>
   
  )
}

export default Signup