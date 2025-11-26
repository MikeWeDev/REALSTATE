//import {VscSetting} from 'react-icons/vsc'
import { useState,useEffect } from "react"
import {IoArrowBack,IoArrowForward} from "react-icons/io5"

import './index.css'
function RealState() {
 const [currentIndex,setCurrentIndex]=useState(0);
 const nextSlide = ()=>{
  if(currentIndex === data.length-2){
    setCurrentIndex(0)
  }
  else{
    setCurrentIndex(currentIndex + 1)
  }
}
const prevSlide = () =>{
  if(currentIndex === 0){
   setCurrentIndex(data.length - 2)
  }
  else{
   setCurrentIndex(currentIndex -1)
  }
  
 }
 useEffect(()=>{
  const interval=setInterval(()=>{
    prevSlide();
    nextSlide();
  },3000);
  return () =>{
    clearInterval(interval)
  }
})
  return (
   <main  className="mb-24  bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe] rounded-[50%] " >
    <div className="  ">
        <div className=" w-[90%]  mt-[50px] mx-[30px] md:mx-[60px] px-3 flex flex-col md:flex-row justify-between items-center  ">
            <div className="w-[80%] md:[50%]  ">
                <p className="text-[#0c4737] md:text-xl text-lg font-medium">REAL ESTATE</p>
                <h1 className="text-3xl md:text-6xl    font-medium pt-3 pb-8 md:pb-12">Find a perfect home</h1>
                <p className="text-[#808080] text-base  pb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, architecto.
                </p>
               
            </div>
           
           <div 
           className="relative flex overflow-hidden 
            h-[300px] md:h-[400px] w-[70%] md:w-[50%] rounded-t-[100px] ">
           {
            data.map((items,index)=>(
             <img key={index} style={{transform:`translateX(-${currentIndex * 50}vw)`}}
              className="w-[100%] h-[100%] " src={items.img} />
                        
            ))
           }
          <span className="absolute top-[50%]">
            <button onClick={prevSlide}    className=" border-[2px]  text-[#43fff6]  border-[#bce6e4] rounded-full p-2">
               <IoArrowBack />
              </button>
          </span>
          <span className="absolute top-[50%] right-0">
            <button  onClick={nextSlide}   className=" border-[2px]  text-[#43fff6]  border-[#bce6e4] rounded-full p-2">
              <IoArrowForward />
            </button>
          </span>
        
           </div>
          </div>
          <div className="w-[70px] h-[70px] bg-[#bce6e4] rounded-full mt-10"></div>
        
    </div>
   <div className="flex overflow-hidden ">
   <div className="logo  p-2 w-[100%] flex justify-between gap-3 " >
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
    <img className="w-[120px] h-[70px] rounded-full " src="82833577_587038971846970_217931..png" alt="x" />
      </div>
    
   </div>
   
    
     
   </main>
  )
}

export default RealState
 
const data=[
  {
    img:"82833577_587038971846970_217931..png",
    id:1
  },
  {
    img:"OIP (1).png",
    id:2
  },
  {
    img:"OIP3.png",
    id:3
  },
  {
    img:"R4.png",
    id:4
  },
]