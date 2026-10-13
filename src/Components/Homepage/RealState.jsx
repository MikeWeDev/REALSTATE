import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaCity,
  FaRegHandshake,
  FaTree,
  FaHome,
} from "react-icons/fa";

// Image slider data
const data = [
  { img: "/home1.jpg", id: 1 },
  { img: "/home2.jpg", id: 2 },
  { img: "/home3.avif", id: 3 },
  { img: "/home4.jpg", id: 4 },
];

// Logo data
const defaultLogoData = [
  { text: "GreenScape Realty", color: "text-green-600", Icon: FaTree },
  { text: "Apex Property Group", color: "text-blue-700", Icon: FaBuilding },
  { text: "Urban Horizons", color: "text-indigo-600", Icon: FaCity },
  { text: "TrustEstate Partners", color: "text-red-500", Icon: FaRegHandshake },
  { text: "Modern Home Finders", color: "text-yellow-600", Icon: FaHome },
];

// Duplicate logos for seamless scrolling
const logoData = [...defaultLogoData, ...defaultLogoData];

// Logo icon component
const LogoIcon = ({ Icon, colorClass }) => (
  <Icon className={`w-8 h-8 ${colorClass} mr-2`} aria-hidden="true" />
);

// Previous arrow
const ArrowBack = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

// Next arrow
const ArrowForward = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

// Main component
const RealState = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Autoplay pauses while hovering or focusing slider controls
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Block */}
          <div className="w-full lg:w-1/2 p-4">
            <p className="text-[#0ca39a] text-lg font-semibold uppercase tracking-widest mb-2">
              REAL ESTATE
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Find Your Perfect{" "}
              <span className="text-[#0ca39a]">Home</span>
            </h1>

            <p className="text-gray-500 text-lg mb-10 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              architecto. Discover curated listings designed for your future.
            </p>

            {/* Functional Listings Navigation */}
            <Link
              to="/listings"
              className="inline-block px-8 py-3 text-lg font-bold text-white bg-[#0ca39a] rounded-full shadow-lg shadow-[#0ca39a]/50 hover:bg-[#098e85] hover:shadow-xl transition duration-300 transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/40"
            >
              Explore Listings
            </Link>
          </div>

          {/* Slider Block */}
          <div
            className="w-full lg:w-1/2 relative shadow-2xl rounded-2xl overflow-hidden aspect-video"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {data.map((item, index) => (
                <img
                  key={item.id}
                  className="w-full h-full flex-shrink-0 bg-gray-100 object-cover"
                  src={item.img}
                  alt={`Real Estate Slide ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>

            {/* Previous Button */}
            <div className="absolute inset-y-0 left-0 flex items-center p-4">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous property image"
                className="bg-white/30 backdrop-blur-sm text-white hover:text-[#0ca39a] p-3 rounded-full transition duration-300 hover:bg-white/80 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
              >
                <ArrowBack />
              </button>
            </div>

            {/* Next Button */}
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next property image"
                className="bg-white/30 backdrop-blur-sm text-white hover:text-[#0ca39a] p-3 rounded-full transition duration-300 hover:bg-white/80 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
              >
                <ArrowForward />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {data.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to property image ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a] ${
                    index === currentIndex
                      ? "bg-[#0ca39a] w-6"
                      : "bg-white/70 hover:bg-white w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Logo Bar */}
      <div
        className="bg-white py-6 border-t border-b border-gray-100 overflow-hidden"
        aria-label="Featured real estate brands"
      >
        <div className="flex w-fit logo-scroll-container">
          {logoData.map((logo, index) => (
            <div
              key={`${logo.text}-${index}`}
              className="flex items-center mx-8 my-2 flex-shrink-0"
              aria-hidden={index >= defaultLogoData.length ? "true" : undefined}
            >
              <LogoIcon Icon={logo.Icon} colorClass={logo.color} />

              <span className="text-xl font-bold text-gray-700 transition duration-300">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RealState;