import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import '../index.css';
import background from '../assets/background 2.jpg';
import adulis from '../assets/adulis.png';
import explore from '../assets/explore.jpg';
import gbi from '../assets/Gbi Gubae.jpg';
import Navbar from '../components/NavBar';

// Define animation variants for the Projects page
const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const hoverEffect = {
    scale: 1.1,
    transition: { duration: 0.3 },
};

const Projects = () => {
    // Array of project data
    const projectData = [
        {
            id: 1,
            title: 'Project 1: Adulis',
            description: 'An efficient freight ecosystem website between a shipper and a carrier worked with React, Node.js and Postgres.',
            image: adulis,
            live: 'https://adulis-sigma.vercel.app/', 
            link: 'https://github.com/habYaregal/Adulis',
        },
        {
            id: 2,
            title: 'Project 2: Gbi Gubae',
            description: 'A Flutter-based app that helps college students to get updates and engage with their Church association.',
            image: gbi,
            live: 'https://github.com/habYaregal/Adulis', 
            link: 'https://github.com/yourusername/project2',
        },
        {
            id: 3,
            title: 'Project 3: Explore Ethiopia',
            description: 'A responsive portfolio webpage for Ethiopian tourism which is made by React',
            image: explore,
            live: 'https://explore-et.vercel.app/', 
            link: 'https://github.com/habYaregal/Explore-Ethiopia',
        },
        
    ];

    return (
        <>
            <div
                className="min-h-screen bg-fixed bg-cover bg-center relative overflow-y-auto"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Navbar />

                {/* Futuristic HUD Overlay */}
                <div className="absolute inset-0 z-0 bg-overlay-pattern"></div>

                <motion.section
                    className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 flex flex-col items-center relative z-10 backdrop-blur-md bg-opacity-20 bg-black/30 rounded-lg p-6 lg:p-8 shadow-lg space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-neong-500 font-bold text-4xl sm:text-5xl lg:text-6xl font-pixel mb-16 text-center"
                        variants={fadeIn}
                    >
                        Projects
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                        variants={staggerContainer}
                    >
                        {projectData.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1"
                                whileHover={hoverEffect}
                                variants={fadeIn}
                            >
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-neonp-500 text-2xl font-semibold font-pixel mb-4">{project.title}</h3>
                                    <p className="text-gray-400 text-lg font-play mb-4">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neonp-500 hover:text-hud-white transition-colors font-play"
                                    >
                                        View on GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neonp-500 ml-16 hover:text-hud-white transition-colors font-play"
                                    >
                                        Live Preview
                                    </a>
                                </div>
                            </motion.div>
                        ))}
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

export default Projects;
