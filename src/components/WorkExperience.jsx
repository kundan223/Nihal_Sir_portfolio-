import React from "react";
import DTU from '../assets/Dtu.png'; 

const WorkExperience = () => {
  return (
    <div className="bg-black py-8 px-4 min-h-screen flex flex-col items-center gap-6"> 
    
      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> 

        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={DTU} alt="College Logo" className="w-24 h-24" /> 
        </div>
    
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> 
            July 2012 - Dec 2012 :
          </p>
          <p className="text-white text-base font-semibold">
            Assistant Professor, Maharaja Agarsain Institute of Tech., Ghaziabad, India.
          </p>
        </div>
      </div>

      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> 

        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={DTU} alt="College Logo" className="w-24 h-24" /> 
        </div>

        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> 
            July 2012 - Dec 2012 :
          </p>
          <p className="text-white text-base font-semibold">
            Assistant Professor, Maharaja Agarsain Institute of Tech., Ghaziabad, India.
          </p>
        </div>
      </div>

      {/* Third Experience Item */}
      <div className="bg-[#121214]  rounded-r-lg rounded-l-full flex items-center w-full max-w-3xl"> {/* Darker background and rounded corners */}
        {/* Image container */}
        <div className="flex-shrink-0 rounded-l-full overflow-hidden">
          <img src={DTU} alt="College Logo" className="w-24 h-24" /> {/* Circular image, adjusted size */}
        </div>
        {/* Text Content */}
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-lg"> {/* Slightly larger text size */}
            July 2012 - Dec 2012 :
          </p>
          <p className="text-white text-base font-semibold"> {/* Slightly bolder text */}
            Assistant Professor, Maharaja Agarsain Institute of Tech., Ghaziabad, India.
          </p>
        </div>
      </div>

    </div>
  );
};

export default WorkExperience;
