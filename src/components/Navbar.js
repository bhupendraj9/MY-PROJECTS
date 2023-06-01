import React from 'react'

const Navbar = ({homeDikha , sethomeDikha}) => {
  return (
    <div className=' bg-gray-900 flex justify-between px-3 py-5 items-center w-full mb-3'>
       <div className='text-white font-bold text-[28px]'>Task Manager</div>
       <div className=' bg-gray-200 font-bold p-3 rounded-md cursor-pointer' 
        onClick={()=>{sethomeDikha(!homeDikha)}}>My Tasks</div>
   
    </div>
  )
}

export default Navbar