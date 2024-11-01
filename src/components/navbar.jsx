import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between md:justify-center items-center px-4 md:px-0">
        <ul className="hidden md:flex justify-center space-x-8">
          <li>
            <Link
              to="/"
              className={isActive("/") ? "text-orange-500" : "hover:text-orange-500"}
            >
              Personal
            </Link>
          </li>
          <li>
            <Link
              to="/key-projects"
              className={isActive("/key-projects") ? "text-orange-500" : "hover:text-orange-500"}
            >
              Key Projects
            </Link>
          </li>
          <li>
            <Link
              to="/work-experience"
              className={isActive("/work-experience") ? "text-orange-500" : "hover:text-orange-500"}
            >
              Work Experience
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/15diOIYcwQHRDYYkjttnRMZAq4iofvqaP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              CV
            </a>
          </li>
          <li>
            <Link
              to="/research"
              className={isActive("/research") ? "text-orange-500" : "hover:text-orange-500"}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={isActive("/blogs") ? "text-orange-500" : "hover:text-orange-500"}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for mobile screens */}
        <div className="md:hidden">
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
            <Link
              to="/research"
              className={isActive("/research") ? "text-orange-500" : "hover:text-orange-500"}
              onClick={toggleMenu} // Close menu on click
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="/key-projects"
              className={isActive("/key-projects") ? "text-orange-500" : "hover:text-orange-500"}
              onClick={toggleMenu}
            >
              Key Projects
            </Link>
          </li>
          <li>
            <Link
              to="/work-experience"
              className={isActive("/work-experience") ? "text-orange-500" : "hover:text-orange-500"}
              onClick={toggleMenu}
            >
              Work Experience
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/15diOIYcwQHRDYYkjttnRMZAq4iofvqaP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              CV
            </a>
          </li>
          <li>
            <Link
              to="/"
              className={isActive("/") ? "text-orange-500" : "hover:text-orange-500"}
              onClick={toggleMenu}
            >
              Personal
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={isActive("/blogs") ? "text-orange-500" : "hover:text-orange-500"}
              onClick={toggleMenu}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </Transition>
    </nav>
  );
};

export default Navbar;
