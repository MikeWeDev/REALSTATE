import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Icons for social links

// Define the colors for easy consistency
const PRIMARY_COLOR = "text-[#07452d]"; // Dark green
const ACCENT_COLOR = "text-[#0ca39a]"; // Teal accent

// --- UPDATED AGENT DATA ---
const data = [
    {
      img: "82833577_587038971846970_217931..png",
      id: 1,
      name: "Samuel Johnson",
      position: "Chief Executive Officer",
      link: "#"
    },
    {
      img: "OIP (1).png",
      id: 2,
      name: "Michaela Nguyen",
      position: "Lead Development Manager",
      link: "#"
    },
    {
      img: "OIP3.png",
      id: 3,
      name: "Jodie K. Appleby",
      position: "Senior Buying Specialist",
      link: "#"
    },
    // Adding a fourth agent for a better 2x2 grid potential on tablets
    {
        img: "R4.png", 
        id: 4, 
        name: "David Chen", 
        position: "Investment Analyst",
        link: "#"
    },
];
// --- END AGENT DATA ---

function Agent() {
  return (
    <>
      <div className="py-20 md:py-32 bg-gray-50">
        
        <div className="container mx-auto px-4 text-center">
          
          {/* --- Section Header --- */}
          <p className={`uppercase ${ACCENT_COLOR} text-lg font-bold tracking-widest mb-3`}>
            INTRODUCE YOURSELF TO
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-16 md:mb-20">
            Meet Our Team of <span className={PRIMARY_COLOR}>Trusted Experts</span>
          </h2>

          {/* --- Agent Grid Section --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            
            {data.map((agent) => (
              <div 
                key={agent.id} 
                className="group relative bg-white rounded-xl shadow-xl overflow-hidden 
                           transition duration-500 transform hover:shadow-2xl hover:-translate-y-1"
              >
                
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                    <img 
                        src={agent.img} 
                        alt={agent.name}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Social/Link Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                        <a 
                            href={agent.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 mx-2 rounded-full bg-white text-gray-800 hover:text-[#0ca39a] transition duration-300"
                            aria-label={`LinkedIn profile of ${agent.name}`}
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                            href={agent.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 mx-2 rounded-full bg-white text-gray-800 hover:text-[#0ca39a] transition duration-300"
                            aria-label={`Twitter profile of ${agent.name}`}
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                
                {/* Information Block */}
                <div className="p-5">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                    {agent.name}
                  </h3>
                  <h4 className={`text-base font-semibold ${ACCENT_COLOR}`}>
                    {agent.position}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
     
    </>
  );
}

export default Agent;