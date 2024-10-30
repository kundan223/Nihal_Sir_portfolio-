import React from 'react';
import profile from '../assets/profile.png';
import linkden from '../assets/linkedin 1.png';
import github from '../assets/github 1.png';
import facebook from '../assets/facebook 1.png';
import x from '../assets/twitter 1.png';
import eye from '../assets/eye 1.png';

const HeroSection = () => {
  return (
    <div className="bg-black p-4 md:p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">

        <div className="basis-full md:basis-2/5 bg-[#121214] p-6 rounded-lg flex flex-col items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full" 
          />
          <div className="flex-grow mt-4 flex flex-col items-center space-y-2 p-3">
            <p className="text-white font-bold text-xl md:text-4xl p-3">Nihal Kumar</p>
            <p className="text-gray-400 text-sm md:text-2xl p-3">Research student at RML lab</p>
            <div className="flex space-x-2 mt-4 p-3">
              <div className="w-8 h-8 bg-white rounded-full p-1 flex justify-center items-center">
                <img src={linkden} className="w-6 h-6" alt="LinkedIn" />
              </div>
             
              <div className="w-8 h-8 bg-white rounded-full p-1 flex justify-center items-center">
                <img src={github} className="w-6 h-6" alt="GitHub" />
              </div>
              
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-3/5 bg-black rounded-lg h-auto flex flex-col">
          <div className="flex-grow bg-[#121214] p-4 rounded-lg mb-4 h-auto">
            <p className="font-bold text-gray-500 p-3">Hello there</p>
            <p className="text-white text-xl md:text-3xl p-3">
              Nihal Kumar is a PhD student at the Delhi Technical University (DTU), specializing in{' '}
              <span className="text-green-500 font-bold">computer vision</span> at the MLR Lab.
            </p>
            <div className="flex items-center bg-orange-600 px-4 py-2  rounded-full w-fit mt-4">
            
              <a  href="https://drive.google.com/file/d/15diOIYcwQHRDYYkjttnRMZAq4iofvqaP/view?usp=sharing" className="text-white text-sm"> View CV </a>
              <img src={eye} alt="Eye Icon" className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="flex-grow bg-[#121214] p-4 rounded-lg h-auto">
            <p className="text-white text-3xl font-bold">Skills:</p>
            <div className="flex items-center space-x-2 mt-2">  
              <div className="bg-orange-600 rounded-full h-2 w-2"></div>
              <p className="text-gray-400">
                I have expertise in C++, Matlab, and Python (including PyTorch, OpenCV, and Tensorflow).
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
