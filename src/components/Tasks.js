import React from 'react'
import TaskCard from './TaskCard'

const Tasks = ({homeDikha , sethomeDikha,TaskArray,markDone}) => {
  return (
    
    <div>
     {
       TaskArray.length===0 ?
       <div className=' flex w-full h-[100vh] justify-center items-center flex-col gap-3'>
        <div className=' font-bold text-[30px] text-gray-900'>No Tasks Found</div>
        <button className=' px-8 py-3 bg-green-600 text-white font-bold  rounded-lg' onClick={()=>{sethomeDikha(!homeDikha)}} >Return to main page</button>
       </div>
       
       :<div className='flex flex-col items-center justify-center min-h-[100vh] gap-5'>
         <div className=' font-bold text-[25px] text-gray-900'>Your Tasks</div>
          <div className='flex justify-center items-center flex-wrap gap-20'>{
            TaskArray.map((task,index)=>{return (<TaskCard key={index} task={task} markDone={markDone}></TaskCard>)})
          }
          </div>
            <button className=' px-8 py-3 bg-green-600 text-white font-bold  rounded-lg' onClick={()=>{sethomeDikha(!homeDikha)}} >Return to main page</button>
       </div>
     }
    </div>
  )
}

export default Tasks