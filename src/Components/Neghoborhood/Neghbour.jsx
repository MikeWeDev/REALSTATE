function Neghbour() {
  return (
    <div className=" w-[98vw] h-auto  overflow-hidden">
        
          <div className="container  mx-auto px3 text-start mb-24">
          <button className="w-20 h-20 rounded-full bg-[#bce6e4] ml-[-140px]"></button>
         <p className="uppercase text-xl text-[#0c4f37] py-8">Areas Across The Town</p>
         <p className="text-4xl font-medium">
          Neighbourhood Property
         </p>
         </div>

         <section className="mt-8  ">
          <div className="w-[96vw] flex flex-wrap h-auto justify-between gap-y-20  overflow-hidden ">
                {data.map((img,index)=>{
                    return(     
                        <div  key={index} className="w-[45%] md:w-[30%] relative ">
         <img src={img.img} alt=""
       className="w-[500px]  h-[300px] md:h-[500px]  rounded-t-[80px] rounded-b-[40px]" />
       <div className="info  absolute bottom-8 left-0  md:bottom-12 md:left-7 text-white ">
        <h1 className="text-xl md:text-3xl font-bold ">{img.price}</h1>
        <h2>Lorem ipsum dolor si.</h2>
       </div>
      
                        </div>  
     
      )     
    })}
          </div>
        </section>
        
    </div>
  )
}

export default Neghbour

const data=[
    {
      img:"82833577_587038971846970_217931..png",
      id:1,
      price:"260"
    },
    {
      img:"OIP (1).png",
      id:2,
      price:"260"

    },
    {
      img:"OIP3.png",
      id:3,
      price:"260"

    },
    {
      img:"R4.png",
      id:4,
      price:"260"

    },
    {
        img:"OIP3.png",
        id:5,
        price:"260"

      },
      {
        img:"R4.png",
        id:6,
        price:"260"

      },
  ]