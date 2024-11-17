import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";

function App() {
  return <main className="text-white">
    <Navbar/>
    <Hero/>
    <Section2/>  
    <Section3/>
    <Section4/>
  </main>;
}

export default App;
