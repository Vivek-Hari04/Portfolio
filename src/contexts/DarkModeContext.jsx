import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within DarkModeProvider');
    }
    return context;
};

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage for saved preference, default to false (light mode)
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode');
            const darkMode = saved === 'true';
            return darkMode;
        }
        return false; // Default to light mode
    });

    useEffect(() => {
        // Update document class and localStorage whenever isDark changes
        const htmlElement = document.documentElement;
        
        // Force remove dark class first, then add if needed
        htmlElement.classList.remove('dark');
        
        if (isDark) {
            htmlElement.classList.add('dark');
        }
        
        localStorage.setItem('darkMode', String(isDark));
        
        // Debug log
        console.log('Dark mode changed:', isDark, 'HTML classes:', htmlElement.className);
    }, [isDark]);

    const toggleDarkMode = () => {
        console.log('=== TOGGLE CLICKED ===');
        console.log('Current isDark before toggle:', isDark);
        setIsDark(prev => {
            const newValue = !prev;
            console.log('New isDark value:', newValue);
            // Immediately update DOM to verify
            if (newValue) {
                document.documentElement.classList.add('dark');
                console.log('Added dark class. HTML classes:', document.documentElement.className);
            } else {
                document.documentElement.classList.remove('dark');
                console.log('Removed dark class. HTML classes:', document.documentElement.className);
            }
            return newValue;
        });
    };

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

