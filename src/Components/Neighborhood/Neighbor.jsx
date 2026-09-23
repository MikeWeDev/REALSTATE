// Define the colors for easy consistency
const PRIMARY_COLOR = "text-[#07452d]"; // Dark green
const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

// Define the data for the neighborhood cards (moved to the top for React best practice)
const data = [
  { img: "/neighbor1.webp", id: 1, name: "City Center Lofts", count: "260 Properties", slug: "city-center-lofts" },
  { img: "/neighbor2.webp", id: 2, name: "Sunset Hills Estates", count: "145 Properties", slug: "sunset-hills-estates" },
  { img: "/neighbor3.avif", id: 3, name: "The Waterfront District", count: "312 Properties", slug: "waterfront-district" },
  { img: "/neighbor4.jpg", id: 4, name: "Green Valley Commons", count: "198 Properties", slug: "green-valley-commons" },
  { img: "/neighbor5.jpeg", id: 5, name: "Downtown Towers", count: "400+ Properties", slug: "downtown-towers" },
  { img: "/neighbor6.jpg", id: 6, name: "Artisan Village", count: "95 Properties", slug: "artisan-village" },
];

function Neighbor() {
  return (
    <section className="py-20 md:py-32 bg-white">
      
      {/* --- Section Header --- */}
      <div className="container mx-auto px-4 mb-16 md:mb-24">
        <p className={`uppercase ${ACCENT_COLOR} text-lg font-bold tracking-widest mb-3`}>
          AREAS ACROSS THE TOWN
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Explore Hot <span className={PRIMARY_COLOR}>Neighbourhoods</span>
        </h2>
      </div>

      {/* --- Property Grid Section --- */}
      <div className="container mx-auto px-4">
        
        {/* Grid layout for responsiveness (1 column mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {data.map((item) => (
            <a
              key={item.id}
              href={`/neighborhoods/${item.slug}`}
              aria-label={`Explore ${item.name}, featuring ${item.count}`}
              className="group relative block overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]"
            >
              
              {/* Image with Zoom Effect */}
              <img
                src={item.img}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-full h-80 lg:h-96 object-cover transition duration-500 group-hover:scale-105"
              />
              
              {/* Overlay for Darkening and Text Background */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition duration-500 group-hover:from-black/90 group-hover:via-black/40"
              ></div>
              
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
              
            </a>
          ))}

        </div>
      </div>
      
    </section>
  );
}

export default Neighbor;