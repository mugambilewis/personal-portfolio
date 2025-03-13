import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
{/*import Contact from "./Contact";*/}
import Footer from "./Footer";
import "/src/styles/App.css";
import Contconn from "./Contconn";
import Graphics from "./Graphics";

function App() {
  return (
    <div>
      
        <Routes>
          {/*{<Route path="/" element={<Header />} />}*/}
          <Route path="/graphics" element={<Graphics />} />
        </Routes>
      
      <div className="flex flex-col min-h-screen ">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contconn />
        {/*<Contact />*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;



