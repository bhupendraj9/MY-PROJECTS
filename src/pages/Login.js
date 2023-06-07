import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../contexts/MainContext'

const Login = () => {
    const {setisLogin}=useContext(MainContext)
  return (
   <div className=" flex flex-col justify-center items-center h-[100vh] bg-[#F0F2F5]">
    <div className="flex flex-col justify-center items-center ">
      <div className='font-bold text-[30px] mb-5'>WATCH GALAXY</div>
      <div className="flex-col justify-center items-center bg-white px-10 py-2 rounded-lg shd">
        <div className="flex justify-center mb-3 mt-3 font-bold">Log in to watch galaxy</div>
        <input type="text" placeholder="Email address or a phone number" className="flex justify-center outline-none p-4 border rounded-lg mb-2 mt-2 w-[350px] text-[18px]" ></input>
      
         <input type="text" placeholder="Password"  className="flex justify-center outline-none p-4 border rounded-lg mb-2 w-[350px] text-[18px]"></input>
           
         

         <NavLink to="/" onClick={()=>{toast.success("Logged in successfully");setisLogin(true)}} className="flex justify-center bg-yellow-500 p-3 rounded-lg text-white font-bold ">Log in</NavLink>
         <div className="flex justify-around text-[14px] mt-2  mb-5"> 
          <a href="avs" className="flex justify-center">Forgotten account?</a>
          <a href="/signup" className="flex justify-center">Sign up</a>

         </div>
      </div>
    </div>
  </div>
  )
}

export default Login