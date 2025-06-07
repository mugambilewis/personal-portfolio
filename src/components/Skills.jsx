import Card from "../Card";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Skills = () => {
  
  const skills = [
    {
      title: "SolidWorks",
      description: "",
      icon: "/icons/icons8-solidworks.svg",
    },
    {
      title: "AutoCAD",
      description: "",
      icon: "/icons/autocadicon.png",
    },
    {
      title: "Proteus",
      description: "",
      icon: "/icons/Proteus.png",
    },
    {
      title: "Prompt Engineering",
      description: "",
      icon: "/icons/AI.png",
    },
    
   
    {
      icon: "/icons/reacticon.png",
      title: "React",
      description: "",
   
    },
    {
      title: "Tailwind",
      description: "",
      icon: "/icons/tailwindicon.png",
    },
    {
      title: "UX/UI Design",
      description: "",
      icon: "/icons/settings.png",
    },
    {
      title: "Figma",
      description: "",
      icon: "/icons/figmaicon.png",
    },
    {
      title: "Photoshop",
      description: "",
      icon: "/icons/photoshop.svg",
    },
    {
      title: "Canva",
      description: "",
      icon: "/icons/canvaicon.png",
    },
   
    {
      title: "CapCut",
      description: "",
      icon: "/icons/CapCuticon.png",
    },
   
    
    {
      title: "Power Point",
      description: "",
      icon: "/images/powerpoint.png",
    },
    
    
  ]

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });
Skills.propTypes = {
  skill: PropTypes.string.isRequired,
};

  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4"
  >
      <div className="flex flex-col justify-center items-center" id="skills">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
          className=" top-0 px-6 rounded-md"
        >
          <h1 className="text-3xl md:text-5xl font-bold  my-8">Skills</h1>
        </motion.div>
        <p className="  w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        I excel in problem-solving and analytical thinking, using an engineering mindset to tackle challenges efficiently. With strong project management skills, I plan and execute tasks effectively using Agile methodologies. My expertise in technical writing and documentation ensures clear and precise communication in reports and designs. I also leverage affiliate marketing and monetization strategies to maximize digital opportunities. Additionally, my communication and public speaking skills enable me to collaborate effectively, while my adaptability keeps me ahead in a fast-evolving tech landscape.
        </p>
        <h2 className="text-3xl md:text-5xl mt-6 font-bold  ">Technical skills</h2>

        <div className="grid grid-cols-4 mt-4 sm:grid-cols-4 sm:px-1 lg:grid-cols-6 gap-2 md:gap-4  w-[95%] md:w-[80%] lg:w-[60%] mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                icon={skill.icon} 
                title={skill.title}
                description={skill.description}
              />
            ))}
        </div>
        
      </div>
    </motion.div>
    ) ;
  }
  
  export default Skills;
