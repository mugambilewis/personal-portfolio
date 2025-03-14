import Servicescard from './Servicescard';
import { motion } from "framer-motion";

const Services = () =>{
  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-10"
  >
      {/* eslint-disable-next-line react/no-unknown-property */}
      <div className="py-8" id="services">
        
        <div className = "container mx-auto p-4"></div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">My Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Servicescard 
            icon="mdi:gear-play-outline" width="24" height="24" 
            title="Mechanical Engineering"
            description="Designing and developing mechanical systems."
            link="/mechanical"
          
          />
          <Servicescard 
            icon="mdi:gear-play-outline" width="24" height="24" 
            title="Web Design"
            description="Designing and developing websites."
            link="/web-design"
          
          />
          <Servicescard 
            icon="mdi:gear-play-outline" width="24" height="24" 
            title="Digital Creator"
            description="Designing and developing mechanical systems."
            link="/digital-creator"
            
          />
        </div>
      </div>
      </motion.div>
    );
  }
  
  export default Services; 