import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskGenerator from "./components/TaskGenerator";
import Tasks from "./components/Tasks";
import { Toast, toast } from "react-hot-toast";

function App() {
  const [homeDikha , sethomeDikha]=useState(true);
   const [TaskArray,setTaskArray]=useState([]) 
   const [TaskData,setTaskData]=useState({
 
    data:"",
    date:"",
    time:"",
    flag:""
   });
  
   function changeHandler(event)
   { 
 
      const {name,value,type,checked}= event.target;
     
      setTaskData(prevTaskData=>{ return {
        ...prevTaskData,  [name]: type ==="checkbox" ?checked : value ,
     
      }})
   }
   const [id,setid]=useState(0);
   function create()
   {
       setid(id+1);
      const record = {
        id:id,
        data:TaskData.data,
        date:TaskData.date,
        time:TaskData.time,
        flag:TaskData.flag

      }
      console.log(TaskData)
      console.log(TaskArray)
      TaskArray.push(record)
      toast.success("Task Added")
   }
  
   function markDone(id)
   {
    setTaskArray(TaskArray.filter(tasks=>tasks.id !==id))
    toast.success("item marked done")
   console.log("item done")
   }
   

 
  return (
    
 
  <div>{homeDikha ? 
   <div className="flex flex-col items-center">
   
   <Navbar TaskArray={TaskArray} homeDikha={homeDikha} sethomeDikha={sethomeDikha}></Navbar>
  <div className=" flex justify-center mt-3 font-bold text-[24px]">📝Stay Organized and Efficient</div>
  <TaskGenerator TaskData={TaskData} setTaskData={setTaskData} changeHandler={changeHandler} create={create} TaskArray={TaskArray}></TaskGenerator>
  </div>
  : <Tasks homeDikha={homeDikha} sethomeDikha={sethomeDikha} TaskArray={TaskArray} markDone={markDone}></Tasks>}</div>
  );
}

export default App;
