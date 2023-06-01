import React from 'react'

const TaskGenerator = ({TaskData,setTaskData,changeHandler,create,TaskArray}) => {
  return (
    <div className='mt-2 bg-gray-200 flex flex-col items-start min-w-[350px] p-5 justify-between gap-5 rounded-md tg'>
        <div>
        <div className='font-semibold'>Add Task Description</div>
        <textarea className='w-[300px] h-[40px] indent-2 pt-1' name="data" value={TaskData.data} onChange={changeHandler}></textarea>
        </div>
       

        <div className='flex justify-between w-full'>

        <div>
        <div className='font-semibold'>Set the deadline</div>
        <input type= 'date' name="date" value={TaskData.date} onChange={changeHandler}></input>
        </div>


        <div>
        <div className='font-semibold'>Set the Time</div>
        <input type='time' name="time" className='w-[150px]' value={TaskData.time} onChange={changeHandler}></input>
        </div>
        
        </div>
        <div>
          <div className='font-semibold'>Set the Category</div>
        <div className='flex gap-9'>
            {/* <input type='radio'></input>
            <input type='radio'></input> */}
            <div><input type='radio' name="flag" value="Personal" className='mr-2' onChange={changeHandler}></input>
            <label>Personal</label></div>
            <div>
            <input type='radio' name="flag" value="Official" className='mr-2' onChange={changeHandler}></input>
            <label>Official</label>
            </div>
           
        </div>
        </div>
        
        
        <button className=' px-8 py-3 bg-green-600 text-white font-bold ml-24 rounded-lg' onClick={create}>create</button>
    </div>
  )
}

export default TaskGenerator