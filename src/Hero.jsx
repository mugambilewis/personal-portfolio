import Button from "./Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 bg-white">
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/images/profile.png"
      alt="Mugambi Lewis"
      className="w-64 md:w-96 lg:w-[28rem] h-auto object-cover rounded-lg shadow-lg"
    />
  </div>

  <div className="w-full md:w-1/2 mt-2 md:mt-0">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
    Hi, It&apos;s Mugambi Lewis
    </h1>
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
    I&apos;m a Frontend Engineer
    </h2>
    <p className="mt-4 text-lg text-gray-800">
    Passionate Frontend Engineer dedicated to crafting seamless, responsive, and visually stunning user experiences.I blend creativity and technical expertise to bring ideas to life on the web. From interactive elements to performanceoptimization, my mission is to make every pixel count and create digital journeys that engage and inspire.Let’s build something beautiful together!
    </p>
    <div className="mt-8 flex justify-center md:justify-start gap-4">
      <Button text="Resume" />
      <Button text="Hire Me" />
    </div>
  </div>
  
</section>

  );
};

export default Hero;
