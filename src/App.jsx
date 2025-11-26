import './index.css'
import NavBar from './Components/NavBar'
import Fotter from  './Components/Fotter'
import RealState from './Components/Homepage/RealState'
import Who from './Components/Who-we-are/Who'
import Latest from './Components/Latest-Package/Latest'
import Service from './Components/Service/Service'
import Neghbour from './Components/Neghoborhood/Neghbour'
import Agent from './Components/ourAgent/Agent'
function App() {
  return (
   <>
   <NavBar />
   <main>
   <RealState />
   <Who />
   <Latest />
   <Service />
   <Neghbour />
   <Agent />
   </main>
   
   <Fotter />
   </>
  
  )
}

export default App
 