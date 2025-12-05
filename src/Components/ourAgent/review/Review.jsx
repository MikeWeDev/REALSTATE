import  { useState, useEffect } from 'react';

// Replaced react-icons imports with inline SVG components to resolve compilation errors.

// Inline SVG for ArrowBack (IoArrowBack equivalent)
const ArrowBack = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M217.9 256L345 363.8c5.4 4.8 5.4 12.8 0 17.6l-20.2 17.6c-5.8 5.6-14.8 5.8-20.6.4L137 274.6c-5.8-4.8-5.8-12.8 0-17.6l167.2-124.8c5.8-4.8 14.8-4.6 20.6.4l20.2 17.6c5.4 4.8 5.4 12.8 0 17.6L217.9 256z"/>
    </svg>
);

// Inline SVG for ArrowForward (IoArrowForward equivalent)
const ArrowForward = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M294.1 256L167 148.2c-5.4-4.8-5.4-12.8 0-17.6l20.2-17.6c5.8-5.6 14.8-5.8 20.6-.4l167.2 124.8c5.8 4.8 5.8 12.8 0 17.6L207.8 396.6c-5.8 4.8-14.8 4.6-20.6-.4l-20.2-17.6c-5.4-4.8-5.4-12.8 0-17.6L294.1 256z"/>
    </svg>
);

// Inline SVG for FaStar (Star equivalent)
const Star = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M288 0L352 208L576 208L392 320L464 512L288 384L112 512L184 320L0 208L224 208L288 0Z"/>
    </svg>
);

// Inline SVG for FaStarHalfAlt (StarHalf equivalent)
const StarHalf = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M288 384L112 512L184 320L0 208L224 208L288 0V384Z"/>
    </svg>
);


// Define the colors for easy consistency
const PRIMARY_COLOR = "text-[#07452d]"; // Dark green
const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

const data = [
    {
        img: "82833577_587038971846970_217931..png",
        id: 1,
        name: "Samantha J.",
        position: "First-Time Home Buyer",
        review: "The agents were incredibly attentive and helped us navigate a complex closing process with ease. They found us the perfect family home faster than we expected!"
    },
    {
        img: "OIP (1).png",
        id: 2,
        name: "Michael N.",
        position: "Real Estate Investor",
        review: "Their market analysis was spot-on, securing us a fantastic ROI on our latest development project. Professional, knowledgeable, and highly recommended."
    },
    {
        img: "OIP3.png",
        id: 3,
        name: "Jodi Appleby",
        position: "Seller, City Lofts",
        review: "Selling my property felt effortless. The team's marketing strategy was brilliant, leading to multiple offers above the asking price within the first week."
    },
    {
        img: "R4.png", // Using R4.png for the fourth item
        id: 4,
        name: "David T.",
        position: "Property Developer",
        review: "Unmatched expertise in land acquisition. Their insights saved us significant time and capital. A truly indispensable partner in the real estate journey."
    },
];

const ReviewCard = ({ review }) => (
    // Note: Removed fixed widths from ReviewCard div and used w-full, relies on parent to size correctly
    <div className="flex-shrink-0 w-full p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 h-full">
        {/* Quote Icon */}
        <p className={`text-5xl font-serif mb-4 ${ACCENT_COLOR}`}>“</p>

        {/* Review Text */}
        <p className="text-gray-700 text-lg italic mb-6">
            "{review.review}"
        </p>

        {/* Rating Stars - using the new Star components */}
        <div className="flex text-yellow-500 mb-4">
            {[...Array(4)].map((_, i) => <Star key={`star-${i}`} className="w-5 h-5" />)}
            <StarHalf className="w-5 h-5" />
        </div>

        <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
            {/* User Image */}
            <img 
                src={review.img} 
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-md"
            />
            
            {/* User Info */}
            <div>
                <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                <p className={`text-sm font-semibold ${ACCENT_COLOR}`}>{review.position}</p>
            </div>
        </div>
    </div>
);


function Review() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Adjusted card width percentage to ensure 3 cards show nicely on desktop
    // Card width percentage is set in the map loop below to w-1/3
    const CARD_WIDTH_PERCENT = 33.33; 
    const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

    // Helper function to determine how many items are visible
    const getItemsToShow = () => {
        if (window.innerWidth >= 1024) return 3; // Desktop
        if (window.innerWidth >= 640) return 2;  // Tablet
        return 1; // Mobile
    };

    const nextSlide = () => {
        const itemsToShow = getItemsToShow();
        // Maximum index to prevent showing blank space if data is small
        const maxIndex = Math.max(0, data.length - itemsToShow);
        
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        const itemsToShow = getItemsToShow();
        const maxIndex = Math.max(0, data.length - itemsToShow);
        
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    // Recalculate translation when currentIndex or window size changes
    const getTranslateX = () => {
        const itemsToShow = getItemsToShow();
        let percentageShift;

        if (itemsToShow === 3) {
             // Desktop: Shift by ~1/3rd of the container width
            percentageShift = CARD_WIDTH_PERCENT;
        } else if (itemsToShow === 2) {
             // Tablet: Shift by 1/2 (50%) of the container width
             percentageShift = 50;
        } else {
            // Mobile: Shift by 100% of the container width
            percentageShift = 100;
        }
        
        return `translateX(-${currentIndex * percentageShift}%)`;
    };


    return (
        <section className="bg-gradient-to-br from-gray-100 to-white py-24 md:py-32 overflow-hidden relative">
            
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* --- Left Column: Marketing and Controls --- */}
                <div className="lg:pr-10">
                    <p className={`uppercase ${ACCENT_COLOR} text-lg font-bold tracking-widest mb-3`}>
                        TESTIMONIALS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Look What Our Customers <span className={PRIMARY_COLOR}>Are Saying!</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Don't just take our word for it—see how our dedication to service has helped clients achieve their real estate goals.
                    </p>
                    
                    {/* Navigation Buttons */}
                    <div className="flex space-x-4">
                        <button 
                            onClick={prevSlide} 
                            className="p-4 border-2 border-[#07452d] text-[#07452d] rounded-full hover:bg-[#07452d] hover:text-white transition duration-300 shadow-md"
                            aria-label="Previous review"
                        >
                            <ArrowBack className="w-6 h-6" /> {/* Used inline SVG component */}
                        </button>
                        <button 
                            onClick={nextSlide} 
                            className="p-4 border-2 border-[#07452d] text-[#07452d] rounded-full hover:bg-[#07452d] hover:text-white transition duration-300 shadow-md"
                            aria-label="Next review"
                        >
                            <ArrowForward className="w-6 h-6" /> {/* Used inline SVG component */}
                        </button>
                    </div>
                </div>

                {/* --- Right Column: Testimonial Slider --- */}
                {/* Note: Added min-h-[400px] for better visual consistency when fewer cards are visible */}
                <div className="relative overflow-hidden w-full min-h-[400px]">
                    <div 
                        className="flex transition-transform duration-700 ease-in-out gap-8"
                        style={{ transform: getTranslateX(), width: `${data.length * (window.innerWidth >= 1024 ? CARD_WIDTH_PERCENT : 100)}%` }}
                    >
                        {data.map((item) => (
                            // The card container size is now responsive: 1/3 on lg, 1/2 on sm, full on mobile
                            <div 
                                key={item.id} 
                                className='flex-shrink-0'
                                style={{
                                    width: window.innerWidth >= 1024 ? `calc(${CARD_WIDTH_PERCENT}% - 24px)` : 
                                           window.innerWidth >= 640 ? 'calc(50% - 16px)' : '100%'
                                }}
                            >
                                <ReviewCard review={item} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Review;