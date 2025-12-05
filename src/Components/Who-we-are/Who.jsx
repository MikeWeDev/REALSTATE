import { FaHome } from "react-icons/fa"

function Who() {
  // Define the primary color for easy changes
  const PRIMARY_COLOR = "text-[#07452d]"; // Darker green
  const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

  return (
    <main className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
      
      {/* Decorative Blur Element (Optional but adds depth) */}
      <div className="absolute top-1/4 left-0 w-60 h-60 bg-[#0ca39a] opacity-10 rounded-full filter blur-3xl hidden md:block z-0"></div>

      {/* Main Content Grid (replaces flex layout for better control) */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Side: Content Block --- */}
        <div className="md:order-1 order-2">
          
          {/* Section Header */}
          <p className={`${PRIMARY_COLOR} text-lg font-bold uppercase tracking-widest mb-3`}>
            WHO ARE WE
          </p>
          <h1 className={`text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6`}>
            Assisting individuals in locating the <span className={ACCENT_COLOR}>appropriate</span> real estate
          </h1>
          <p className="max-w-xl text-gray-600 text-lg mb-12">
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
        <div className="md:order-2 order-1 h-full min-h-[500px] relative">
          
          {/* Main Large Image (Positioned high) */}
          <img 
            src="/82833577_587038971846970_217931..png" 
            alt="Modern Real Estate View" 
            className="w-[60%] h-[400px] md:h-[550px] object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-white"
          />
          
          {/* Smaller Overlapping Image (Positioned low and right) */}
          <div className="absolute top-[40%] right-0 w-[55%] h-[300px] md:h-[350px]">
            <img 
              src="/82833577_587038971846970_217931..png" 
              alt="Interior design example" 
              className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white"
            />
             {/* Small accent button/dot */}
            <button className={`bg-gradient-to-tr from-[#0ca39a] to-white rounded-full h-16 w-16 shadow-lg 
            absolute -bottom-6 -right-6 cursor-auto z-20 transform scale-100 hover:scale-105 transition duration-300`}>
                <span className="sr-only">Decoration</span>
            </button>
          </div>

          {/* Hidden Image (Removed for cleaner design, keeping two main images) */}
          {/* The third image slot is now replaced by better positioning and accent */}

        </div>
        {/* --- End Image Collage Block --- */}

      </div>
    </main>
  )
}

export default Who