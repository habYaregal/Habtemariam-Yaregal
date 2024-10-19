import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../index.css';
import background from '../assets/background 2.jpg';
import profile from '../assets/profile.png';
import Navbar from '../components/NavBar';

const Home = () => {
    // Animation variants
    const fadeInVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }, // Increased duration for slower effect
        },
    };

    const fadeInWithDelay = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1, ease: 'easeOut' }, // Adding delay
        },
    };

    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center relative overflow-y-auto"
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
            >
                <Navbar />

                {/* Futuristic HUD Overlay */}
                <div className="absolute inset-0 z-0 bg-overlay-pattern"></div>

                <motion.section
                    initial="hidden"
                    animate="visible"
                    className="mt-36 mx-auto max-w-screen-xl pb-12 px-4 flex flex-col-reverse lg:flex-row items-center relative z-10 backdrop-blur-md bg-opacity-20 bg-black/30 rounded-lg p-6 lg:p-8 shadow-lg space-y-6 lg:space-y-0 lg:space-x-6"
                >
                    {/* Hero content */}
                    <motion.div
                        variants={fadeInVariant}
                        className="space-y-6 lg:text-left text-center flex-1 bg-opacity-50 bg-black/20 p-6 sm:p-8 rounded-lg"
                    >
                        <h1 className="text-neong-500 font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight font-pixel">
                            Hi, I'm <span className="text-neonp-500">Habtemariam Yaregal</span>
                        </h1>
                        <p className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed font-play">
                            I'm a Full-Stack Developer passionate about building interactive web experiences. Let's create something amazing together.
                        </p>
                        {/* Adjusted button alignment for mobile */}
                        <motion.div
                            variants={fadeInWithDelay}
                            className="pt-8 space-y-3 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 lg:justify-start justify-center"
                        >
                            <a href="/Habtemariam Yaregal CV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 sm:px-8 sm:py-3 w-full bg-neong-500 text-black font-orbit text-center rounded-md shadow-lg transition transform hover:scale-110">
                                Download CV
                            </a>
                            <a href="contact" className="px-6 py-2 sm:px-8 sm:py-3 w-full bg-neonp-500 text-black text-center font-orbit rounded-md shadow-lg transition transform hover:scale-110">
                                Get in Touch
                            </a>
                        </motion.div>
                        <motion.div variants={fadeInWithDelay} className="mt-6 flex items-center justify-center lg:justify-center space-x-4">
                            <a href="https://facebook.com" className="text-neonp-500 hover:text-white text-2xl"><FaFacebook /></a>
                            <a href="https://twitter.com" className="text-neonp-500 hover:text-white text-2xl"><FaTwitter /></a>
                            <a href="https://linkedin.com" className="text-neonp-500 hover:text-white text-2xl"><FaLinkedin /></a>
                            <a href="https://github.com" className="text-neonp-500 hover:text-white text-2xl"><FaGithub /></a>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image with Depth Effect */}
                    <motion.div
                        variants={fadeInWithDelay}
                        className="flex-1 relative mb-8 lg:mb-0"
                    >
                        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] mx-auto flex items-center justify-center">
                            {/* Glowing ring with depth and parallax effect */}
                            <div className="absolute inset-0 w-full h-full rounded-full border-[6px] sm:border-[8px] border-neonp-500 animate-glow-spin"></div>
                            <img
                                src={profile}
                                className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-cover object-top transform scale-105 shadow-2xl rounded-full neon-border animate-pulse-slow"
                                alt="Habtemariam Yaregal"
                            />
                        </div>
                    </motion.div>
                </motion.section>

                {/* Moving Neon Lines / HUD Effect */}
                <div className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none">
                    <div className="neon-lines-top"></div>
                    <div className="neon-lines-bottom"></div>
                </div>
            </div>
        </>
    );
};

export default Home;
