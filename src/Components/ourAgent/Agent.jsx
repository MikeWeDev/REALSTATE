import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Icons for social and contact links

// --- UPDATED AGENT DATA ---
const data = [
    {
      img: "/agent1.jpg",
      id: 1,
      name: "Samuel Johnson",
      position: "Chief Executive Officer",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:samuel@example.com"
    },
    {
      img: "/agent2.jpg",
      id: 2,
      name: "Michaela Nguyen",
      position: "Lead Development Manager",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michaela@example.com"
    },
    {
      img: "/agent3.avif",
      id: 3,
      name: "Jodie K. Appleby",
      position: "Senior Buying Specialist",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:jodie@example.com"
    },
    {
      img: "/agent4.png", 
      id: 4, 
      name: "David Chen", 
      position: "Investment Analyst",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:david@example.com"
    },
];
// --- END AGENT DATA ---

function AgentCard({ agent }) {
  return (
    <article 
      className="group relative bg-white rounded-xl shadow-xl overflow-hidden 
                 transition duration-500 transform hover:shadow-2xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#0ca39a]"
    >
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={agent.img}
          alt={agent.name}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
          
        {/* Social/Link Overlay on Hover & Focus */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-500">
          <a 
            href={agent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${agent.name}`}
            className="p-2.5 mx-1.5 rounded-full bg-white text-gray-800 hover:text-[#0ca39a] focus:outline-none focus:ring-2 focus:ring-[#0ca39a] transition duration-300"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a 
            href={agent.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Twitter profile of ${agent.name}`}
            className="p-2.5 mx-1.5 rounded-full bg-white text-gray-800 hover:text-[#0ca39a] focus:outline-none focus:ring-2 focus:ring-[#0ca39a] transition duration-300"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a 
            href={agent.email}
            aria-label={`Email ${agent.name}`}
            className="p-2.5 mx-1.5 rounded-full bg-white text-gray-800 hover:text-[#0ca39a] focus:outline-none focus:ring-2 focus:ring-[#0ca39a] transition duration-300"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Information Block */}
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-gray-900 mb-1">
          {agent.name}
        </h3>
        <h4 className="text-base font-semibold text-[#0ca39a]">
          {agent.position}
        </h4>
      </div>
    </article>
  );
}

function Agent() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        
        {/* --- Section Header --- */}
        <p className="uppercase text-[#0ca39a] text-lg font-bold tracking-widest mb-3">
          INTRODUCE YOURSELF TO
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-16 md:mb-20">
          Meet Our Team of <span className="text-[#07452d]">Trusted Experts</span>
        </h2>

        {/* --- Agent Grid Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {data.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Agent;