import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../index.css';
import background from '../assets/background 1.jpg';
import Navbar from '../components/NavBar';

const About = () => {

    return (
        <>
            <div
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Navbar/>
            </div>
        </>
    );
};

export default About;
