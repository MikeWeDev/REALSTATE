import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

function NavBar({ 
  scrollTo, 
  realStateRef, 
  whoRef, 
  serviceRef, 
  agentRef,
  listingRef,
  neighbourhoodRef,
  reviewRef
}) {
  return (
    <nav className='sticky top-0 z-50 shadow-lg'>
      
      {/* Top Bar */}
      <div className='hidden sm:block bg-[#135e59] text-white text-sm py-2'>
        <div className='container mx-auto px-4 flex items-center justify-between'>
          
          <span className='flex items-center gap-x-2 opacity-90'>
            <GoLocation className="text-[#0ca39a]"/>
            <p className="hidden md:block">Addis Ababa, Churchill St. 24, 5th Floor</p>
          </span>
          
          <div className='flex items-center gap-x-6'>
            <a href="tel:+251564789132" className='flex items-center gap-x-2 hover:text-[#0ca39a] transition duration-300'>
              <FaPhone className="text-[#0ca39a]"/>
              <span>+251 564 789 132</span>
            </a>
            <a href="mailto:mikyasnegash2@gmail.com" className='hidden lg:flex items-center gap-x-2 hover:text-[#0ca39a] transition duration-300'>
              <FaRegEnvelope className="text-[#0ca39a]"/>
              <span>mikyasnegash2@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white p-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className='flex items-center'>
            <TbHomeCheck size={30} className='text-[#0ca39a]'/>
            <span className='text-2xl ml-2 font-extrabold text-[#1f2937] tracking-wider'>
              MIKE
            </span>
          </div>

          {/* Navigation Links */}
          <ul className='hidden md:flex items-center gap-x-8 list-none'>
            <li 
              onClick={() => scrollTo(realStateRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(realStateRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Home
            </li>

            <li 
              onClick={() => scrollTo(whoRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(whoRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              About
            </li>

            <li 
              onClick={() => scrollTo(serviceRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(serviceRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Services
            </li>

            <li 
              onClick={() => scrollTo(agentRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(agentRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Agents
            </li>
              <li 
              onClick={() => scrollTo(reviewRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(reviewRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Blog
            </li>


            <li 
              onClick={() => scrollTo(listingRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(listingRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Listing
            </li>

            <li 
              onClick={() => scrollTo(neighbourhoodRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(neighbourhoodRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Neighborhood
            </li>

          
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-x-4">
           <Link
    to="/login"
    className='text-sm font-semibold text-gray-600 hover:text-[#0ca39a] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded'
  >
    LOGIN
  </Link>
             <Link
    to="/register"
    className='bg-[#0ca39a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#098e85] transition duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
  >
    REGISTER
  </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;
