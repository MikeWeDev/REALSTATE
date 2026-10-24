import { useState } from "react";
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleNavigation = (ref) => {
    scrollTo(ref);
    setIsMobileMenuOpen(false);
  };

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
        <div className="container mx-auto px-4 flex items-center justify-between relative">
          
          {/* Logo */}
          <div className='flex items-center'>
            <TbHomeCheck size={30} className='text-[#0ca39a]'/>
            <span className='text-2xl ml-2 font-extrabold text-[#1f2937] tracking-wider'>
              MIKE
            </span>
          </div>

          {/* Navigation Links */}
          <ul
            id="primary-navigation"
            className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 flex-col gap-y-4 bg-white px-6 py-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-x-8 md:bg-transparent md:p-0 md:shadow-none list-none`}
          >
            <li 
              onClick={() => handleNavigation(realStateRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(realStateRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Home
            </li>

            <li 
              onClick={() => handleNavigation(whoRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(whoRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              About
            </li>

            <li 
              onClick={() => handleNavigation(serviceRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(serviceRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Services
            </li>

            <li 
              onClick={() => handleNavigation(agentRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(agentRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Agents
            </li>
              <li 
              onClick={() => handleNavigation(reviewRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(reviewRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Blog
            </li>


            <li 
              onClick={() => handleNavigation(listingRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(listingRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Listing
            </li>

            <li 
              onClick={() => handleNavigation(neighbourhoodRef)}
              onKeyDown={(e) => e.key === "Enter" && handleNavigation(neighbourhoodRef)}
              role="button"
              tabIndex={0}
              className="font-medium text-gray-700 hover:text-[#0ca39a] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] focus-visible:ring-offset-2 rounded"
            >
              Neighborhood
            </li>

            <li className="flex gap-5 border-t border-gray-100 pt-4 md:hidden">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-600 hover:text-[#0ca39a]">
                LOGIN
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-[#0ca39a] hover:text-[#098e85]">
                REGISTER
              </Link>
            </li>

          
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-x-4">
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

          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-[#0ca39a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] rounded"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;
