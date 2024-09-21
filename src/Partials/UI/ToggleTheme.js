import React, { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const switchTheme = () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-switch-wrapper md:flex md:items-center">
      <label
        data-testid="theme-switch"
        className="theme-switch relative inline-block h-[34px] w-[60px]"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          id="checkbox"
          className="hidden"
          checked={isDarkMode}
          onChange={switchTheme}
        />
        <div
          className="slider absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-black before:absolute before:bottom-[4px] before:left-[4px] before:h-[26px] before:w-[26px] before:rounded-full before:bg-orange before:transition-[0.4s] dark:bg-white"
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg width="100%" height="100%" viewBox="0 0 24 24" className="dark:hidden">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </label>
    </div>
  );
};

export default ToggleTheme;
