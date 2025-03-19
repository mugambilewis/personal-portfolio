import Servicescard from '../Servicescard';
import { motion } from "framer-motion";

const Services = () =>{
  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4"
  >
      <div className="" id="services">
        
        
       
        <div className=" top-0 text-center rounded-md"><h1 className="text-3xl md:text-5xl font-bold text-gray-900">Services</h1></div>
        <div className="flex items-center justify-center">
        
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          

            <Servicescard 
              icon="mdi:gear-play-outline" width="24" height="24" 
              title="Mechanical Engineering"
              description="Designing and developing mechanical systems."
              link="/mechanical"
            
            />
            <Servicescard 
              icon="hugeicons:web-design-02" width="24" height="24"
              title="Web Design"
              description="Designing and developing websites."
              link="/web-design"
            
            />
            <Servicescard 
               icon="fluent:design-ideas-16-filled" width="16" height="16" 
              title="Digital Creator"
              description="Designing and developing mechanical systems."
              link="/digital-creator"
              
            />
          </div>
      </div>
    </div>
    
      </motion.div>
    );
  }
  
  export default Services; 