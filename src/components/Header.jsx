import React, { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext.jsx';

const Header = () => {
    const { isDark, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between bg-white dark:bg-black transition-colors duration-300 sticky top-0 z-50 shadow-sm dark:shadow-gray-900">
            {/* Logo */}
            <div className="text-black dark:text-white font-bold text-lg sm:text-xl transition-colors">
                &lt;/&gt; Vivek Hari &lt;/&gt;
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
                <a 
                    href="#about" 
                    className="text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-500 transition-colors font-medium"
                >
                    About
                </a>
                <a 
                    href="#projects" 
                    className="text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-500 transition-colors font-medium"
                >
                    Projects
                </a>
                <a 
                    href="#contact" 
                    className="text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-500 transition-colors font-medium"
                >
                    Contact
                </a>
                
                {/* Dark Mode Toggle */}
                <button 
                    onClick={toggleDarkMode}
                    className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center justify-center w-10 h-10" 
                    aria-label="Dark mode toggle"
                >
                    {isDark ? (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Button & Controls */}
            <div className="flex items-center gap-2 md:hidden">
                {/* Dark Mode Toggle - Mobile */}
                <button 
                    onClick={toggleDarkMode}
                    className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center justify-center w-10 h-10" 
                    aria-label="Dark mode toggle"
                >
                    {isDark ? (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-lg md:hidden">
                    <nav className="flex flex-col px-4 py-4 space-y-4">
                        <a 
                            href="#about" 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                            About
                        </a>
                        <a 
                            href="#projects" 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
