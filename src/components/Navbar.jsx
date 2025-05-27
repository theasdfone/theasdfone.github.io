import { useEffect, useRef, useState } from 'react';
import "../css/Navbar.css"

import Resume from '../static/Resume.pdf';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
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
                        <li><a href='/'>Home</a></li>
                        <li><a href='/work'>Work History</a></li>
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
        </div>
    );
}

export default Navbar;