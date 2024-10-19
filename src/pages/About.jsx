import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaToolbox, FaAward, FaCamera, FaPlane, FaLaptopCode } from 'react-icons/fa';
import '../index.css';
import background from '../assets/background 2.jpg';
import Navbar from '../components/NavBar';

// Define animation variants
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

const About = () => {
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
                    className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 flex flex-col lg:flex-row items-center relative z-10 backdrop-blur-md bg-opacity-20 bg-black/30 rounded-lg p-6 lg:p-8 shadow-lg space-y-6 lg:space-y-0 lg:space-x-6"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* About Content */}
                    <motion.div
                        className="space-y-6 lg:text-left text-center flex-1 bg-opacity-50 bg-black/20 p-6 sm:p-8 rounded-lg animate-slideIn"
                        variants={fadeIn}
                    >
                        <motion.h1
                            className="text-neong-500 font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight font-pixel"
                            whileHover={hoverEffect}
                        >
                            About Me
                        </motion.h1>
                        <motion.p
                            className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed font-play"
                            variants={fadeIn}
                        >
                            Hi, I'm <span className="text-neonp-500 font-semibold">Habtemariam Yaregal</span>, a Full-Stack Developer passionate about building interactive web experiences.
                        </motion.p>
                        <motion.p
                            className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed font-play"
                            variants={fadeIn}
                        >
                            I specialize in both frontend and backend development, with expertise in React, Node.js, and Flutter. My goal is to craft seamless, responsive apps.
                        </motion.p>

                        {/* Skills Section */}
                        <motion.div className="mt-10" variants={fadeIn}>
                            <h2 className="text-neong-500 text-3xl font-pixel">Skills & Expertise</h2>
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6"
                                variants={staggerContainer}
                            >
                                {[
                                    { title: "Frontend", skills: "React, Vue, Flutter", icon: <FaCode className="text-neonp-500 text-3xl" /> },
                                    { title: "Backend", skills: "Node.js, Express, Django", icon: <FaServer className="text-neonp-500 text-3xl" /> },
                                    { title: "Database", skills: "MongoDB, SQL", icon: <FaDatabase className="text-neonp-500 text-3xl" /> },
                                    { title: "Tools", skills: "Git, GitHub, Figma", icon: <FaToolbox className="text-neonp-500 text-3xl" /> }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1"
                                        whileHover={hoverEffect}
                                        variants={fadeIn}
                                    >
                                        <div className="mb-4">{item.icon}</div>
                                        <h3 className="text-neonp-500 text-2xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.skills}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Achievements Section */}
                        <motion.div className="mt-16" variants={fadeIn}>
                            <h2 className="text-neong-500 text-3xl font-pixel">Achievements</h2>
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6" variants={staggerContainer}>
                                {[
                                    { title: "Project Leadership", description: "Led a high-traffic app project, increasing user engagement by 40%", icon: <FaAward className="text-neonp-500 text-3xl" /> },
                                    { title: "Innovation Award", description: "Award-winning mobile app development at a tech competition", icon: <FaAward className="text-neonp-500 text-3xl" /> },
                                    { title: "Open Source", description: "Contributed to a GitHub project with over 1,000 stars", icon: <FaAward className="text-neonp-500 text-3xl" /> }
                                ].map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1"
                                        whileHover={hoverEffect}
                                        variants={fadeIn}
                                    >
                                        <div className="mb-4">{achievement.icon}</div>
                                        <h3 className="text-neonp-500 text-2xl font-semibold mb-4">{achievement.title}</h3>
                                        <p className="text-gray-400">{achievement.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hobbies & Interests */}
                        <motion.div className="mt-16" variants={fadeIn}>
                            <h2 className="text-neong-500 text-3xl font-pixel">Hobbies & Interests</h2>
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6" variants={staggerContainer}>
                                {[
                                    { title: "Photography", description: "Capturing the world through visual storytelling", icon: <FaCamera className="text-neonp-500 text-3xl" /> },
                                    { title: "Travel", description: "Exploring new cultures and experiences", icon: <FaPlane className="text-neonp-500 text-3xl" /> },
                                    { title: "Tech Projects", description: "Experimenting with new technologies", icon: <FaLaptopCode className="text-neonp-500 text-3xl" /> }
                                ].map((hobby, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1 text-center"
                                        whileHover={hoverEffect}
                                        variants={fadeIn}
                                    >
                                        <div className="mb-4">{hobby.icon}</div>
                                        <h3 className="text-neonp-500 text-2xl font-semibold mb-2">{hobby.title}</h3>
                                        <p className="text-gray-400">{hobby.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
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

export default About;
