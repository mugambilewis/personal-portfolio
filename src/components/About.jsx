import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="p-4"
  >
    <div className="bg-white text-gray-800 flex items-center justify-center ">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
    
                  {/* Left Section */}
          <div>

            <h2 className="text-3xl font-bold text-gray-900">Why hire me?</h2>
            <p className="mt-4 text-gray-800">
              I am a dedicated software developer with over 4 years of experience in  building dynamic and responsive web applications.
              My expertise lies in JavaScript, React, and Next.js, allowing me to create seamless user experiences.
              I am passionate about problem-solving and continuously improving my skills to deliver high-quality solutions.
            </p>
            <div className="mt-6 flex flex-col gap-4 space-y-4">
              <button
                className={`w-full py-4 px-4 text-lg font-semibold rounded-md ${activeTab === "experience" ? "bg-[#0768df] text-white" : "bg-[#60a5fa] text-white"}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`w-full py-4 px-4 text-lg font-semibold rounded-md ${activeTab === "education" ? "bg-[#0768df] text-white" : "bg-[#60a5fa] text-white"}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`w-full py-4 px-4 text-lg font-semibold rounded-md ${activeTab === "about" ? "bg-[#0768df] text-white" : "bg-[#60a5fa] text-white"}`}
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
                <p className="mt-2 text-gray-800">I have worked on various projects that have honed my skills in full-stack development.</p>
                <div className="mt-4 space-y-3">
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2021-Present</p>
                    <h4 className="text-lg font-semibold">Full-stack Developer</h4>
                    <p className="text-gray-800">Milkyway Cooperation</p>
                  </div>
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2020-2021</p>
                    <h4 className="text-lg font-semibold">Frontend Developer</h4>
                    <p className="text-gray-800">Tech Innovations</p>
                  </div>
                  <div className="bg-[#e6f1fe] p-4 rounded-md">
                    <p className="text-[#0768df]">2019-2020</p>
                    <h4 className="text-lg font-semibold">Intern Developer</h4>
                    <p className="text-gray-800">Web Solutions Inc.</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div>
                <h3 className="text-2xl font-bold">Education</h3>
                <p className="mt-2 text-gray-800">Bachelor&apos;s Degree in Computer Science - XYZ University</p>
                <p className="mt-2 text-gray-800">Graduated with Honors, specializing in Web Development and Software Engineering.</p>
              </div>
            )}
            {activeTab === "about" && (
              <div>
                <h3 className="text-2xl font-bold">About Me</h3>
                <p className="mt-2 text-gray-800">This is the About Me section.</p>
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
