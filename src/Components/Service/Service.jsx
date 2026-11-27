import { IoSearch } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const SERVICE_DATA = [
  {
    icon: IoSearch,
    title: "Find Your Ideal Home",
    description:
      "Our comprehensive search tools match you with properties based on your exact needs and location preferences.",
    bgColor: "bg-[#07452d]",
  },
  {
    icon: FaHouse,
    title: "Sell Your Property Fast",
    description:
      "We connect you with qualified buyers and provide expert negotiation to ensure a smooth and profitable sale.",
    bgColor: "bg-[#0ca39a]",
  },
  {
    icon: FaDollarSign,
    title: "Investment Consultancy",
    description:
      "Get personalized advice on real estate investments, portfolio diversification, and market trend analysis.",
    bgColor: "bg-[#07452d]",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="w-full max-w-sm h-full p-8 bg-white rounded-3xl shadow-lg border border-gray-100
                 transition duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col items-center text-center"
    >
      <div className="mb-6">
        <span
          className={`p-4 rounded-xl shadow-md ${service.bgColor} inline-flex items-center justify-center`}
        >
          <Icon aria-hidden="true" className="text-white w-7 h-7" />
        </span>
      </div>

      <h2 className="text-xl font-extrabold text-[#07452d] mb-3">
        {service.title}
      </h2>

      <p className="text-gray-600 text-base leading-relaxed">
        {service.description}
      </p>
    </article>
  );
}

function Service() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <span className="block uppercase text-[#0ca39a] text-sm md:text-base font-bold tracking-widest mb-3">
          Our Services
        </span>
        <h1
          id="services-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight"
        >
          Tailored real-estate guidance that helps you move with confidence.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-items-center mt-12 md:mt-16">
          {SERVICE_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-full bg-[#07452d] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#07452d]/20 transition duration-300 hover:bg-[#0ca39a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/30"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service;