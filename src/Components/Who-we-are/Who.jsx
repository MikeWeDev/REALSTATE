import { FaHome } from "react-icons/fa"

function Who() {
  // Define the primary color for easy changes
  const PRIMARY_COLOR = "text-[#07452d]"; // Darker green
  const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

  return (
    <main className="relative container mx-auto px-4 py-16 md:py-32">
      
      {/* Decorative Blur Element (Optional but adds depth) */}
      <div className="absolute top-1/4 left-0 w-60 h-60 bg-[#0ca39a] opacity-10 rounded-full filter blur-3xl hidden md:block z-0"></div>

      {/* Main Content Grid (replaces flex layout for better control) */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- Left Side: Content Block --- */}
        <div className="md:order-1 order-2">
          
          {/* Section Header */}
          <p className={`${PRIMARY_COLOR} text-lg font-bold uppercase tracking-widest mb-3`}>
            WHO ARE WE
          </p>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6`}>
            Assisting individuals in locating the <span className={ACCENT_COLOR}>appropriate</span> real estate
          </h1>
          <p className="max-w-xl text-gray-600 text-base sm:text-lg mb-8 sm:mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis ipsam obcaecati amet quaerat ad porro nam odio dolorum libero?
          </p>

          {/* Feature Cards Container */}
          <div className="space-y-6">
            
            {/* Feature Card 1 */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 p-6 rounded-3xl flex items-start gap-x-4">
              <div className="flex-shrink-0 mt-1">
                <FaHome className={`text-3xl ${PRIMARY_COLOR}`} />
              </div>
              <div className="flex-grow">
                <h2 className={`text-xl font-bold ${PRIMARY_COLOR} mb-1`}>
                  Premium Service Guaranteed
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nobis!
                </p>
              </div>
            </div>

            {/* Feature Card 2 (Made visible for all screen sizes) */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 p-6 rounded-3xl flex items-start gap-x-4">
              <div className="flex-shrink-0 mt-1">
                <FaHome className={`text-3xl ${PRIMARY_COLOR}`} />
              </div>
              <div className="flex-grow">
                <h2 className={`text-xl font-bold ${PRIMARY_COLOR} mb-1`}>
                  Extensive Property Portfolio
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quidem!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* --- End Content Block --- */}

        {/* --- Right Side: Image Collage Block --- */}
        <div className="md:order-2 order-1 relative pb-10 md:pb-0">
          
          {/* Main Large Image */}
          <img
            src="/who1.webp"
            alt="Modern Real Estate View"
            loading="lazy"
            className="w-[65%] aspect-[4/5] object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-white"
          />
          
          {/* Smaller Overlapping Image */}
          <div className="absolute bottom-0 right-0 w-[55%] aspect-square z-20">
            <img
              src="/who2.avif"
              alt="Interior design example"
              loading="lazy"
              className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white"
            />
            {/* Small accent button/dot */}
            <div 
              aria-hidden="true" 
              className="bg-gradient-to-tr from-[#0ca39a] to-white rounded-full h-12 w-12 sm:h-16 sm:w-16 shadow-lg absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 cursor-auto z-30 transform scale-100 hover:scale-105 transition duration-300"
            ></div>
          </div>

        </div>
        {/* --- End Image Collage Block --- */}

      </div>
    </main>
  )
}

export default Who