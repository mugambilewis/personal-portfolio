import { FaBars, FaTimes } from "react-icons/fa";
import {useRef} from 'react';
import "/src/styles/Header.css";


const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_now');
  }

  return (
    
    <header>
      <h2>Mugambi.</h2>
      
      <nav ref = {navRef}>
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#skills" className="hover:text-primary">Skills</a>
        <a href="#services" className="hover:text-primary">Services</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
        <button className="nav-btn nav-close-btn" onClick = {showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick = {showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
