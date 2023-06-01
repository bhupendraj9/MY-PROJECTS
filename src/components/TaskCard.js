import React from 'react'

const TaskCard = ({task,markDone}) => {
  return (
    <div className='card p-6 rounded-lg min-h-[100px] max-w-[420px] flex flex-col gap-3 items-center'>
        <div className='w-[350px] break-words flex gap-3 flex-wrap'><div className='font-bold text-gray-900'>📕Task Description : </div>{task.data}</div>
        <div className='w-[350px] break-words flex gap-3 flex-wrap'><div className='font-bold text-gray-900'>📆To be completed before:</div> {task.date}</div>
        <div className='w-[350px] break-words flex gap-3 flex-wrap'><div className='font-bold text-gray-900'>🕑Time :</div> {task.time}</div>
        <div className='w-[350px] break-words flex gap-3 flex-wrap'><div className='font-bold text-gray-900'>💼Type :</div>{task.flag}</div>
        <div className='bg-blue-500 max-w-[150px] p-2 text-center font-bold text-white rounded-md cursor-pointer' onClick={()=>{markDone(task.id)}} >mark as done✅</div>
    </div>
  
  )
}

export default TaskCard