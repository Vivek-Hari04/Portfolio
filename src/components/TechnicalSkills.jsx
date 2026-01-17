import React from 'react';

const TechnicalSkills = () => {
    const technologies = [
        "Java",
        "Node.js",
        "TypeScript",
        "HTML/CSS",
        "SQL",
        "Git",
        "React",
        "JavaScript",
        "Python",
        "MongoDB"
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <section className="w-full px-8 py-16 text-center overflow-hidden bg-white dark:bg-black transition-colors duration-300 relative">
            {/* Starfield effect for dark mode */}
            <div className="absolute inset-0 opacity-30 dark:opacity-100 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(34,197,94)_1px,transparent_0)] [background-size:32px_32px] dark:block hidden"></div>
            </div>
            
            <div className="relative z-10">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-2 transition-colors">Technical Skills</h2>
                <p className="text-black dark:text-white text-lg mb-8 transition-colors">Technologies I work with</p>
                
                {/* Infinite Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <div 
                        className="flex gap-6"
                        style={{
                            animation: 'scroll 30s linear infinite',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
                    >
                        {/* First set of tags */}
                        {duplicatedTechnologies.map((tech, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-black border border-green-200 dark:border-green-400 rounded-lg shadow-sm whitespace-nowrap transition-colors"
                            >
                                <span className="text-green-600 dark:text-green-400 font-semibold transition-colors">&lt;/&gt;</span>
                                <span className="text-black dark:text-white font-medium transition-colors">{tech}</span>
                            </div>
                        ))}
                        {/* Second set for seamless loop */}
                        {duplicatedTechnologies.map((tech, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-black border border-green-200 dark:border-green-400 rounded-lg shadow-sm whitespace-nowrap transition-colors"
                            >
                                <span className="text-green-600 dark:text-green-400 font-semibold transition-colors">&lt;/&gt;</span>
                                <span className="text-black dark:text-white font-medium transition-colors">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TechnicalSkills;
