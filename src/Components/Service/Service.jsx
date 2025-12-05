import { IoSearch } from "react-icons/io5"
import { FaHouse } from "react-icons/fa6"
import { PiBed } from "react-icons/pi"
import { FaDollarSign, FaChartLine } from 'react-icons/fa'; // Added for variety

// Define the colors for easy consistency
const PRIMARY_COLOR = "text-[#07452d]"; // Dark green
const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

// Define the service data to easily map over
const serviceData = [
  {
    icon: IoSearch,
    title: "Find Your Ideal Home",
    description: "Our comprehensive search tools match you with properties based on your exact needs and location preferences.",
    color: PRIMARY_COLOR,
  },
  {
    icon: FaHouse,
    title: "Sell Your Property Fast",
    description: "We connect you with qualified buyers and provide expert negotiation to ensure a smooth and profitable sale.",
    color: ACCENT_COLOR,
  },
  {
    icon: FaDollarSign, // Using a different icon for visual variety
    title: "Investment Consultancy",
    description: "Get personalized advice on real estate investments, portfolio diversification, and market trend analysis.",
    color: PRIMARY_COLOR,
  },
];

function Service() {
  return (
    // Replaced stretched background with a contained, light gray section
    <div className="bg-gray-50 pt-16 pb-24 md:pt-24 md:pb-36">
      
      <div className="container mx-auto px-4 text-center">
        
        {/* --- Section Header --- */}
        <p className={`uppercase ${ACCENT_COLOR} text-lg font-bold tracking-widest mb-3`}>
          OUR SERVICES
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl mx-auto">
          Providing specialized solutions for all your real estate needs.
        </h2>
        
        {/* --- Service Cards Container --- */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center mt-16 md:mt-24">
          
          {serviceData.map((service, index) => (
            // Card structure updated for modern look (shadow, rounded corners, hover effect)
            <div 
              key={index} 
              className="w-full max-w-sm p-8 bg-white rounded-3xl shadow-xl border border-gray-100 
                         transition duration-500 hover:shadow-2xl hover:border-transparent transform hover:-translate-y-2"
            >
              
              {/* Icon Section */}
              <div className="flex justify-center mb-6">
                <span className={`text-5xl p-4 rounded-xl shadow-lg ${service.color.replace('text-', 'bg-')} transition duration-300`}>
                  <service.icon className="text-white w-8 h-8"/>
                </span> 
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-extrabold ${PRIMARY_COLOR} mb-3`}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Service