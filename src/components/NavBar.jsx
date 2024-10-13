import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillInfoCircle, AiFillProject, AiFillMail } from 'react-icons/ai';

const Navbar = () => {
    const location = useLocation();

    // Function to check if the path is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-10 left-0 right-0 w-full z-50 bg-transparent px-4 py-2 flex justify-center gap-12 md:gap-24 items-center">
            {/* Home NavLink */}
            <NavLink
                to="/home"
                className={isActive('/home') 
                    ? 'bg-purple-700 bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center gap-2' // Adjust opacity
                    : 'text-white flex items-center gap-2'
                }
            >
                <AiFillHome size={24} />
                {isActive('/home') && <span className="ml-2">Home</span>}
            </NavLink>

            {/* About NavLink */}
            <NavLink
                to="/about"
                className={isActive('/about') 
                    ? 'bg-purple-700 bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center gap-2' // Adjust opacity
                    : 'text-white flex items-center gap-2'
                }
            >
                <AiFillInfoCircle size={24} />
                {isActive('/about') && <span className="ml-2">About</span>}
            </NavLink>

            {/* Projects NavLink */}
            <NavLink
                to="/projects"
                className={isActive('/projects') 
                    ? 'bg-purple-700 bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center gap-2' // Adjust opacity
                    : 'text-white flex items-center gap-2'
                }
            >
                <AiFillProject size={24} />
                {isActive('/projects') && <span className="ml-2">Projects</span>}
            </NavLink>

            {/* Contact NavLink */}
            <NavLink
                to="/contact"
                className={isActive('/contact') 
                    ? 'bg-purple-700 bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center gap-2' // Adjust opacity
                    : 'text-white flex items-center gap-2'
                }
            >
                <AiFillMail size={24} />
                {isActive('/contact') && <span className="ml-2">Contact</span>}
            </NavLink>
        </nav>
    );
};

export default Navbar;
