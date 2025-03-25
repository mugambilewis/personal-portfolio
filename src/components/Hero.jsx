{/*import Button from "../Button";
  import { useState} from "react";*/}
import { useEffect, useRef } from "react";
import Typed from "typed.js";



const Hero = () => {
  
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Mechanical Engineer", "CAD Designer", "Frontend Developer", "Graphics Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 1000,
      showCursor: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);
  return (
    <section 
    id="hero"
    className="w-screen min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 bg-white gap-6">

      <div className="w-3/4 md:w-1/3 flex justify-center my-2">
        <img
          src="/images/profile.png"
          alt="Mugambi Lewis Profile picture"
          className="w-[clamp(150px, 40vw, 300px)] max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className=" w-[95%]  md:w-2/3 md:mt-2 space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
        Hi, It&apos;s Mugambi Lewis
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
            I&apos;m a <span ref={typedRef} className="text-blue-400"></span>
        </h2>

        <p className="mt-4 text-text-[clamp(1rem, 2vw, 1.5rem)] text-gray-800 ">
        Bringing Ideas to Life with Design and Innovation.
I’m a passionate Mechanical Engineer, Front-End Developer, and Graphics Designer who loves creating things that stand out. Whether it&apos;s engineering smart solutions, building stunning websites, or designing eye-catching visuals, I turn ideas into reality with creativity and precision. Every project I work on is driven by innovation, quality, and attention to detail, ensuring the best results every time. Let’s build something amazing together!
        </p>
        <div className="mt-12 flex  justify-center md:flex-row md:justify-start gap-4">
          <button
            className="inline-block px-8 py-2 bg-white rounded-[0.375rem] text-[#60a5fa] text-base border-[2px] border-[#60a5fa] cursor-pointer transition duration-300 ease-in-out hover:bg-[#60a5fa] hover:text-white"
              >Resume
          </button>
         
          <button
            className="inline-block px-8 py-2 bg-white rounded-[0.375rem] text-[#60a5fa] text-base border-[2px] border-[#60a5fa] cursor-pointer transition duration-300 ease-in-out hover:bg-[#60a5fa] hover:text-white"
            >Hire Me
          </button>
          
          
          
        </div>
      </div>
  
</section>

  );
};

export default Hero;
