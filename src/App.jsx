import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "/src/styles/App.css";

function App() {
  return (
    <div className="bg-lightBg text-textlight dark:bg-darkBg dark:text-textDark">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
