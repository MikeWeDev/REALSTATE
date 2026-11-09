import { useState, useEffect } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaBed, FaBath } from "react-icons/fa";

const data = [
  {
    img: "/latest-property1.avif",
    id: 1,
    price: "$5,900/mo",
    badge: "Featured",
    title: "Modern Downtown Apartment",
    location: "Bole Road, Addis Ababa",
    bedrooms: 3,
    baths: 2,
  },
  {
    img: "/latest-property2.jpg",
    id: 2,
    price: "$8,450/mo",
    badge: "Luxury",
    title: "Luxury Horizon Villa",
    location: "Kazanchis, Addis Ababa",
    bedrooms: 4,
    baths: 3,
  },
  {
    img: "/latest-property3.jpeg",
    id: 3,
    price: "$4,350/mo",
    badge: "New",
    title: "Suburban Family Home",
    location: "Gulele, Addis Ababa",
    bedrooms: 3,
    baths: 2,
  },
  {
    img: "/latest-property4.jpg",
    id: 4,
    price: "$9,200/mo",
    badge: "Penthouse",
    title: "Penthouse Suite",
    location: "Meskel Square, Addis Ababa",
    bedrooms: 3,
    baths: 3,
  },
  {
    img: "/latest-property5.png",
    id: 5,
    price: "$3,600/mo",
    badge: "Cozy",
    title: "Cozy Lakefront Cottage",
    location: "Tulu Dimtu, Addis Ababa",
    bedrooms: 2,
    baths: 2,
  },
  {
    img: "/latest-property6.jpg",
    id: 6,
    price: "$6,750/mo",
    badge: "Executive",
    title: "Urban Executive Loft",
    location: "CMC, Addis Ababa",
    bedrooms: 3,
    baths: 2,
  },
];

const propertyPages = Array.from(
  { length: Math.ceil(data.length / 3) },
  (_, index) => data.slice(index * 3, index * 3 + 3),
);

function PropertyCard({ item }) {
  return (
    <article className="h-full">
      <div className="h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border border-gray-100">
        <div className="h-64 relative">
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          <span className="absolute top-4 left-4 bg-[#07452d] text-white text-lg font-bold px-4 py-2 rounded-xl shadow-lg">
            {item.price}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#07452d] shadow-sm">
            {item.badge}
          </span>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
            {item.title}
          </h2>

          <p className="text-gray-500 text-sm mb-4 line-clamp-1">
            {item.location}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600 border-t border-gray-100 pt-4">
            <span className="flex items-center text-sm font-medium">
              <FaBed
                className="w-4 h-4 mr-2 text-[#0ca39a]"
                aria-hidden="true"
              />
              {item.bedrooms} Bedrooms
            </span>

            <span className="flex items-center text-sm font-medium">
              <FaBath
                className="w-4 h-4 mr-2 text-[#0ca39a]"
                aria-hidden="true"
              />
              {item.baths} Baths
            </span>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[#0ca39a]/20 bg-[#ecfdfb] px-4 py-2.5 text-sm font-semibold text-[#07452d] transition duration-300 hover:border-[#0ca39a] hover:bg-[#dffaf6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/20"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </article>
  );
}

function Latest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const syncDesktopPage = () => {
      if (desktopQuery.matches) {
        setCurrentPage(Math.floor(currentIndex / 3));
      }
    };

    syncDesktopPage();
    desktopQuery.addEventListener("change", syncDesktopPage);

    return () => {
      desktopQuery.removeEventListener("change", syncDesktopPage);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      setCurrentPage((prev) => (prev + 1) % propertyPages.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }
  };

  const prevSlide = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      setCurrentPage(
        (prev) => (prev - 1 + propertyPages.length) % propertyPages.length,
      );
    } else {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    }
  };

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 px-4 md:px-0 gap-6">
        <div className="max-w-xl">
          <p className="text-[#0ca39a] text-lg font-bold uppercase tracking-wider mb-2">
            CHECKOUT OUR NEW
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest <span className="text-[#07452d]">Listing Property</span>
          </h1>

          <p className="text-gray-500 mt-4">
            Explore our newest selected listings crafted to provide exceptional
            living standard and location quality.
          </p>
        </div>

        <div className="hidden md:flex space-x-4 flex-shrink-0">
          <button
            type="button"
            onClick={prevSlide}
            className="p-3 border-2 border-[#0ca39a] text-[#0ca39a] rounded-full hover:bg-[#0ca39a] hover:text-white transition duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
            aria-label="Previous property"
          >
            <IoArrowBack className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="p-3 border-2 border-[#0ca39a] text-[#0ca39a] rounded-full hover:bg-[#0ca39a] hover:text-white transition duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
            aria-label="Next property"
          >
            <IoArrowForward className="w-5 h-5" />
          </button>
        </div>
      </div>

      <section
        className="relative overflow-hidden px-2"
        aria-label="Latest properties"
      >
        <div
          className="flex md:hidden transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <PropertyCard item={item} />
            </div>
          ))}
        </div>

        <div
          className="hidden md:flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
          aria-live="polite"
        >
          {propertyPages.map((page, index) => (
            <div
              key={page[0].id}
              className="w-full flex-shrink-0 grid grid-cols-3 gap-6"
              aria-label={`Property group ${index + 1} of ${propertyPages.length}`}
            >
              {page.map((item) => (
                <PropertyCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-between items-center absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md border border-gray-200 text-[#07452d] rounded-full shadow-lg hover:bg-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
            aria-label="Previous property"
          >
            <IoArrowBack className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md border border-gray-200 text-[#07452d] rounded-full shadow-lg hover:bg-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ca39a]"
            aria-label="Next property"
          >
            <IoArrowForward className="w-5 h-5" />
          </button>
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-6">
          {data.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show property ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-[#0ca39a]"
                  : "w-2 bg-gray-300 hover:bg-[#0ca39a]"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Latest;