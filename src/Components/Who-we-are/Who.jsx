import { FaHome } from "react-icons/fa"

function Who() {
  return (
   <main className=" relative justify-between   gap-10  md:flex px-3 mb-[300px] md:pt-0 pt-8 
      w-full h-auto">
    <div className="md:w-1/2  pt-11">
      <p className="text-[#0c4f37] md:text-xl text-md font-medium">WHO ARE WE</p>
      <h1 className="md:text-4xl text-2xl font-medium py-3">
        Assisting indivisual in locating the appropriate real estate
      </h1>
      <p className="md:w-4/5 text-[#a5a5a5]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blandi
        tiis ipsam obcaecati amet quaerat ad porro nam odio dolorum libero?
      </p>
      <div className="block ">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 
        md:w-4/5 mt-10 ">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
          <span>
            <h1 className="text-[#0c4f37] text-md font-medium">
              Lorem ipsum dolor sit amet.</h1>
            <p className="text-[#a5a5a5] w-4/5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </span>
        </div>

        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 
        md:w-4/5 md:block sm:hidden mt-6">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
          <span>
            <h1 className="text-[#0c4f37] text-md font-medium">
              Lorem ipsum dolor sit amet.</h1>
            <p className="text-[#a5a5a5] w-4/5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </span>
        </div>
      </div>
    </div>
    
    <div className="md:w-1/2  absolute  flex gap-4 md:mt-0 mt-10 right-0 md:h-auto">
      <img src="/82833577_587038971846970_217931..png" alt="" 
      className="rounded-3xl w-1/2 h-full md:mt-[70%] shadow-md object-cover "/>
    
     <div className="w-1/2 h-[300px] md:h-[500px] flex-col relative top-20">
      <img src="/82833577_587038971846970_217931..png" alt="" 
      className="rounded-3xl mb-5  w-full h-3/5 shadow-md object-cover hidden md:flex "/>
    <img src="/82833577_587038971846970_217931..png" alt="" 
      className="rounded-3xl w-full h-[80%] md:h-2/5 shadow-md object-cover  "/>
    <button className="bg-gradient-to-r from-[#bce6e4] to-[#f8fdfe] rounded-full h-12 w-12 cursor-auto 
    absolute bottom-[-19px] right-0 "> </button>
     </div>
    </div>
   </main>
  )
}

export default Who
