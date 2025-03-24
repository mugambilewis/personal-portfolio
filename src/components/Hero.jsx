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
    className="min-h-screen w-screen overflow-hidden flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-0 md:px-16 bg-white gap-2">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center my-2">
        <img
          src="/images/profile.png"
          alt="Mugambi Lewis Profile picture"
          className="w-64 md:w-96 lg:w-[28rem] h-auto object-cover  shadow-lg transition-transform duration-300 hover:scale-102"
        />
      </div>

      <div className="w-[100%] md:w-1/2 mt-2 md:mt-2 space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
        Hi, It&apos;s Mugambi Lewis
        </h1>
        <h2 className="text-3xl font-bold">
            I&apos;m a <span ref={typedRef} className="text-blue-400"></span>
        </h2>

        <p className="mt-4 text-base text-gray-800 ">
        Bringing Ideas to Life with Design and Innovation.
I’m a passionate Mechanical Engineer, Front-End Developer, and Graphics Designer who loves creating things that stand out. Whether it&apos;s engineering smart solutions, building stunning websites, or designing eye-catching visuals, I turn ideas into reality with creativity and precision. Every project I work on is driven by innovation, quality, and attention to detail, ensuring the best results every time. Let’s build something amazing together!
        </p>
        <div className="mt-16 flex justify-center md:justify-start gap-4">
          <button
            className="inline-block px-8 py-2 bg-white rounded-[0.375rem] text-[#60a5fa] text-base border-[2px] border-[#60a5fa] cursor-pointer transition duration-300 ease-in-out hover:bg-[#60a5fa] hover:text-white"
              >Resume
          </button>
          <a href="mugambilewis001@gmail.com">
          <button
            className="inline-block px-8 py-2 bg-white rounded-[0.375rem] text-[#60a5fa] text-base border-[2px] border-[#60a5fa] cursor-pointer transition duration-300 ease-in-out hover:bg-[#60a5fa] hover:text-white"
            >Hire Me
          </button>
          </a>
          
          
          
        </div>
      </div>
  
</section>

  );
};

export default Hero;
