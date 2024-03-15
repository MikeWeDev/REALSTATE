import {FaBars,FaPhone,FaRegEnvelope} from 'react-icons/fa'
import {GoLocation} from "react-icons/go"
import {TbHomeCheck} from "react-icons/tb"
//import {IoPersonCircleOutline} from "react-icons/io"
function NavBar() {
  return (
    <nav className='sticky top-0 z-50 ' >
       <div className=':block  bg-[#0ca39a] text-white py-2'>
        <div className='container mx-auto flex  items-center justify-between px-2  '>
            <span className='flex items-center gap-x-1 '>
          <GoLocation />
          <p className="text-sm">Addis,Ababa churchil strret 24 ,5t</p>
            </span>
            <div>
                <span className='flex items-center gap-x-1' >
             <FaPhone />
             +251 564 789 132
                </span>
                <span className='flex items-center gap-x-1'>
           <FaRegEnvelope />
           mikyasnegash2@gmail.com
                </span>
            </div>
        </div>
       </div>

     <div className="bg-white p-4 ">
        <div className=" mx-[0px] flex flex-wrap items-center justify-between ">
         <ul className='flex  items-start gap-x-4 list-none  transform-none
        translate-y-[-50%] gap-y-o '>
            <button className='bg-[#0ca39a] text-black px-2 py-2 rounded-full'>Home</button>
            <li className="py-2 flex font-medium items-center leading-sung">About</li>
            <li className="py-2 flex font-medium items-cente  leading-sungr">Services</li>
            <li className="py-2 flex font-medium items-center leading-sung">Listing</li>
            <li className="py-2 flex font-medium items-center leading-sung">Blogs</li>
           
            </ul>
        
        <div className=' translate-x-[-50%]   flex'>
              <span className="icon flex">
               <TbHomeCheck size={35} className='bg-[#0ca39a] text-black px-2 rounded-full'/>
               <span className='text-xl m-1 font-bold '>MIKE</span> 
              </span>
             </div> 
        <div className="  flex">
        <span className="button">
                <button className='text-md '>
                  <span className='bg-[#0ca39a] text-black px-2 rounded-full'>
                    LOGIN</span>/RIGESTER</button>
              </span>
        </div>

        </div>
     </div>
    
    </nav>
  )
}
 
export default NavBar
