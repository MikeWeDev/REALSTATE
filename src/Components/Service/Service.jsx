import {IoSearch} from "react-icons/io5"
import {FaHouse} from "react-icons/fa6"
import {PiBed} from "react-icons/pi"


function Service() {
  return (
    <div className=" bg-[rgba(0,0,0,0.1)]  w-[98vw] mt-10 md:mt-20  mb-20 py-[100px] rounded-t-[50px] rounded-l-[100px]">
      <div className="container  mx-auto px3 text-center">
         <p className="uppercase text-[#0c4f37] text-xl py-8">our service </p>
         <p className="text-4xl font-medium">
          Lorem ipsum dolor sit amet.
         </p>
         </div>
      <div className="box-cont gap-y-14 flex md:flex-row flex-col w-[100vw]  items-center  justify-between mt-[100px] ">
      <div className="box w-[300px] h-[300px] bg-white shadow-md" >
        <div className="img h-[40%] flex justify-center mb-5 ">
       <span className="text-5xl mt-10 border-[2px]
         rounded-full p-3 bg-[#0c4f37]">  
        <IoSearch  className="text-white"/></span> 
        </div>
        <div className="title h-[20%] text-center font-bold  ">
        Buy a new house
        </div>
        <div className="discri h-[30%] text-center text-[#333]">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Vitae reprehenderit eos.
        </div>
      </div>

      <div className="box w-[300px] h-[300px]  bg-white shadow-md  ">
        <div className="img h-[40%] flex justify-center  mb-5">
       <span className="text-5xl mt-10 border-[2px]
         rounded-full p-3 bg-[#0ca39a]">  
        <FaHouse  className="text-white"/></span> 
        </div>
        <div className="title h-[20%] text-center font-bold ">
        Buy a new house
        </div>
        <div className="discri h-[40%] text-center text-[#333]">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Vitae reprehenderit eos.
        </div>
      </div>

      <div className="box w-[300px] h-[300px]  bg-white shadow-md ">
        <div className="img h-[40%] flex justify-center  mb-5 ">
       <span className="text-5xl mt-10 border-[2px]
         rounded-full p-3 bg-[#0c4f37]">  
        <PiBed className="text-white"/></span> 
        </div>
        <div className="title h-[20%] text-center font-bold ">
        Buy a new house
        </div>
        <div className="discri h-[40%] text-center text-[#333]">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Vitae reprehenderit eos.
        </div>
      </div>
      </div>
    </div>
  )
}

export default Service
