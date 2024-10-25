import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between md:justify-center  items-center px-4 md:px-0">
        {/* Logo or Brand Name (optional, can be added here if needed) */}

        {/* Links for large screens */}
        <ul className="hidden md:flex justify-center space-x-8">
          <li>
            <a href="#research" className="hover:text-orange-500">
              Research
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-500">
              Key Projects
            </a>
          </li>
          <li>
            <a href="#work-experience" className="hover:text-orange-500">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#cv" className="hover:text-orange-500">
              CV
            </a>
          </li>
          <li>
            <a href="#personal" className="hover:text-orange-500">
              Personal
            </a>
          </li>
          <li>
            <a href="#teaching" className="hover:text-orange-500">
              Teaching
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for mobile screens */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile with animation */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <ul className="md:hidden bg-black text-white space-y-4 mt-4 px-4">
          <li>
            <a href="#research" className="block hover:text-orange-500">
              Research
            </a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-orange-500">
              Key Projects
            </a>
          </li>
          <li>
            <a href="#work-experience" className="block hover:text-orange-500">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#cv" className="block hover:text-orange-500">
              CV
            </a>
          </li>
          <li>
            <a href="#personal" className="block hover:text-orange-500">
              Personal
            </a>
          </li>
          <li>
            <a href="#teaching" className="block hover:text-orange-500">
              Teaching
            </a>
          </li>
        </ul>
      </Transition>
    </nav>
  );
};

export default Navbar;
