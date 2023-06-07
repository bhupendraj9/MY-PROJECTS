import React, { useState ,useContext} from 'react'
import { FaChevronRight ,FaChevronLeft} from 'react-icons/fa';
import { MainContext } from '../contexts/MainContext';

const Slider = () => {
    const {images} =useContext(MainContext);
   

    const[index,setindex]=useState(0);
    const [url,seturl]=useState(images[0].url);
    const next=()=>{
        setindex((index+1)%images.length)
        seturl(images[index].url);
        console.log(index)
      
    }
      const prev=()=>{
        if(index===0) setindex(images.length-1);
        else
        setindex((index-1)%images.length);
        seturl(images[index].url);
        console.log(index)
    }

    const autoSlider= ()=>{
        setTimeout(()=>{next()},20000);
    }
    autoSlider();
  return (
    <div>
        <div><img src={url} alt="watch" className='h-[80vh] w-[100vw]'></img></div>
        <div className='flex justify-between'>
             <div onClick={()=>{next()}}><FaChevronLeft className='text-white mt-[-270px] text-[50px] opacity-75'></FaChevronLeft></div>
            <div onClick={()=>{prev()}}><FaChevronRight className='text-white mt-[-270px] text-[50px] opacity-75'></FaChevronRight></div>
           
        </div>
    </div>
  )
}

export default Slider