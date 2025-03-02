

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center bg-lightBg dark:bg-darkBg"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-headingLight dark:text-headingDark">
          Hi, Im Mugambi Lewis 👋
        </h1>
        <p className="text-textLight dark:text-textDark mt-4">
          A Web Developer, Designer, and Mechanical Engineer passionate about
          crafting amazing digital experiences.
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
