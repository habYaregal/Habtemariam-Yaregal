import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Make sure this file contains the new animations
import background from '../assets/Back Ground.jpg';

const Menu = () => {
    const [showFirstText, setShowFirstText] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setShowFirstText((prev) => !prev);
                setIsVisible(true);
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const handleScreenClick = () => {
        setIsClicked(true);
    };

    return (
        <>
            <div
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${background})` }}
                onClick={handleScreenClick}
            >
                {/* Conditionally render the heading only if the screen has not been clicked */}
                {!isClicked && (
                    <h1
                        className={`text-center text-[80px] font-pixel text-[#FFFFFF] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {showFirstText
                            ? 'Welcome to Habtemariam Yaregal Portfolio'
                            : 'Click anywhere to continue'}
                    </h1>
                )}

                {/* Conditionally render the links after the screen is clicked with fade-in slide animations */}
                {isClicked && (
                    <div className='flex flex-col gap-4'>
                        <Link to="/home" className='animate-slide-in-right text-center text-[40px] font-pixel text-[#FFFFFF]'>Home</Link>
                        <Link to="/about" className='animate-slide-in-left text-center text-[40px] font-pixel text-[#FFFFFF]'>About</Link>
                        <Link to="/projects" className='animate-slide-in-right text-center text-[40px] font-pixel text-[#FFFFFF]'>Projects</Link>
                        <Link to="/contact" className='animate-slide-in-left text-center text-[40px] font-pixel text-[#FFFFFF]'>Contact</Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Menu;
