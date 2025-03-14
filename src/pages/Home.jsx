import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contconn from "../components/Contconn";


function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contconn /> {/* Added Contconn here */}
    </div>
  );
}

export default Home;
