import { useRef } from "react";
import NavBar from './Components/NavBar'
import Fotter from  './Components/Fotter'
import RealState from './Components/Homepage/RealState'
import Who from './Components/Who-we-are/Who'
import Latest from './Components/Latest-Package/Latest'
import Service from './Components/Service/Service'
import Neghbour from './Components/Neghoborhood/Neghbour'
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
        <div ref={realStateRef}><RealState /></div>
        <div ref={whoRef}><Who /></div>
        <div ref={serviceRef}><Service /></div>
        <div ref={agentRef}><Agent /></div>
        <div ref={reviewRef}><Review /></div> 
        <div ref={listingRef}><Latest /></div>
        <div ref={neighbourhoodRef}><Neghbour /></div>
      </main>

      <Fotter />
    </>
  );
}
