import { createContext, useState } from "react";
import jsondata from '../jsondata'

export const MainContext=  createContext();

const ContextFunction = ({children})=>{
     
    const images= [
  {url:'https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Home_Page_Banner_desktop_G-Shock.jpg?v=1613552677'},
  {
    url:'https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwc78da1ea/2022/HO22/set_12152022_global/1215_DGP_Watches_Hero1_desktop.jpg'
  },
  {
    url:'https://gshock.casio.com/content/casio/locales/in/en/brands/gshock/_jcr_content/root/responsivegrid/carousel/item_1663723241517_c.casiocoreimg.jpeg/1669102140704/banner-flare-red-pc.jpeg',
  },
  {
    url:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ultima-connect-max-desktop2199_1400x.jpg?v=1685715903',
  },
  {
    url:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/purple_desktop_1400x.jpg?v=1685006383',
  },
   {
     url:'https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Artboard_6_2bd7c068-b6a3-4795-80fc-6b3ff71bdf29_1759x.jpg?v=1685774424'
   }
,
   {
    url:'https://cdn.shopify.com/s/files/1/0046/3454/2129/collections/fossile-cat.jpg?v=1641811326'
   },
   {
    url:'https://cdn.shopify.com/s/files/1/0046/3454/2129/collections/Casio_1920_x_667_px.jpg?v=1607671510'
   }
]
   
    const [data,setdata] = useState(jsondata);
    const [display,setdisplay]= useState(data);
    const collections = [data[0],data[6],data[14],data[1],data[19]];
    const [cartdata,setcartdata]= useState([]);
    const  [iscartEmpty,setiscartEmpty]=useState(true);
    const  [isLogin,setisLogin]=useState(false);
      const [total,settotal]=useState(0);
  const [count,setcount] = useState(0);
   const [showSummary,setshowSummary]=useState(false);

    const filtermale = ()=>{
     setdisplay(data);
     setdisplay((prevData) => {
    const updatedData = prevData.filter((item) => item.gender === "male");
    return updatedData; 
  });
  console.log("filtered by male category")
  }

   const filterfemale = ()=>{
      setdisplay(data);
     setdisplay((prevData) => {
    const updatedData = prevData.filter((item) => item.gender === "female");
    return updatedData; 
  });
  console.log("filtered by female category")
  }

   const filteruni = ()=>{
      setdisplay(data);
     setdisplay((prevData) => {
    const updatedData = prevData.filter((item) => item.gender === "unisex");
    return updatedData; 
  });
  console.log("filtered by unisex category")
  }

  const calculate =()=>{
  let sum=0;
  let temp=0;
   cartdata.forEach(element => {
    sum+=element.price;
    temp+=1;
  });
  settotal(sum);
  setcount(temp);

}
    
     const values=
      {
        images,
        data,
        setdata,
        collections,
        cartdata,
        setcartdata,
        iscartEmpty,
        setiscartEmpty,
        display,
        setdisplay,
        filtermale,
        filterfemale,
        filteruni,
        calculate,
        total,
        settotal,
        count,
        setcount,
        showSummary,
        setshowSummary,
        isLogin,
        setisLogin
      }
     
    

    return (<MainContext.Provider value={values}>
        {children}
    </MainContext.Provider>)
}

export default ContextFunction;