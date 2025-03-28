import Connect from "../Connect";
import Contact from "../Contact";
import { motion } from "framer-motion";

const Contconn = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4"
  >
    <div className="flex items-center justify-center" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          <Contact />
          <Connect  />
         
        </div>
      </div>
      </motion.div>
  );
}
export default Contconn;
