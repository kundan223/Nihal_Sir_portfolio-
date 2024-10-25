import React, { useState, useRef } from "react";
import dtu from '../assets/Dtu.png';
import college from '../assets/college.png';
import building from '../assets/university-building 1.png';

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Education items data
  const educationItems = [
    {
      title: "Delhi Technological University",
      subtitle: "Doctor of Philosophy - PhD, Electronics and Communications Engineering",
      duration: "Jul 2021 - Present",
      imageSrc: dtu,
    },
    {
      title: "Harcourt Butler Technical University",
      subtitle: "Master of Technology (M.Tech), Electronics and Communications",
      duration: "2015 - 2017",
      imageSrc: college,
    },
    {
      title: "Motivational Path",
      subtitle: "Bachelor's degree, Electronics and Communications Engineering",
      duration: "Jul 2021 - Present",
      imageSrc: building,
    },
  ];

  // Function to handle scrolling to the previous item
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? educationItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Function to handle scrolling to the next item
  const handleNext = () => {
    const newIndex = currentIndex === educationItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Function to scroll to a specific index in the carousel
  const scrollToIndex = (index) => {
    const scrollAmount = carouselRef.current.scrollWidth / educationItems.length;
    carouselRef.current.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black py-10 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-400 text-3xl font-bold mb-8">Education</h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 focus:outline-none"
          >
            &#10094;
          </button>

          {/* Carousel Items */}
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scroll-smooth space-x-6 py-4 scrollbar-hide"
          >
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] bg-white bg-opacity-10 border border-gray-400 rounded-3xl p-6 flex flex-col items-center"
              >
                {/* Responsive layout: flex-row on medium screens and above, flex-col on small screens */}
                <div className="flex flex-col md:flex-row w-full items-center md:items-start"> 
                  <div className="w-full md:w-1/4 flex-shrink-0 mb-4 md:mb-0 md:mr-4"> {/* Image container on small screens (full width) and 1/4 on larger */}
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="h-16 w-16 md:h-20 md:w-20 mb-4"
                    />
                  </div>
                  <div className="w-full md:w-3/4 flex flex-col text-center md:text-left"> {/* Text is centered on small screens and left-aligned on larger screens */}
                    <h3 className="text-white text-lg md:text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm md:text-base mb-2">{item.subtitle}</p>
                    <p className="text-gray-400 text-xs md:text-sm font-bold">{item.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 focus:outline-none"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
