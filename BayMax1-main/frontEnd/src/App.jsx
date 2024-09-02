import Home from "./home/Home"
import Navbar from "./Components/navbar"
import Achievement_Extras from "./home/Achievement_Extras"
import Footer from "./Components/Footer"
import Stats from "./team/stats"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact_us from "./Contact_us/Contact_us"
function App() {
  
  return(<>
    {/* <Navbar/>
    <Stats/>
    <Footer/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/team" element={<Stats />} />
      <Route path="/contact_us" element={<Contact_us></Contact_us>} />
     
     

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App