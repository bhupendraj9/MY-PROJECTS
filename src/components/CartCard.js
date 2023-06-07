import React from 'react'
import { MainContext } from '../contexts/MainContext'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
const CartCard = ({data}) => {
     const {cartdata,setcartdata,iscartEmpty,setiscartEmpty,calculate}= useContext(MainContext)
   
     const removeItem = (watchId) => {
  setcartdata((prevCartData) => {
    const updatedCartData = prevCartData.filter((item) => item.id !== watchId);
    setiscartEmpty(updatedCartData.length === 0); 
    return updatedCartData; 
   
  });
   toast.error("Item removed");
   calculate();
};

  return (
    <div>
        <div className='shd p-10 w-[300px]  flex flex-col items-center rounded-lg transition-all hover:scale-105 bg-white'>
            <img src={data.img}  alt="watch" className='object-contain m-10 w-[200px] h-[200px]'></img>
            <div className='font-bold text-[18px]'>{data.name}</div> {/*name */}
            <div>by {data.brand}</div> {/*name */}
            <div>{data.feature}</div> {/*name */}
            <div className='flex gap-2'>
                <div className='text-green-600 font-extrabold text-[17px]'>₹{data.price}</div>
                <div className='line-through text-red-600 font-bold'>₹{data.Regularprice}</div>
            </div> 
            <div onClick={()=>{removeItem(data.id)}} className='font-bold text-white bg-red-600 p-2 rounded-md mt-2 cursor-pointer'>Remove Item</div>
        </div>
    </div>
  )
}

export default CartCard