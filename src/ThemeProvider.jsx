import React, { useEffect, useState } from 'react';
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";



export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2  text-gray-500 "
      >
         {theme === 'dark' ? <IoSunny/> : <IoMoon/>} 
      </button>
      {children}
    </div>
  );
};
