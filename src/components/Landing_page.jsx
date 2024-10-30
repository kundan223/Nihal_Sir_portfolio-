import React from "react";
import Navbar from './navbar';
import HeroSection from './HeroSection';
import Education from './Education';
import RecentWork from './RecentWork';
import Footer from './footer';
import WorkExperience from './WorkExperience';

const Hero = () => { 
    return(

    <div className="App bg-black px-4 sm:px-8 lg:px-14">  {/* Adjust padding based on screen size */}
     
      <HeroSection />
      <Education />
      <RecentWork />
  
    </div>
    );
};

export default Hero 