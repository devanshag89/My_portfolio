import React, { useState } from 'react';
//import Button from './Button';
import ToggleTheme from './UI/ToggleTheme';

const menuItems = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header data-testid="header" className="my-5 flex flex-col items-center justify-between lg:flex-row">
      <div className="flex w-full items-center justify-between lg:w-auto">
        {/* <Button size="sm" name="Download CV">Download CV</Button> */}
        <div className="block lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="h-4 w-4 text-black dark:text-white">
              <path d="M4 8h24v2H4zm0 6h24v2H4zm0 6h24v2H4z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} mt-2 w-full lg:mt-0 lg:flex lg:w-auto`}>
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                aria-label="navigation link"
                href={item.path}
                className="flex py-2 text-black hover:text-orange dark:text-white dark:hover:text-orange lg:px-3"
              >
                {item.title}
              </a>
            </li>
          ))}
          <li><ToggleTheme /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
