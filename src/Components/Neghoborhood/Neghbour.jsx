// Define the colors for easy consistency
const PRIMARY_COLOR = "text-[#07452d]"; // Dark green
const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

// Define the data for the neighborhood cards (moved to the top for React best practice)
const data = [
  { img: "82833577_587038971846970_217931..png", id: 1, name: "City Center Lofts", count: "260 Properties" },
  { img: "OIP (1).png", id: 2, name: "Sunset Hills Estates", count: "145 Properties" },
  { img: "OIP3.png", id: 3, name: "The Waterfront District", count: "312 Properties" },
  { img: "R4.png", id: 4, name: "Green Valley Commons", count: "198 Properties" },
  { img: "OIP3.png", id: 5, name: "Downtown Towers", count: "400+ Properties" },
  { img: "R4.png", id: 6, name: "Artisan Village", count: "95 Properties" },
];

function Neghbour() {
  return (
    <div className="py-20 md:py-32 bg-white">
      
      {/* --- Section Header --- */}
      <div className="container mx-auto px-4 mb-16 md:mb-24">
        {/* Removed the misaligned circle button */}
        <p className={`uppercase ${ACCENT_COLOR} text-lg font-bold tracking-widest mb-3`}>
          AREAS ACROSS THE TOWN
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Explore Hot <span className={PRIMARY_COLOR}>Neighbourhoods</span>
        </h2>
      </div>

      {/* --- Property Grid Section --- */}
      <section className="container mx-auto px-4">
        
        {/* Grid layout for responsiveness (1 column mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {data.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 cursor-pointer"
            >
              
              {/* Image with Zoom Effect */}
              <img 
                src={item.img} 
                alt={item.name}
                // Aspect ratio for consistent card size
                className="w-full h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-105" 
              />
              
              {/* Overlay for Darkening and Text Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition duration-500 group-hover:bg-black/60"></div>
              
              {/* Information Block */}
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                {/* Neighborhood Name */}
                <h3 className="text-3xl font-extrabold mb-1 group-hover:text-[#0ca39a] transition duration-300">
                  {item.name}
                </h3>
                {/* Property Count */}
                <p className="text-lg font-medium opacity-90">
                  {item.count}
                </p>
              </div>
              
            </div>
          ))}

        </div>
      </section>
      
    </div>
  );
}

export default Neghbour;