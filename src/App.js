import { startTransition, useEffect, useState } from "react";
import "./App.css";
import { Toast, toast } from "react-hot-toast";

import { FaTimesCircle} from 'react-icons/fa';
function App() {
    

   let temp="";
   const [status,setstatus]=useState(false);
   const [data,setdata]=useState([]);
   function changeHandler(event)
   {
    event.target.name=event.target.value;
    console.log(event.target.value);
    temp=event.target.value;
   }
   
  
  
   function clickHandler()
   {
    console.log(temp);
    if(temp!=="")
    setdata([...data,temp])
    toast.success("New item added");
    
   }
  

  function clearitem(it)
  {
    setdata(data.filter((item)=>item!=it));
    console.log(data);
  toast.error("Item removed successfully")
  }
    useEffect(()=>{if(data.length!==0) setstatus(true); else setstatus(false)},[data])
   console.log(data)
   
  return (
   <div className="flex flex-col justify-start items-center h-[100vh] gap-5 mt-20">
    <div className="text-center font-bold text-[2rem] text-gray-800">WRITE YOUR NOTES HERE</div>
    <div className="flex gap-3">
      <input type="text" name="writearea" placeholder="Add the List item" className="bg-gray-100 outline-green-200 p-2 rounded-lg min-w-[300px] " onChange={changeHandler}></input>
      <button className="bg-green-400 text-white font-bold p-2 px-4 rounded-lg " onClick={clickHandler}>Add note</button>
    </div>
    <div> { status &&
      <div className="flex flex-col items-center">
    
      <div className="font-bold text-gray-900 uppercase">your list</div>
      <div className="flex flex-col gap-2">{data.map((item,index)=>{return <div key={index} className="flex justify-between bg-green-200 p-3 rounded-lg w-[300px]"><div>{item}</div><button className="text-red-600" onClick={()=>{clearitem(item)}}><FaTimesCircle></FaTimesCircle></button></div>})}</div>
      </div>
      
    }</div>
   
  </div>
  );
}

export default App;
