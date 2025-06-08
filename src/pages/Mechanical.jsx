import PagesCard from '../PagesCard';
import { useTheme } from '../useTheme';


const Mechanical = () => {
  const { theme } = useTheme();
    return (
      <div className={`service-details flex flex-col items-center min-h-[calc(100vh-7rem)] w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-8 &${
         theme === 'dark' 
        ? 'bg-gray-950 text-white border-gray-700'
        : 'bg-white text-gray-800 border-gray-200'
    
      }`} >
         <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 ">Mechanical Engineering</h3>
        <div className="flex flex-col md:flex-row justify-between w-full mt-6 gap-6">
          <div className="w-full md:w-3/5 md:mt-2 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 ">
              Turning Imagination into Engineered Reality</h3>
            <p className="text-lg md:text-xl text-gray-700  mt-4">
              Driven by precision and innovation, I specialize in designing efficient mechanical systems that solve real-world problems. With strong expertise in CAD (Computer-Aided Design), I bring concepts to life through detailed 3D models and technical drawings. From prototyping sustainable energy solutions to crafting smart hydraulic mechanisms, my engineering approach blends creativity, accuracy, and functionality. Every project I take on reflects my passion for turning technical ideas into impactful, real-life applications.
            </p>
             <h3 className="text-xl md:text-3xl font-semibold text-gray-800 ">
              Key Achievements</h3>
          </div>
          <div className="w-full md:w-2/5 mt-6">
            <img 
              src="/images/mechanicalprofile.jpg"
              alt="Mechanical Engineering"
              className="w-full h-auto rounded-lg shadow-lg mt-4" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
              My projects</h3>
        <div>
          
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            A collection of innovative mechanical solutions engineered with precision, creativity, and real-world impact.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <PagesCard
              title="Hydraulic System Design"
              description="Engineered a hydraulic system for efficient material handling, enhancing operational efficiency by 30%."
              image="/images/solarcharger.jpg"
              link="/hydraulic-system-design"
            />
            <PagesCard
              title="Sustainable Energy Solutions"
              description="Developed a prototype for a solar-powered water pump, reducing energy costs by 40%."
              image="/images/solarcharger.jpg"
              link="/sustainable-energy-solutions"
            />
            <PagesCard
              title="3D Printed Mechanical Parts"
              description="Created custom 3D printed components for rapid prototyping, reducing lead time by 50%."
              image="/images/3d-printed-parts.jpg"
              link="/3d-printed-mechanical-parts"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Mechanical;