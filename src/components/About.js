import React from 'react'


const About = () => {




  return (
    <div className=' flex flex-col items-center'>

    <img src="https://thumbs.dreamstime.com/b/watches-store-frankfurt-airport-22190857.jpg" alt='watch' className='my-3'></img>
    <div className='font-bold text-[28px]'>Who we are ?</div>
      <div className='flex w-[600px] justify-center py-4 font text-center text-[18px] text-gray-700'>
       We are Watch Galaxy, a leading online destination for watch enthusiasts. Our passion for timepieces drives us to curate a remarkable collection that showcases elegance, precision, and innovation. With a commitment to exceptional quality, our team carefully selects each watch to ensure it meets our rigorous standards. We pride ourselves on providing a seamless shopping experience, backed by outstanding customer service. Join us on a horological journey where style meets sophistication, and time becomes an art to be cherished.
      </div>
      <div className='font-bold text-[28px]'>Authorised Retailers</div>
      <div className='flex flex-wrap justify-center'><img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Brand_Logos-01_1024x.png?v=1613540103" alt=""></img>
      <img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Brand_Logos-32_1024x.png?v=1613570233" alt=""></img>
       <img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Brand_Logos-15_1024x.png?v=1613544412" alt=""></img>
       <img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Brand_Logos-31_1024x.png?v=1613540106" alt=""></img>
       <img src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Brand_Logos-16_1024x.png?v=1613540105" alt=""></img>
      </div>
          <div className='text-white font-bold cursor-pointer bg-red-700 p-2 mb-3 hover:bg-red-500'>More Partners</div>
    </div>
  )
}

export default About