//Card carousel component displaying projects
import React, { useState } from 'react';

const Cardcarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const projects = [
        {
            id: 1,
            title: "Slotify",
            description: "A modern venue booking application that allows users to search, filter, and reserve event spaces with real-time availability.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
            githubUrl: "https://github.com/Vivek-Hari04/HackNet",
            liveUrl: "https://hack-net-ten.vercel.app/"
        },
        {
            id: 2,
            title: "Linguly",
            description: "A comprehensive language learning platform featuring interactive flashcard-based lessons for major world languages with spaced repetition.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
            githubUrl: "https://github.com/Vivek-Hari04/Linguly",
            liveUrl: "https://linguly.vercel.app/"
        },
        {
            id: 3,
            title: "Jobseekr",
            description: "A part-time job finder application connecting students with flexible work opportunities, built with a robust backend and MySQL database.",
            technologies: ["React", "Node.js", "MySQL"],
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
            githubUrl: "#",
            liveUrl: "#"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Calculate which cards to show (always show 3 cards with current in center)
    const getVisibleCards = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + projects.length) % projects.length;
            visible.push({ ...projects[index], position: i });
        }
        return visible;
    };

    const visibleCards = getVisibleCards();

    return (
        <section id="projects" className="w-full px-4 sm:px-8 py-12 sm:py-16 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-white mb-2 transition-colors">Featured Projects</h2>
                    <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg transition-colors">Some of my recent work</p>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-black rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all border border-gray-200 dark:border-gray-700"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-black rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all border border-gray-200 dark:border-gray-700"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 px-8 sm:px-12 md:px-16 overflow-hidden">
                        {visibleCards.map((project, idx) => {
                            const isCenter = project.position === 0;
                            return (
                                <div
                                    key={`${project.id}-${idx}`}
                                    className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                                        isCenter 
                                            ? 'w-full max-w-sm sm:max-w-md scale-100 opacity-100 z-10' 
                                            : 'hidden sm:block w-60 sm:w-80 scale-90 opacity-70 z-0'
                                    }`}
                                >
                                    <div className="bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow">
                                        {/* Project Image */}
                                        <div className="w-full h-48 sm:h-56 bg-gray-200 dark:bg-gray-900 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-4 sm:p-6">
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-2 sm:mb-3 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm transition-colors">
                                                {project.description}
                                            </p>

                                            {/* Technology Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                                {project.technologies.map((tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-50 dark:bg-black text-green-600 dark:text-green-400 rounded-full text-xs font-medium border border-green-100 dark:border-green-400 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-black text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex-1 font-medium text-sm"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    Code
                                                </a>
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex-1 font-medium text-sm"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination Dots with Counter */}
                    <div className="flex flex-col items-center gap-3 mt-8">
                        <div className="flex justify-center gap-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'bg-green-500 w-8'
                                            : 'bg-gray-300 hover:bg-gray-400 w-2'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors">
                            {currentIndex + 1}/{projects.length}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cardcarousel;
