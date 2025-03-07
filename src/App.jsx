import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "/src/styles/App.css";

import Button from "./Button";



function App() {
  return (
    <div className=" min-h-screen">
    
     
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Button />
    </div>
  );
}

export default App;



