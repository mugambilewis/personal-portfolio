function Mechanical() {
    return (
      <div className=" service-details flex flex-col items-center min-h-[calc(100vh-7rem)] w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 ">Mechanical Engineering</h2>
        <div className="flex flex-col md:flex-row justify-between w-full mt-6 gap-6">
          <div className="w-full md:w-3/5 md:mt-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Turning Imagination into Engineered Reality</h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
              Driven by precision and innovation, I specialize in designing efficient mechanical systems that solve real-world problems. With strong expertise in CAD (Computer-Aided Design), I bring concepts to life through detailed 3D models and technical drawings. From prototyping sustainable energy solutions to crafting smart hydraulic mechanisms, my engineering approach blends creativity, accuracy, and functionality. Every project I take on reflects my passion for turning technical ideas into impactful, real-life applications.
            </p>
             <h3 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Key Achievements</h3>
          </div>
          <div className="w-full md:w-2/5 mt-6">
            <img 
              src="/images/mechanicalprofile.jpg"
              alt="Mechanical Engineering"
              className="w-full h-auto rounded-lg shadow-lg mt-4" />
          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
  
  export default Mechanical;