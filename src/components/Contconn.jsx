import Connect from "../Connect";
import Contact from "../Contact";
import { motion } from "framer-motion";

const Contconn = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-10"
  >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6 md:p-10 lg:p-16">
        <Contact />
        <Connect  />
      </div>
      </motion.div>
  );
}
export default Contconn;