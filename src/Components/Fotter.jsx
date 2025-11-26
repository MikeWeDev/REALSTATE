import {TbHomeCheck} from "react-icons/tb"
function Fotter() {
    return (
     <section className="Fotter bg-[#e6edeb]">
    <div className=" flex items-center justify-between flex-wrap gap-4">
      <div className="left w-[40%]  sm:w-[30%]">
      <h1 className="text-[40px] font-bold">
      <span className="icon flex">
               <TbHomeCheck size={35} className='bg-[#0ca39a] text-black px-2 rounded-full'/>
               <span className='text-xl m-1 font-bold '>MIKE</span> 
              </span>
        </h1>
      <p className="text-[10px] font-semibold my-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
           veritatis obcaecati facilis cupiditate quisquam incidunt saepe cum ex rerum ducimus?
      </p>
      <div className="soicial-icons flex ">
      <svg width='30px'  className="ml-2 bg-blue-700 rounded-full"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
      <svg width='30px'  className="ml-2 bg-red-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
      <svg width='30px'  className="ml-2 bg-blue-200 rounded-full"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
      <svg width='30px'  className="ml-2 bg-red-600  rounded-full"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
      </div>
      </div>
     
      <div className="center w-[40%]  sm:w-[30%]">
        <h1 className="mb-3 text-[20px] font-bold ">Usefull Links</h1>
        <div className="links  ">
             <li className="list-none  m-0 p-0">Home</li>
              <li className="list-none m-0 p-0">About</li>
              <li className="list-none m-0 p-0">Men Fashion</li>
              <li className="list-none m-0 p-0">Women Fashion</li>
              <li className="list-none m-0 p-0">Assisories</li>
              <li className="list-none m-0 p-0">order</li>
        </div>
      </div>
     
     
      <div className="right w-[40%]  sm:w-[30%]">
      <h1 className="mb-3 text-[20px] font-bold ">Contact</h1>
      <div className="contact flex flex-col ">
      <p className="mb-3 font-semibold text-[15px]">
        A.A ethiopia,622 path plaza 
      </p>
      <p  className="mb-3 font-semibold text-[15px]">
          + 25 15 345 12 345
      </p>
      <p  className="mb-3 font-semibold text-[15px]">
          mikyasnegash2@gmail.com
      </p>
      </div>
      </div>
     </div>
     <section className="bg-black text-[#7b7a7a] xl:text-base text-sm">
      <div className="container mx-auto px-3 lg:flex justify-between items-center">
    <p>2024 Mike - All right reserved</p>
     <ul className="flex lg:flex-row flex-wrap lg-justify-normal justify-center">
        <li className="cursor-pointer">Terms and condition</li>
        <li className="cursor-pointer">Privacy policy</li>
        <li className="cursor-pointer">Disclaimer</li>
     </ul>
      </div>
  </section>
    
     </section>
    )
  }
  
  export default Fotter 