import React, { useContext } from 'react'
import Slider from './Slider'
import { MainContext } from '../contexts/MainContext'
import {BiCheckCircle} from "react-icons/bi"
import {FaClock,FaTruck,FaStore} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Home = () => {

   const {collections,filterfemale,filtermale}=useContext(MainContext);

   console.log(collections)

  return (
    <div>
      <Slider></Slider>
      <div>
        <div className='px-10 py-3 flex justify-center gap-10'>
        <div className='flex gap-1 font-bold text-[18px] items-center'>
           <img src="https://cdn.shopify.com/s/files/1/0137/0292/2286/files/growth.gif?v=6149664055454190024" className='w-[100px] ' alt='b'></img>
          <div>
            Growing <br></br><span className='text-red-600'>Popularity</span>
          </div>
        </div>

        <div className='flex gap-1 font-bold text-[18px] items-center'>
          <img src="https://cdn.shopify.com/s/files/1/0137/0292/2286/files/stopwatch.gif.gif?34546" className='w-[100px]'  alt='b'></img>
           <div>
            Quick <br></br><span className='text-red-600'>Response</span>
          </div>
        </div>

        <div className='flex gap-1 font-bold text-[18px] items-center'>
          <img src="https://cdn.shopify.com/s/files/1/0137/0292/2286/files/review.gif?v=6281934118567879272" className='w-[100px]'  alt='b'></img>
           <div>
            2k+ Product <br></br><span className='text-red-600'>Reviews</span>
          </div>
        </div>

        <div className='flex gap-1 font-bold text-[18px] items-center'>
          <img src="https://media.tenor.com/-QbmAt_eXhYAAAAj/store-website.gif" className='w-[100px]'  alt='b'></img>
           <div>
            24/7 online <br></br><span className='text-red-600'>Service</span>
          </div>
        </div>
          
        <div className='flex gap-1 font-bold text-[18px] items-center'>
          <img src="https://media.tenor.com/G-6HyJYF6kEAAAAj/buy-swiss-watches-online.gif" className='w-[100px]'  alt='b'></img>
           <div>
            Large <br></br><span className='text-red-600'>Variety</span>
          </div>
        </div>

        </div>
      </div>

      <div className='flex justify-center gap-4 mt-4'>
      <NavLink to= "/watches" onClick={()=>{filterfemale()}}><img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Women1_jpg_765x.jpg?v=1649758267"  className='w-[600px] h-[298] cursor-pointer'  alt='b'></img>
</NavLink>
      <NavLink to ="/watches" onClick={()=>{filtermale()}}><img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/men1_jpg_765x.jpg?v=1649758283" className='w-[600px] h-[298] cursor-pointer'  alt='b'></img>
</NavLink>
   
      </div>

     <div className='my-20 mb-20'>
      <div className='font-bold underline text-[30px] text-center mb-5 '>Timeless Elegance: Discover Exquisite Timepieces at Our Online Watch Store</div>
      <div className='font-semibold mx-40 text-center text-gray-600 my-5 mb-14'>      
Welcome to our online watch store, where time meets elegance. Explore our curated collection of exquisite timepieces that embody the perfect fusion of style and craftsmanship. From classic designs to contemporary marvels, our watches are a testament to enduring beauty. Each timepiece tells a unique story, reflecting individuality and sophistication. Experience the art of precision with our unrivaled selection, designed to complement your every moment. Shop with confidence and immerse yourself in a world of timeless luxury. Discover the watch that resonates with your personal style and becomes a cherished companion for a lifetime.
      </div>


      <div>

         <div className='flex justify-evenly gap-3 bg-gray-900 p-10 my-4 items-baseline mt-5'>

          <div className=' flex flex-col justify-center items-center'>
          <BiCheckCircle className='text-[50px] text-white mb-1.5'></BiCheckCircle>
          <div className='font-semibold text-white'>100% ORIGINAL</div>
           <div className='text-[13px] w-[200px] text-center text-white'>All products are original and go through strict quality check</div>
          </div>
          
          <div className=' flex flex-col justify-center items-center'>
          <FaClock className='text-[43px] text-white mb-3.5'></FaClock>
          <div className='font-semibold text-white'>EXCHANGE POLICY</div>
           <div className='text-[13px] w-[200px] text-center text-white'>Use our hassel free method to exchange.</div>
          </div>

          <div className=' flex flex-col justify-center items-center'>
          <FaTruck className='text-[43px] text-white mb-3.5'></FaTruck>
          <div className='font-semibold text-white'>FREE DELIVERY</div>
           <div className='text-[13px] w-[200px] text-center text-white'>Shipping in India is free.</div>
          </div>

          <div className=' flex flex-col justify-center items-center'>
          <FaStore className='text-[43px] text-white mb-3.5'></FaStore>
          <div className='font-semibold text-white'>24 MONTH WARRENTY</div>
           <div className='text-[13px] w-[200px] text-center text-white'>Authentic warrenty of 24 months</div>
          </div>

         </div>

       <div className='font-bold text-[25px] text-center mt-6 mb-4'>Our Trending Collections</div> 
       <div className='flex justify-center'>
        {
          collections.map((watch,i)=>{return (<img src={watch.img} alt="" key={i} className='w-[200px]'></img>)})
        }
       </div>
      
      <div className='flex justify-center'>
      <NavLink to="/watches" className=' bg-red-500 w-[120px] text-center p-2 font-bold text-white mx-auto mt-5 cursor-pointer hover:bg-red-600'>Discover All</NavLink>
      </div>
      </div>
       
     </div>
      


      </div>
  )
}

export default Home