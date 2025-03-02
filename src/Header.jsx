const Header = () => {
  return (
    <header className="bg-headerBg text-white p-5 fixed top-0 w-full shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mugambi Lewis</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
