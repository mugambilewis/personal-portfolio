import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from '../useTheme';


const About = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("experience");
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className={`p-4 ${
       theme === 'dark' 
        ? 'bg-gray-900 text-white border-gray-700'
        : 'bg-gray-100 text-gray-800 border-gray-200'
    }`}>
    <div className="flex items-center justify-center" id="about">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
    
                  {/* Left Section */}
          <div>

          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start position (hidden and below)
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
          className=" top-0   rounded-md"
        >
          <h2 className="text-3xl md:text-5xl font-bold  ">Why should work with me</h2>
        </motion.div>
            <p className="mt-4">
            I combine technical expertise, creativity, and problem-solving to deliver top-tier results. As a Mechanical Engineer, I design high-precision CAD models optimized for real-world applications. As a Front-End Developer, I build sleek, high-performing websites. My Graphics Design skills ensure every project stands out. Passionate about quality, innovation, and efficiency, I turn ideas into reality. Let’s create something amazing!
            </p>
            <div className="mt-6 flex flex-col gap-4 space-y-4">
              <button
                className={`w-full py-2 px-4 text-lg font-semibold rounded-md ${activeTab === "experience" ? "bg-[#0768df] text-white" : "bg-[#60a5fa] text-white"}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`w-full py-2 px-4 text-lg font-semibold rounded-md ${activeTab === "education" ? "bg-[#0768df] text-white" : "bg-[#60a5fa] text-white"}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`w-full py-2 px-4 text-lg font-semibold rounded-md ${activeTab === "about" ? "bg-[#0768df] text-white" : "bg-[#60a5fa] text-white"}`}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
            </div>
          </div>

          {/* Right Section - Content */}
          <div>
          {activeTab === "experience" && (
              <div>
                <h3 className="text-2xl font-bold">My Experience</h3>
                <p className="mt-2 ">I have worked on various projects that have honed my skills in mechanical engineering, web development, graphics design, and CAD modeling.</p>
                <div className="mt-4 space-y-3">
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2024</p>
                    <h4 className="text-lg font-semibold text-gray-900">Mechanical Engineer</h4>
                    <p className="text-gray-800">Igembe Tea Factory</p>
                  </div>
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2024-Present</p>
                    <h4 className="text-lg font-semibold text-gray-900">Frontend Developer</h4>
                    <p className="text-gray-800">Freelance</p>
                  </div>
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2023-Present</p>
                    <h4 className="text-lg font-semibold text-gray-900">Graphics Designer</h4>
                    <p className="text-gray-800">Freelance</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div>
                <h3 className="text-2xl font-bold">Education</h3>
                <p className="mt-2 ">I have worked on various projects that have honed my skills in mechanical engineering, web development, graphics design, and CAD modeling.</p>
                <div className="mt-4 space-y-3">
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2021-2025</p>
                    <h4 className="text-lg font-semibold text-gray-900">Mechanical Engineering</h4>
                    <p className="text-gray-800">Igembe Tea Factory</p>
                  </div>
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2023-2024</p>
                    <h4 className="text-lg font-semibold text-gray-900">Frontend Developer </h4>
                    <p className="text-gray-800">FreeCodeCamp</p>
                  </div>
                </div>
                
               
              </div>
            )}
            {activeTab === "about" && (
              <div>
                <h3 className="text-2xl font-bold">About Me</h3>
                <p className="mt-2 ">This is the About Me section.</p>
              </div>
            )}
          </div>

        </div>  
      </div>
    </div>
    </motion.div>  
);
};

export default About;
