import React from 'react';
import profilePic from '../assets/Pic.png';

const Profile = () => {
    return (
        <section className="w-full px-4 sm:px-8 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 bg-white dark:bg-black transition-colors duration-300">
            {/* Left Side - Profile Picture with Background Text */}
            <div className="relative flex-1 w-full lg:w-auto h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-300 dark:text-gray-800 font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wider transform -rotate-90 whitespace-nowrap transition-colors">
                        Vivek
                    </span>
                </div>
                {/* Profile Picture */}
                <div className="relative z-10">
                    <img
                        src={profilePic}
                        alt="Vivek Hari"
                        className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full object-cover border-4 border-white shadow-xl"
                    />
                </div>
            </div>

            {/* Right Side - Profile Content */}
            <div className="flex-1 w-full lg:max-w-2xl text-center lg:text-left">
                <p className="text-black dark:text-white text-base sm:text-lg mb-2 transition-colors">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 transition-colors">Vivek Hari</h1>
                <p className="text-black dark:text-white text-lg sm:text-xl mb-6 transition-colors">Computer Engineering Student</p>
                <p className="text-black dark:text-white mb-8 leading-relaxed text-sm sm:text-base transition-colors">
                    Aspiring B.Tech student passionate about building innovative solutions and exploring the intersection of hardware and software.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                        href="#projects"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium shadow-sm hover:shadow-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-black text-green-600 dark:text-white border-2 border-green-600 dark:border-white rounded-lg hover:bg-green-50 dark:hover:bg-gray-900 transition-colors font-medium shadow-sm hover:shadow-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Profile;

