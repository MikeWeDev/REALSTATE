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
        <div id="agents" ref={agentRef}><Agent /></div>
        <div id="reviews" ref={reviewRef}><Review /></div>
        <div id="listings" ref={listingRef}><Latest /></div>
        <div id="neighborhood" ref={neighbourhoodRef}><Neighbor /></div>
      </main>

      <Footer />
    </>
  );
}
