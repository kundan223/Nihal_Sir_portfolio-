import React from "react";
import x from '../assets/twitter 1.png'; // Replace with actual path for the X (Twitter) icon
import linkedin from '../assets/linkedin 1.png'; // Replace with actual path for the LinkedIn icon
import github from '../assets/github 1.png'; // Replace with actual path for the GitHub icon
import facebook from '../assets/facebook 1.png'; // Replace with actual path for the Facebook icon

const Footer = () => {
  return (
    <div className="bg-black py-10 px-10 md:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Email Input and Button */}
      <div className="flex items-center space-x-4">
        <input
          type="email"
          placeholder="kundan0707y@gmail.com"
          className="bg-[#121214] text-white px-4 py-2 rounded-lg w-[200px] md:w-[300px] focus:outline-none"
          readOnly // makes the input read-only since it's a display for your email
        />
        <a href="mailto:kundan0707y@gmail.com">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg">CONNECT</button>
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6 md:mt-0">
        <a href="https://www.linkedin.com/in/nihalgupta84/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center h-10 w-10 bg-white border border-white rounded-full hover:bg-gray-200">
            <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
          </div>
        </a>
        <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer"> {/* Replace with your GitHub link */}
          <div className="flex items-center justify-center h-10 w-10 bg-white border border-white rounded-full hover:bg-gray-200">
            <img src={github} alt="GitHub" className="h-6 w-6" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
