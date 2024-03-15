import { useState } from "react";
import {IoArrowBack,IoArrowForward} from "react-icons/io5"

function Latest() {
    const [currentIndex,setCurrentIndex]=useState(0);
    const nextSlide = ()=>{
     if(currentIndex === data.length-1){
       setCurrentIndex(0)
     }
     else{
       setCurrentIndex(currentIndex + 1)
     }
   }
   const prevSlide = () =>{
     if(currentIndex === 0){
      setCurrentIndex(data.length - 1)
     }
     else{
      setCurrentIndex(currentIndex -1)
     }
     
    }
   
  return (
    <main className="container bg-gradient-to-r from-[#bce6e4] w-[98vw] to-[#f8fdfe] rounded-[50%] mx-[10px] px-3 mt-[0px]">
        <div className="md:flex justify-center items-center relative mb-[100px]">
            <div className="">
              <button className="w-16 h-16 rounded-full bg-[#bce6e4] ml-[-100px]"></button>
                <h1 className="text-[#0c4f37] text-[25px] uppercase">
                    checkout our new
                </h1>
                <h1 className="md:text-4xl py-3 text-2xl font-bold  uppercase">
                    Latest listing property
                </h1>
             <p className="text-[#a5a5a5] md:text-base text-sm md:w-3/5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             </p>
            </div>
           
        </div>
        <section className="mt-8  ">
          <div className="w-[96vw] h-[100vh]  overflow-hidden  relative ">
         
            <div style={{transform:`translateX(-${currentIndex * 45}vw)`}} className="img-cont  flex relative
              md:w-[1700px] w-[1500px]   gap-5">
                {data.map((img,index)=>{
                    return(     
                        <div  key={index} className="w-[600px]">
         <img src={img.img} alt=""
       className="w-[500px]  h-[300px] md:h-[400px] rounded-t-[200px]" />
       <div className="info  absolute bottom-0 bg-[rgba(0,0,0,0.3)] text-white ">
        <h1>{img.price}</h1>
        <h2>Lorem ipsum dolor si.</h2>
        <p>3 bedroom 3 bath</p>
       </div>
      
  
                        </div>  
     
      )     
    })}
   </div>
            <div className="w-[96vw] h-[100px] flex justify-between absolute top-[30%]">
            <span className="">
            <button onClick={prevSlide}   className=" border-[2px]  text-red-700  border-red-500 rounded-full p-2">
              <IoArrowBack />
            </button>
          </span>
          <span className=" ">
            <button  onClick={nextSlide}  className="border-2 text-red-700  border-red-500 rounded-full p-2">
               <IoArrowForward />
               </button>
          </span>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Latest

const data=[
    {
      img:"82833577_587038971846970_217931..png",
      id:1,
      price:"5,900$"
    },
    {
      img:"OIP (1).png",
      id:2,
      price:"5,900$"

    },
    {
      img:"OIP3.png",
      id:3,
      price:"5,900$"

    },
    {
      img:"R4.png",
      id:4,
      price:"5,900$"

    },
    {
        img:"OIP3.png",
        id:5,
        price:"5,900$"

      },
      {
        img:"R4.png",
        id:6,
        price:"5,900$"

      },
  ]