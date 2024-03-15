import './Review.css'
import { useState,useEffect } from 'react';
import {IoArrowBack,IoArrowForward} from "react-icons/io5"
function Review() {
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
       <section className="user-review  relative   ">
        
      <div className="slider  ">
        <div className="contain " style={{transform:`translateY(-${currentIndex * 90}%)`}} >

            {data.map((iteam)=>(
                <>
                  <div className="review-box">
   <div className="img ">
   <img src={iteam.img} />

   </div>
  
<h3>{iteam.name}</h3>

<p>
 {iteam.position}
</p>

<div className="stars translate-x-[10%]">
  <i className="fa-solid fa-star"></i>
  <i className="fa-solid fa-star"></i>
  <i className="fa-solid fa-star"></i>
  <i className="fa-solid fa-star-half-stroke"></i>
  <i className="fa-solid fa-star-half-stroke"></i>
</div>
</div>
                </>
 
            ))}
       
        </div>
 
</div>
<div className=" h-[70%] hidden  md:flex  p-10 flex-col absolute top-0 w-[50%]  bg-gradient-to-r from-[#b8c7c6] to-[#f8fdfe] ">
<div className="heading  ">
        <p className="pf text-sm">TESTIMONIALS</p>
       <p className="ps text-3xl">
        LOOK WHAT OUR CUSTOMER SAYS !
       </p>
       <p className='font-bold ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente?</p>
        </div>
        <div className="direction flex justify-between  ">
        <span className="">
            <button onClick={prevSlide}   className=" border-[2px]  text-teal-700  border-teal-900 rounded-full p-2">
              <IoArrowBack />
            </button>
          </span>
          <span className=" ">
            <button  onClick={nextSlide}  className="border-2 text-teal-700  border-teal-900 rounded-full p-2">
               <IoArrowForward />
               </button>
          </span>
        </div>
          
            </div>

 </section>
   
  )
}

export default Review
const data=[
    {
      img:"82833577_587038971846970_217931..png",
      id:1,
      name:"Sam J",
      position:"SEO AND FOUNDER"
    },
    {
      img:"OIP (1).png",
      id:2,
      name:"MIKE N",
      position:"REAL STATE DEVELOPER"

    },
    {
      img:"OIP3.png",
      id:3,
      name:"JODI J Appleby",
      position:"BUYERS AGENT"

    },
    {
        img:"OIP3.png",
        id:3,
        name:"JODI J Appleby",
        position:"BUYERS AGENT"
  
      },
   
  ]