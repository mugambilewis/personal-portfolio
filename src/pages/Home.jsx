import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contconn from "../components/Contconn";


function Home() {
  return (
    <div>
      <div className="mb-2">
        <Hero />
      </div>
      <div className="mb-2">
        <About />
      </div>

      <div className="mb-2"> 
        <Skills />
      </div>

      <div className="mb-2"> 
        <Services />
      </div>
      
      <div className="mb-2">
        <Projects />
      </div>
      
      <div>
        <Contconn />  
      </div>
    </div>
      
     
    
  );
}

export default Home;
