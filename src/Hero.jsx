import Button from "./Button";
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
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-0 md:px-16 bg-white gap-1">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/profile.png"
          alt="Mugambi Lewis"
          className="w-64 md:w-96 lg:w-[28rem] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 mt-2 md:mt-0 ">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        Hi, It&apos;s Mugambi Lewis
        </h1>
        <h2 className="text-3xl font-bold">
            I&apos;m a <span ref={typedRef} className="text-blue-400"></span>
        </h2>

        <p className="mt-4 text-base text-gray-800 ">
        Passionate Frontend Engineer dedicated to crafting seamless, responsive, and visually stunning user experiences.I blend creativity and technical expertise to bring ideas to life on the web. From interactive elements to performanceoptimization, my mission is to make every pixel count and create digital journeys that engage and inspire.Let’s build something beautiful together!
        </p>
        <div className="mt-16 flex justify-center md:justify-start gap-4">
          <Button text="Resume" />
          <Button text="Hire Me" />
        </div>
      </div>
  
</section>

  );
};

export default Hero;
