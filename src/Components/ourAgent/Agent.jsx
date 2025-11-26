import Review from "./review/Review"
import Started from "./Started/Started"
function Agent() {
  return (
    <>
     <div className=" w-[98vw] h-auto md:overflow-x-hidden  overflow-y-hidden   ">
        
        <div className="container  md:mx-[40%] mx-[10%]  text-start mb-auto   ">
        <button className="w-20 h-20 rounded-full bg-[#bce6e4] ml-[-140px]"></button>
       <p className="uppercase text-xl text-[#0c4f37] py-8 ">INTRODUCE YOURSELF TO</p>
       <p className="text-4xl font-medium">
        OUR TEAM OF EXPERTS
       </p>
       </div>

       <section className="mt-5    ">
        <div className="w-[96vw] flex flex-wrap h-auto pb-12 justify-between gap-y-20  overflow-hidden ">
              {data.map((img,index)=>{
                  return(     
                      <div  key={index} className="w-[45%] md:w-[30%] h-[430px] ">
     <div className="h-[80%]">
     <img src={img.img} alt=""
     className="w-[100%]  h-[100%]  rounded-tl-[120px] " />
     </div>
      
     <div className="info h-[20%] text-black text-center  border-[2px] border-[rgba(0,0,0,0.2)]">
      <h1 className="text-3xl font-bold ">{img.name}</h1>
      <h2 className="text-[#0c4f37]">{img.position}</h2>
     </div>
    
                      </div>  
   
    )     
  })}
        </div>
      </section>
      
  </div>
  <Review />
  <Started />
  
    </>
   
  )
}

export default Agent

const data=[
    {
      img:"82833577_587038971846970_217931..png",
      id:1,
      name:"Sam J",
      position:"SEO AND FOUNDER"
    },
    {
      img:"OIP (1).png",
      id:2,
      name:"MIKE N",
      position:"REAL STATE DEVELOPER"

    },
    {
      img:"OIP3.png",
      id:3,
      name:"JODI J Appleby",
      position:"BUYERS AGENT"

    },
   
  ]