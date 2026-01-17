import React from 'react';

const About = () => {
    return (
        <section id="about" className="w-full px-4 sm:px-8 py-12 sm:py-16 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-white text-center mb-6 sm:mb-8 transition-colors">About Me</h2>
                
                {/* Paragraphs */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                    <p className="text-gray-700 dark:text-white leading-relaxed text-sm sm:text-base transition-colors">
                        I'm a dedicated B.Tech Computer Engineering student with a passion for developing cutting-edge solutions that bridge the gap between hardware and software. My journey in technology is driven by curiosity and the desire to create meaningful impact through innovation.
                    </p>
                    <p className="text-gray-700 dark:text-white leading-relaxed text-sm sm:text-base transition-colors">
                        From embedded systems to full-stack web development, I enjoy tackling complex problems and continuously expanding my knowledge in emerging technologies like AI, IoT, and cloud computing.
                    </p>
                </div>

                {/* Quote Section */}
                <div className="flex flex-col items-center mt-12 sm:mt-16">
                    {/* Quote Icon */}
                    <div className="text-green-500 dark:text-green-400 text-6xl sm:text-8xl font-serif mb-2 sm:mb-4 transition-colors">"</div>
                    
                    {/* Quote Text */}
                    <p className="text-gray-700 dark:text-white italic text-base sm:text-lg mb-2 text-center max-w-2xl px-4 transition-colors">
                        The only way to do great work is to love what you do.
                    </p>
                    
                    {/* Quote Author */}
                    <p className="text-gray-700 dark:text-white text-xs sm:text-sm ml-auto mr-0 max-w-2xl w-full text-right px-4 transition-colors">
                        — Steve Jobs
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

