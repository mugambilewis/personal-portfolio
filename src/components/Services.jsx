import Servicescard from '../Servicescard';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Services = () =>{

  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4 "
  >
      <div className="my-8" id="services">
        
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
          className=" top-0 px-6  rounded-md"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 my-8 text-center">Services</h1>
        </motion.h2>
        <div className="flex items-center justify-center">
        
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          

            <Servicescard 
              icon="mdi:gear-play-outline" width="20" height="20" 
              title="Mechanical Engineering"
              description="I craft solutions that are not only functional but also optimized for performance. Want to see the gears in motion?"
              link="/mechanical"
            
            />
            <Servicescard 
              icon="hugeicons:web-design-02" width="20" height="20"
              title="Web Design"
              description="From sleek interfaces to seamless user experiences, I build websites that leave a lasting impression. Curious about the magic behind the design?"
              link="/web-design"
            
            />
            <Servicescard 
               icon="fluent:design-ideas-16-filled" width="16" height="16" 
              title="Digital Creator"
              description="Whether it's graphics, videos, or digital content, I create visuals that tell compelling stories. Want to see the creativity unfold?"
              link="/digital-creator"
              
            />
          </div>
      </div>
    </div>
    
      </motion.div>
    );
  }
  
  export default Services; 