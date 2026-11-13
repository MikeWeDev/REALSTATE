// Define the data for the neighborhood cards (moved to the top for React best practice)
const data = [
  { img: "/neighbor1.webp", id: 1, name: "Bole Heights", count: "260 Properties", slug: "bole-heights" },
  { img: "/neighbor2.webp", id: 2, name: "Kazanchis Gardens", count: "145 Properties", slug: "kazanchis-gardens" },
  { img: "/neighbor3.avif", id: 3, name: "Lideta View", count: "312 Properties", slug: "lideta-view" },
  { img: "/neighbor4.jpg", id: 4, name: "CMC Green Valley", count: "198 Properties", slug: "cmc-green-valley" },
  { img: "/neighbor5.jpeg", id: 5, name: "Central Business District", count: "400+ Properties", slug: "central-business-district" },
  { img: "/neighbor6.jpg", id: 6, name: "Ayer Tena Village", count: "95 Properties", slug: "ayer-tena-village" },
];

function NeighborhoodCard({ item, onClick }) {
  const Component = onClick ? "button" : "a";
  const props = onClick
    ? { onClick: () => onClick(item), type: "button" }
    : { href: `/neighborhoods/${item.slug}` };

  return (
    <Component
      {...props}
      aria-label={`Explore ${item.name}, featuring ${item.count}`}
      className="group relative block w-full text-left overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]"
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
    </Component>
  );
}

function Neighbor() {
  return (
    <section className="py-20 md:py-32 bg-white">
      
      {/* --- Section Header --- */}
      <div className="container mx-auto px-4 mb-16 md:mb-24">
        <p className="uppercase text-[#0ca39a] text-lg font-bold tracking-widest mb-3">
          AREAS ACROSS THE TOWN
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Explore Hot <span className="text-[#07452d]">Neighbourhoods</span>
        </h2>
      </div>

      {/* --- Property Grid Section --- */}
      <div className="container mx-auto px-4">
        
        {/* Grid layout for responsiveness (1 column mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {data.map((item) => (
            <NeighborhoodCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#07452d] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[#07452d]/20 transition duration-300 hover:bg-[#0ca39a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/30"
          >
            Discover Your Ideal Area
          </a>
        </div>
      </div>
      
    </section>
  );
}

export default Neighbor;