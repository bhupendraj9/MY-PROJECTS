import React, { useContext, useEffect } from 'react'
import { MainContext } from '../contexts/MainContext'
import { toast } from 'react-hot-toast'

const Card = ({data}) => {
 const {cartdata,setcartdata,iscartEmpty,setiscartEmpty}= useContext(MainContext)

 const addToCart = (watch)=>{
    setcartdata((prevCartData) => [...prevCartData, watch]);
     setiscartEmpty(false);
     toast.success("Item Added to Cart")

 } //*this is learning of this project

  useEffect(() => {

    console.log("iscartempty:", iscartEmpty);
    console.log("cartdata.length:", cartdata.length);
  }, [cartdata]);

  return (
    <div >
      
        <div className='shd p-10 w-[300px]  flex flex-col items-center rounded-lg transition-all hover:scale-105 bg-white'>
            <img src={data.img}  alt="watch" className='object-contain m-10 w-[200px] h-[200px]'></img>
            <div className='font-bold text-[18px]'>{data.name}</div> {/*name */}
            <div>by {data.brand}</div> {/*name */}
            <div>{data.feature}</div> {/*name */}
            <div className='flex gap-2'>
                <div className='text-green-600 font-extrabold text-[17px]'>₹{data.price}</div>
                <div className='line-through text-red-600 font-bold'>₹{data.Regularprice}</div>
            </div> 
            <div onClick={()=>{addToCart(data)}} className='font-bold text-white bg-green-600 p-2 rounded-md mt-2 cursor-pointer'>Add to cart</div>
        </div>
    
    </div>
  )
}

export default Card