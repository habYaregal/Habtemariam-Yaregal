import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../index.css';
import background from '../assets/background 1.jpg';  // Replace with a more gaming-like background
import profile from '../assets/profile.png';
import Navbar from '../components/NavBar';

const Home = () => {
    return (
        <>
            <div
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Navbar />
                <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 flex flex-col-reverse lg:flex-row items-center">
                    {/* Hero content */}
                    <div className="space-y-4 lg:text-left text-center flex-1 animate-fadeInUp">
                        <h1 className="text-neon-purple font-bold text-5xl xl:text-6xl leading-tight">
                            Hi, I'm <span className="text-neonb">Habtemariam Yaregal</span>
                        </h1>
                        <p className="text-gray-300 max-w-xl leading-relaxed animate-fadeInUp delay-200">
                            I'm a Full-Stack Developer passionate about building interactive web experiences. Let's create something amazing together.
                        </p>
                        <div className="pt-10 space-y-3 sm:flex sm:space-y-0 sm:space-x-6 lg:justify-start justify-center">
                            <a href="#projects" className="px-8 py-3 w-full bg-neong text-black text-center rounded-md shadow-lg transition hover:scale-105 sm:w-auto">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-3 w-full bg-neonb text-black text-center rounded-md shadow-lg transition hover:scale-105 sm:w-auto">
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 relative mb-8 lg:mb-0">
                        <div className="relative w-[600px] h-[600px] lg:w-[750px] lg:h-[750px] mx-auto">
                            {/* Gaming-style glowing ring around the image */}
                            <div className="absolute inset-0 w-full h-full rounded-full border-4 border-neonp animate-pulse"></div>
                            <img
                                src={profile}
                                className="w-[700px] h-[1000px] object-cover object-top transform scale-105 shadow-xl"
                                alt="Habtemariam Yaregal"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
