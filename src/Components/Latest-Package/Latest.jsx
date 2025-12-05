import { useState } from "react";
// Keep the IoArrowBack and IoArrowForward icons
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaBed, FaBath } from "react-icons/fa"; // Import utility icons for details

// Define card width and gap for responsive carousel behavior
// We want to show 2 cards on mobile (100% / 2 = 50%) and 3 on desktop (100% / 3 = 33.33%)
// We'll use a fixed card width and control translation based on that width.
const CARD_WIDTH_DESKTOP_VIEWPORT_UNIT = 30; // 30vw for desktop (to show ~3 cards)
const CARD_WIDTH_MOBILE_VIEWPORT_UNIT = 80;  // 80vw for mobile (to show 1 card and a peek of the next)
const CARD_GAP_PIXELS = 20;

function Latest() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // --- LOGIC (UNCHANGED, but modified for safety/clarity) ---
    const nextSlide = () => {
        // Stop at the last element that can fully display on screen (e.g., if we show 3 cards, stop 3 before the end)
        const displayCount = window.innerWidth >= 768 ? 3 : 1; 
        const maxIndex = data.length - displayCount;
        
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    };
    
    const prevSlide = () => {
        // Rewinds to the calculated maximum position if at the beginning
        const displayCount = window.innerWidth >= 768 ? 3 : 1;
        const maxIndex = data.length - displayCount;

        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };
    // --- END LOGIC ---

    // Calculate the translation value based on the current index
    const getTranslateX = () => {
        const cardWidth = window.innerWidth >= 768 ? CARD_WIDTH_DESKTOP_VIEWPORT_UNIT : CARD_WIDTH_MOBILE_VIEWPORT_UNIT;
        const totalShift = currentIndex * cardWidth;
        const gapShift = currentIndex * (CARD_GAP_PIXELS / 2); // Adjusting for half the gap on each side
        return `translateX(-${totalShift}vw)`;
    };

    return (
        <main className="container mx-auto px-4 py-20">
            {/* The background decorative element is now a clean section container */}
            
            {/* --- Section Header --- */}
            <div className="flex justify-between items-end mb-16 px-4 md:px-0">
                <div className="max-w-xl">
                    <p className="text-[#0ca39a] text-lg font-bold uppercase tracking-wider mb-2">
                        CHECKOUT OUR NEW
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Latest <span className="text-[#07452d]">Listing Property</span>
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, nobis!
                    </p>
                </div>
                
                {/* Navigation Arrows for Desktop/Tablet */}
                <div className="hidden md:flex space-x-4">
                    <button 
                        onClick={prevSlide} 
                        className="p-3 border-2 border-[#0ca39a] text-[#0ca39a] rounded-full hover:bg-[#0ca39a] hover:text-white transition duration-300 shadow-md"
                        aria-label="Previous property"
                    >
                        <IoArrowBack className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="p-3 border-2 border-[#0ca39a] text-[#0ca39a] rounded-full hover:bg-[#0ca39a] hover:text-white transition duration-300 shadow-md"
                        aria-label="Next property"
                    >
                        <IoArrowForward className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* --- Slider Section --- */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div 
                    style={{ transform: getTranslateX() }} 
                    className={`flex transition-transform duration-700 ease-in-out`}
                >
                    {data.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`flex-shrink-0 mx-[${CARD_GAP_PIXELS / 2}px] p-2`}
                            style={{ width: `${window.innerWidth >= 768 ? CARD_WIDTH_DESKTOP_VIEWPORT_UNIT : CARD_WIDTH_MOBILE_VIEWPORT_UNIT}vw` }}
                        >
                            {/* Property Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
                                
                                {/* Image Container */}
                                <div className="h-64 relative">
                                    <img 
                                        src={item.img} 
                                        alt={`Property listing ${item.id}`}
                                        className="w-full h-full  rounded-t-3xl" 
                                    />
                                    {/* Price Tag Overlay */}
                                    <span className="absolute top-4 left-4 bg-[#07452d] text-white text-lg font-bold px-4 py-2 rounded-xl shadow-lg">
                                        {item.price}
                                    </span>
                                </div>

                                {/* Information Block */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                                        Modern Downtown Apartment
                                    </h2>
                                    <p className="text-gray-500 mb-4">
                                        123 Main St, Cityville, USA
                                    </p>
                                    
                                    {/* Details */}
                                    <div className="flex space-x-6 text-gray-600">
                                        <span className="flex items-center text-sm font-medium">
                                            <FaBed className="w-4 h-4 mr-2 text-[#0ca39a]" /> 3 Bedrooms
                                        </span>
                                        <span className="flex items-center text-sm font-medium">
                                            <FaBath className="w-4 h-4 mr-2 text-[#0ca39a]" /> 3 Baths
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows for Mobile (Overlay) */}
                <div className="flex md:hidden justify-between absolute w-full top-1/3 px-2">
                    <button 
                        onClick={prevSlide} 
                        className="p-3 bg-white/70 backdrop-blur-sm border border-gray-200 text-[#07452d] rounded-full shadow-lg hover:bg-white transition duration-300"
                        aria-label="Previous property"
                    >
                        <IoArrowBack className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="p-3 bg-white/70 backdrop-blur-sm border border-gray-200 text-[#07452d] rounded-full shadow-lg hover:bg-white transition duration-300"
                        aria-label="Next property"
                    >
                        <IoArrowForward className="w-6 h-6" />
                    </button>
                </div>
            </section>
            {/* --- End Slider Section --- */}
        </main>
    );
}

export default Latest;

// Data definition remains unchanged, just moved to the end for better code flow
const data = [
    { img: "82833577_587038971846970_217931..png", id: 1, price: "$5,900/mo" },
    { img: "OIP (1).png", id: 2, price: "$5,900/mo" },
    { img: "OIP3.png", id: 3, price: "$5,900/mo" },
    { img: "R4.png", id: 4, price: "$5,900/mo" },
    { img: "OIP3.png", id: 5, price: "$5,900/mo" },
    { img: "R4.png", id: 6, price: "$5,900/mo" },
];