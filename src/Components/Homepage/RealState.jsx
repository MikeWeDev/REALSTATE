import React, { useState, useEffect } from "react";
// --- NEW: React Icons Imports for Professional Logos ---
import { FaBuilding, FaCity, FaRegHandshake, FaTree, FaHome } from 'react-icons/fa';

// Removed problematic external icon imports (IoArrowBack, IoArrowForward) and replaced with inline SVGs.

// Updated data array (image slider data remains the same)
const data = [
  { img: "82833577_587038971846970_217931..png", id: 1 },
  { img: "OIP (1).png", id: 2 },
  { img: "OIP3.png", id: 3 },
  { img: "R4.png", id: 4 },
];

// --- UPDATED: Professional Logo Data with Real Names and React Icons ---
const defaultLogoData = [
  { text: "GreenScape Realty", color: "text-green-600", Icon: FaTree },
  { text: "Apex Property Group", color: "text-blue-700", Icon: FaBuilding },
  { text: "Urban Horizons", color: "text-indigo-600", Icon: FaCity },
  { text: "TrustEstate Partners", color: "text-red-500", Icon: FaRegHandshake },
  { text: "Modern Home Finders", color: "text-yellow-600", Icon: FaHome },
];

// Replicated logo data for seamless infinite scrolling
const logoData = [...defaultLogoData, ...defaultLogoData];


// --- NEW: Dynamic Logo Icon Component ---
const LogoIcon = ({ Icon, colorClass }) => (
    <Icon className={`w-8 h-8 ${colorClass} mr-2`} />
);


// Inline SVG components for navigation arrows (unchanged)
const ArrowBack = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowForward = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);


// The main component
const RealState = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Logic to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      // Only call nextSlide for seamless forward auto-scrolling
      nextSlide();
    }, 4000); // 4 seconds interval

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures it runs only once

  // Custom CSS for the infinite horizontal logo scroll animation (unchanged)
  const scrollingStyle = `
    .logo-scroll-container {
      animation: slide-in 25s linear infinite;
    }
    @keyframes slide-in {
      0% {
        transform: translateX(0%);
      }
      100% {
        /* Translate half the content's width (since we duplicated the list) */
        transform: translateX(-50%); 
      }
    }
  `;

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* Inject custom styles for the scrolling animation */}
      <style dangerouslySetInnerHTML={{ __html: scrollingStyle }} />

      {/* --- 1. Hero Section: Content & Slider (unchanged) --- */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content Block */}
          <div className="w-full lg:w-1/2 p-4">
            <p className="text-[#0ca39a] text-lg font-semibold uppercase tracking-widest mb-2">
              REAL ESTATE
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Find Your Perfect <span className="text-[#0ca39a]">Home</span>
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto. Discover curated listings designed for your future.
            </p>
            <button className="px-8 py-3 text-lg font-bold text-white bg-[#0ca39a] rounded-full shadow-lg shadow-[#0ca39a]/50 hover:bg-[#098e85] transition duration-300 transform hover:scale-[1.02]">
              Explore Listings
            </button>
          </div>
          
          {/* Slider Block */}
          <div className="w-full lg:w-1/2 relative shadow-2xl rounded-2xl overflow-hidden aspect-video">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {data.map((item, index) => (
                <img 
                  key={item.id} 
                  className="w-[100%] h-[100%] flex-shrink-0 bg-gray-100" 
                  src={item.img} 
                  alt={`Real Estate Slide ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
            
            {/* Slider Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center p-4">
              <button 
                onClick={prevSlide} 
                className="bg-white/30 backdrop-blur-sm text-white hover:text-[#0ca39a] p-3 rounded-full transition duration-300 hover:bg-white/80 shadow-lg"
              >
                <ArrowBack />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
              <button 
                onClick={nextSlide} 
                className="bg-white/30 backdrop-blur-sm text-white hover:text-[#0ca39a] p-3 rounded-full transition duration-300 hover:bg-white/80 shadow-lg"
              >
                <ArrowForward />
              </button>
            </div>
            
            {/* Image Counter Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {data.map((_, index) => (
                    <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-[#0ca39a] w-6' : 'bg-white/70'
                        }`}
                    ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* --- End Hero Section --- */}
      
      {/* --- 2. Logo/Brand Scrolling Bar (UPDATED to use React Icons) --- */}
      <div className="bg-white py-6 border-t border-b border-gray-100 overflow-hidden">
        <div className="flex w-fit logo-scroll-container">
          {/* Logo content is duplicated for seamless infinite scroll effect */}
          {logoData.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center mx-8 my-2 flex-shrink-0"
            >
              {/* --- NEW: Use the dynamic LogoIcon component with the specified Icon --- */}
              <LogoIcon Icon={logo.Icon} colorClass={logo.color} /> 
              <span className={`text-xl font-bold text-gray-700 transition duration-300 hover:${logo.color.replace('text-', 'text-')}`}>
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* --- End Logo Bar --- */}

    </main>
  );
};

export default RealState;