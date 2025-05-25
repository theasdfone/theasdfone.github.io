import { useEffect, useRef, useState } from 'react';
import './App.css';
import ProfilePic from './static/pfp.png';
import Resume from './static/Resume.pdf';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Prevent scrolling when menu is open on mobile
    if (menuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    // Only add listener if menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div>
      <nav ref={menuRef} className='navbar'>
        <div className='navbar-top'>
          <button
            ref={hamburgerRef}
            className='hamburger'
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        <div ref={menuRef} className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className='navbar-menu-list'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/workhistory'>Work History</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/contact'>Get in Touch</a></li>
            <li><a onClick={() => { window.open(Resume); }}>Resume</a></li>
          </ul>
        </div>
        <div ref={menuRef} className='navbar-socials'>
          <ul className='navbar-socials-list'>
            <li><a href='http://linkedin.com/in/theasdfone'><FaLinkedin /></a></li>
            <li><a href='http://github.com/theasdfone'><FaGithub /></a></li>
          </ul>
        </div>
      </nav>
      <div className='main-content'>
        <div className='main-persona'>
          <div className='main-persona-description'>
            <h1 className='main-persona-header'>Sam Zhu</h1>
            <div className='main-persona-paragraph'>
              <p>
                I'm a fourth-year engineering student at the University of Waterloo. I have a passion for hiking, drawing and coding.
                I enjoy working on side projects and doodling in my free time.
              </p>
              <p>
                My tech stack currently consists of Reactjs, Angularjs, .NET, Spring/Springboot along with some experience in writing scripts in SQL.
                I'm currently learning about software architecture and solutions in AWS which is something I'm keen to practice more with.
                I strive to keep myself up to date with my knowledge and constantly look for ways to challenge myself.
              </p>
            </div>
          </div>
          <div className='profile-picture'>
            <img src={ProfilePic} alt='Profile Picture' />
          </div>
        </div>
        <div>
          <h3>Worked With</h3>
          <div className='main-companies'>
            <button className='main-companies-button' href=''>Texada Software</button>
            <button className='main-companies-button' href=''>AutoTrader</button>
            <button className='main-companies-button' href=''>Shoplogix</button>
            <button className='main-companies-button' href=''>Westar Travel Ltd</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;