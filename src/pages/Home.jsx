import React, { useState, useEffect } from 'react';
import '../index.css';
import background from '../assets/background.jpg';

const Home = () => {
    const [showFirstText, setShowFirstText] = useState(true);
    const [isVisible, setIsVisible] = useState(true); 
    
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

    return (
        <>
            <div
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <h1
                    className={`text-center text-[80px] font-jacky text-[#FFFFFF] transition-opacity duration-500 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {showFirstText
                        ? 'Welcome to Habtemariam Yaregal Portfolio'
                        : 'Click anywhere to continue'}
                </h1>
            </div>
        </>
    );
};

export default Home;
