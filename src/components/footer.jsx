import React from "react";
import x from '../assets/twitter 1.png'; // Replace with actual path for the X (Twitter) icon
import linkedin from '../assets/linkedin 1.png'; // Replace with actual path for the LinkedIn icon
import github from '../assets/github 1.png'; // Replace with actual path for the GitHub icon
import facebook from '../assets/facebook 1.png'; // Replace with actual path for the Facebook icon

const Footer = () => {
  return (
    <div className="bg-black py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
      {/* Email Input and Button */}
      <div className="flex items-center space-x-4">
        <input
          type="email"
          placeholder="kathashtsaid@gmail.com"
          className="bg-[#121214] text-white px-4 py-2 rounded-lg w-[200px] md:w-[300px] focus:outline-none"
        />
        <button className="bg-orange-600 text-white px-6 py-2 rounded-lg">CONNECT</button>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6 md:mt-0">
  <div className="flex items-center justify-center h-10 w-10 bg-white border border-white rounded-full">
    <img src={x} alt="X (Twitter)" className="h-6 w-6" />
  </div>
  <div className="flex items-center justify-center h-10 w-10 bg-white border border-white rounded-full">
    <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
  </div>
  <div className="flex items-center justify-center h-10 w-10 bg-white border border-white rounded-full">
    <img src={github} alt="GitHub" className="h-6 w-6" />
  </div>
  <div className="flex items-center justify-center h-10 w-10 bg-white border border-white rounded-full">
    <img src={facebook} alt="Facebook" className="h-6 w-6" />
  </div>
</div>

    </div>
  );
};

export default Footer;
