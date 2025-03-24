import { FaBars, FaTimes } from "react-icons/fa";
import {useRef} from 'react';
import "/src/styles/Header.css";
import { useEffect } from 'react';

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_now');
  }
  
  useEffect(() => {
    const handleClick = (e) => {
      // Only handle clicks on anchor tags with href starting with #
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        
        // Close the menu (update your state here)
        // This depends on how you manage your menu open/close state
        showNavbar(false);
        
        // Smooth scroll to section
        if (targetId !== '#') {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener to the nav container
    const nav = document.querySelector('nav');
    nav?.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      nav?.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array means this runs once on mount

  

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
