import Card from "../Card";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faReact } from "@fortawesome/free-brands-svg-icons";  // ✅ Correct import
import { faPaintBrush, faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });
Skills.propTypes = {
  skill: PropTypes.string.isRequired,
};

  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4"
  >
      <div className="flex flex-col justify-center items-center" id="skills">
        {/*<div className=" top-0 px-6   rounded-md"><h1 className="text-3xl md:text-5xl font-bold text-gray-900">Skills</h1></div>*/}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
          className=" top-0 px-6   rounded-md"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 my-8">Skills</h1>
        </motion.h2>
        
        <div className="grid grid-cols-4 top-10 sm:grid-cols-4 sm:px-1 lg:grid-cols-6 gap-4  w-[95%] md:w-[80%] lg:w-[60%] mx-auto">
          
          <Card icon={faReact} title="CSS3" description="Styling beautiful layouts and animations." />

          <Card icon={faPaintBrush}title="PowerPoint"/>

          <Card icon={faFilePowerpoint} title="React.JS"/>

          <Card icon={faFilePowerpoint} title="TailwindCSS"/>

          <Card icon={<FontAwesomeIcon icon={faReact} />} title="React.JS" />
<Card icon={<FontAwesomeIcon icon={faPaintBrush} />} title="PowerPoint" />
<Card icon={<FontAwesomeIcon icon={faFilePowerpoint} />} title="TailwindCSS" />

         
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    </motion.div>
    ) ;
  }
  
  export default Skills; // Now 'About' is the default export
