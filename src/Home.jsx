import { useRef } from "react";
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import RealState from './Components/Homepage/RealState'
import Who from './Components/Who-we-are/Who'
import Latest from './Components/Latest-Package/Latest'
import Service from './Components/Service/Service'
import Neighbor from './Components/Neighborhood/Neighbor'
import Agent from './Components/ourAgent/Agent'
import Review from './Components/ourAgent/review/Review'

export default function Home() {
  const realStateRef = useRef(null);
  const whoRef = useRef(null);
  const serviceRef = useRef(null);
  const agentRef = useRef(null);
  const listingRef = useRef(null);
  const neighbourhoodRef = useRef(null);
  const reviewRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <NavBar
        scrollTo={scrollTo}
        realStateRef={realStateRef}
        whoRef={whoRef}
        serviceRef={serviceRef}
        agentRef={agentRef}
        listingRef={listingRef}
        neighbourhoodRef={neighbourhoodRef}
        reviewRef={reviewRef}
      />

      <main>
        <div id="home" ref={realStateRef}><RealState /></div>
        <div id="about" ref={whoRef}><Who /></div>
        <div id="services" ref={serviceRef}><Service /></div>

        <section className="bg-[#f4fbfa] py-16 px-4">
          <div className="container mx-auto rounded-[2rem] border border-[#0ca39a]/15 bg-white px-6 py-8 shadow-lg shadow-[#0ca39a]/5 md:px-10 md:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0ca39a]">Ready to move?</p>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
                  Let’s find a home that fits your next chapter.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#07452d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#07452d]/20 transition duration-300 hover:bg-[#0ca39a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/30"
                >
                  Book a Call
                </a>
                <a
                  href="tel:+251564789132"
                  className="inline-flex items-center justify-center rounded-full border border-[#0ca39a]/25 bg-[#f0fdfa] px-6 py-3 text-sm font-semibold text-[#07452d] transition duration-300 hover:border-[#0ca39a] hover:bg-[#e7faf7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/20"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <div id="agents" ref={agentRef}><Agent /></div>
        <div id="reviews" ref={reviewRef}><Review /></div>
        <div id="listings" ref={listingRef}><Latest /></div>
        <div id="neighborhood" ref={neighbourhoodRef}><Neighbor /></div>
      </main>

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-full border border-[#0ca39a]/20 bg-white/90 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-md">
          <a
            href="tel:+251564789132"
            className="flex-1 rounded-full bg-[#07452d] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#07452d]/20"
          >
            Call
          </a>
          <a
            href="#contact"
            className="flex-1 rounded-full border border-[#0ca39a]/20 bg-[#ecfdfb] px-4 py-3 text-center text-sm font-semibold text-[#07452d]"
          >
            Message
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
