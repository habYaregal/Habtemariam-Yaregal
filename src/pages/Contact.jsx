import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../index.css';
import background from '../assets/background 2.jpg';
import Navbar from '../components/NavBar';

// Define animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const hoverEffect = {
    scale: 1.1,
    transition: { duration: 0.3 },
};

const Contact = () => {
    return (
        <>
            <div
                className="min-h-screen bg-fixed bg-cover bg-center relative overflow-y-auto"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Navbar />

                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 bg-black/30"></div>

                <motion.section
                    className="mt-20 lg:mt-32 mx-auto max-w-screen-xl pb-12 px-4 lg:px-10 flex flex-col items-center relative z-10 backdrop-blur-md bg-opacity-20 bg-black/30 rounded-lg p-6 lg:p-8 shadow-lg space-y-6 lg:space-y-10"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    {/* Heading */}
                    <motion.h2
                        className="text-neong-500 font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight font-pixel text-center"
                        whileHover={hoverEffect}
                    >
                        Contact Me
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 mt-8 w-full lg:w-auto">
                        {/* Contact Form */}
                        <motion.div className="w-full lg:w-1/2 bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg border border-gray-700" variants={fadeIn}>
                            <form>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-neonp-500 text-sm font-semibold mb-2 font-play">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-900 bg-opacity-50 text-white rounded-lg border border-neong-500 focus:outline-none focus:ring-2 focus:ring-neong-500 placeholder-gray-500"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-neonp-500 text-sm font-semibold mb-2 font-play">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-900 bg-opacity-50 text-white rounded-lg border border-neong-500 focus:outline-none focus:ring-2 focus:ring-neong-500 placeholder-gray-500"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-neonp-500 text-sm font-semibold mb-2 font-play">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full h-32 px-4 py-3 bg-gray-900 bg-opacity-50 text-white rounded-lg border border-neong-500 focus:outline-none focus:ring-2 focus:ring-neong-500 placeholder-gray-500"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full py-3 bg-neonp-500 text-black text-center rounded-md shadow-md transition hover:bg-neonp-600"
                                    whileHover={hoverEffect}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div className="mt-12 lg:mt-0 w-full lg:w-1/2" variants={fadeIn}>
                            <h3 className="text-neong-500 text-3xl font-pixel mb-6">Get In Touch</h3>
                            <p className="text-gray-300 mb-8 font-play text-center lg:text-left">
                                Feel free to reach out for collaborations, project inquiries, or just to connect!
                            </p>
                            <ul className="text-gray-300 space-y-4 text-center lg:text-left">
                                <li>
                                    <span className="font-semibold">Email:</span>{' '}
                                    <a href="mailto:habtemariamyaregal@gmail.com" className="text-neonp-500 hover:text-neonp-300 transition">
                                    habtemariamyaregal@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <span className="font-semibold">Phone:</span>{' '}
                                    <a href="tel:+251921334113" className="text-neonp-500 hover:text-neonp-300 transition">
                                        +251-921-33-4113
                                    </a>
                                </li>
                                <li>
                                    <span className="font-semibold">LinkedIn:</span>{' '}
                                    <a href="https://www.linkedin.com/in/habtemariam-yaregal-5403682a5/" target="_blank" rel="noopener noreferrer" className="text-neonp-500 hover:text-neonp-300 transition">
                                        linkedin.com/in/habtemariam-yaregal
                                    </a>
                                </li>
                                <li>
                                    <span className="font-semibold">GitHub:</span>{' '}
                                    <a href="https://github.com/habYaregal" target="_blank" rel="noopener noreferrer" className="text-neonp-500 hover:text-neonp-300 transition">
                                        github.com/habYaregal
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </>
    );
};

export default Contact;
