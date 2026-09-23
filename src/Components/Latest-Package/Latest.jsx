import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaBed, FaBath } from "react-icons/fa";

// Sample property dataset
const data = [
    { img: "/latest-property1.avif", id: 1, price: "$5,900/mo", title: "Modern Downtown Apartment", location: "123 Main St, Cityville, USA" },
    { img: "/latest-property2.jpg", id: 2, price: "$5,900/mo", title: "Luxury Horizon Villa", location: "456 Ocean Ave, Beachside, USA" },
    { img: "/latest-property3.jpeg", id: 3, price: "$5,900/mo", title: "Suburban Family Home", location: "789 Pine Rd, Greenfield, USA" },
    { img: "/latest-property4.jpg", id: 4, price: "$5,900/mo", title: "Penthouse Suite", location: "101 High St, Skyline, USA" },
    { img: "/latest-property5.png", id: 5, price: "$5,900/mo", title: "Cozy Lakefront Cottage", location: "202 Lake Dr, Fairview, USA" },
    { img: "/latest-property6.jpg", id: 6, price: "$5,900/mo", title: "Urban Executive Loft", location: "303 Market St, Metro, USA" },
];

function Latest() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        // Rotates smoothly through items
        setCurrentIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    return (
        <main className="container mx-auto px-4 py-20">
            
            {/* --- Section Header --- */}
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 px-4 md:px-0 gap-6">
                <div className="max-w-xl">
                    <p className="text-[#0ca39a] text-lg font-bold uppercase tracking-wider mb-2">
                        CHECKOUT OUR NEW
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Latest <span className="text-[#07452d]">Listing Property</span>
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Explore our newest selected listings crafted to provide exceptional living standard and location quality.
                    </p>
                </div>
                
                {/* Navigation Arrows for Desktop */}
                <div className="hidden md:flex space-x-4 flex-shrink-0">
                    <button
                        type="button"                        
                        onClick={prevSlide} 
                        className="p-3 border-2 border-[#0ca39a] text-[#0ca39a] rounded-full hover:bg-[#0ca39a] hover:text-white transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0ca39a]"
                        aria-label="Previous property"
                    >
                        <IoArrowBack className="w-5 h-5" />
                    </button>
                    <button
                        type="button"                        
                        onClick={nextSlide} 
                        className="p-3 border-2 border-[#0ca39a] text-[#0ca39a] rounded-full hover:bg-[#0ca39a] hover:text-white transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0ca39a]"
                        aria-label="Next property"
                    >
                        <IoArrowForward className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* --- Slider Container --- */}
            <section className="relative overflow-hidden px-2">
                <div 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
                    className="flex transition-transform duration-500 ease-in-out md:translate-x-0 md:!transform-none md:grid md:grid-cols-3 gap-6"
                >
                    {data.map((item) => (
                        <div 
                            key={item.id} 
                            className="w-full flex-shrink-0 md:flex-shrink"
                        >
                            {/* Property Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border border-gray-100">
                                
                                {/* Image Container */}
                                <div className="h-64 relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Price Tag Overlay */}
                                    <span className="absolute top-4 left-4 bg-[#07452d] text-white text-lg font-bold px-4 py-2 rounded-xl shadow-lg">
                                        {item.price}
                                    </span>
                                </div>

                                {/* Information Block */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-1">
                                        {item.location}
                                    </p>
                                    
                                    {/* Details */}
                                    <div className="flex items-center space-x-6 text-gray-600 border-t border-gray-100 pt-4">
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
                <div className="flex md:hidden justify-between items-center absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 pointer-events-none">
                    <button
                        type="button"                        
                        onClick={prevSlide} 
                        className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md border border-gray-200 text-[#07452d] rounded-full shadow-lg hover:bg-white transition duration-300"
                        aria-label="Previous property"
                    >
                        <IoArrowBack className="w-5 h-5" />
                    </button>
                    <button
                        type="button"                        
                        onClick={nextSlide} 
                        className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md border border-gray-200 text-[#07452d] rounded-full shadow-lg hover:bg-white transition duration-300"
                        aria-label="Next property"
                    >
                        <IoArrowForward className="w-5 h-5" />
                    </button>
                </div>
            </section>

        </main>
    );
}

export default Latest;