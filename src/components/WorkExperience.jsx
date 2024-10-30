import React from "react";
import DTU from '../assets/Dtu.png'; 
import Narayna from '../assets/Naraina Group of Institutions.jpeg';
import Sys from '../assets/SYSACS_TECHNOLOFY.jpeg';
import Hind from '../assets/Hindustan Aeronautics Limited.jpeg';

const WorkExperience = () => {
  return (
    <div className="bg-black py-8 px-4 min-h-screen flex flex-col items-center gap-6"> 
    
      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> 

        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={DTU} alt="College Logo" className="w-24 h-24" /> 
        </div>
    
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> 
            July 2021 - Present- 3 yrs 4 mon :
          </p>
          <p className="text-white text-base font-semibold">
            
Research Scholar, Delhi Technological University (Formerly DCE) · Full-time,Delhi, India
          </p>
        </div>
      </div>

      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> 

        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={Narayna} alt="College Logo" className="w-24 h-24 rounded-full" /> 
        </div>

        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> 
          Mar 2019 - Aug 2021 · 2 yrs 6 mos :
          </p>
          <p className="text-white text-base font-semibold">
            Assistant Professor, Naraina Group of Institutions · Full-time,Kanpur Nagar, Uttar Pradesh, India
          </p>
        </div>
      </div>

      {/* Third Experience Item */}
      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> {/* Darker background and rounded corners */}
        {/* Image container */}
        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={Sys} alt="College Logo" className="w-24 h-24 rounded-full" /> {/* Circular image, adjusted size */}
        </div>
        {/* Text Content */}
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> {/* Slightly larger text size */}
          Nov 2017 - Feb 2019 · 1 yr 4 mos
          </p>
          <p className="text-white text-base font-semibold"> {/* Slightly bolder text */}
          Electronics Engineer, SYSACS TECHNOLOGY PVT.LTD. · Full-timeSYSACS, Ghaziabad, DELHI.
          </p>
        </div>
      </div>


      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> {/* Darker background and rounded corners */}
        {/* Image container */}
        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={Sys} alt="College Logo" className="w-24 h-24 rounded-full" /> {/* Circular image, adjusted size */}
        </div>
        {/* Text Content */}
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> {/* Slightly larger text size */}
          Oct 2013 - Nov 2013 · 2 mos
          </p>
          <p className="text-white text-base font-semibold"> {/* Slightly bolder text */}
          SBA, Superwell Services Pvt. Ltd. · Internship , India
          </p>
        </div>
      </div>


      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> {/* Darker background and rounded corners */}
        {/* Image container */}
        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={Hind} alt="College Logo" className="w-24 h-24 rounded-full" /> {/* Circular image, adjusted size */}
        </div>
        {/* Text Content */}
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> {/* Slightly larger text size */}
          Jun 2013 - Jul 2013 · 2 mos
          </p>
          <p className="text-white text-base font-semibold"> {/* Slightly bolder text */}
          Summer Intern, Hindustan Aeronautics Limited · Internship, Kanpur, Uttar Pradesh, India.
          </p>
        </div>
      </div>

    </div>
  );
};

export default WorkExperience;
