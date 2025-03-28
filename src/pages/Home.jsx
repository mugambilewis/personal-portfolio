import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contconn from "../components/Contconn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="mb-8">
        <Hero />
      </div>
      <div className="mb-4">
        <About />
      </div>

      <div className="mb-4"> 
        <Skills />
      </div>

      <div className="mb-4"> 
        <Services />
      </div>
      
      <div className="mb-4">
        <Projects />
      </div>
      
      <div>
        <Contconn />  
      </div>
      <ToastContainer /> 
    </div>
    
  );
}

export default Home;
