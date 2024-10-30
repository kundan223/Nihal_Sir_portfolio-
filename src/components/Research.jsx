import React from "react";
import papers from '../assets/p1.png';

const Research = () => {
    return (
        <div className="bg-black p-6">
            <div className="flex">
                {/* Left side section - Takes 3/4th of the space */}
                <div className="w-3/4 pr-6">
                    <div className="flex justify-between items-center mb-4">
                        {/* Title and Year header */}
                        <p className="text-orange-500 font-bold">TITLE</p>
                        <p className="text-orange-500 font-bold">YEAR</p>
                    </div>
                    {/* Each paper entry */}
                    <div className="flex items-center p-4 rounded-md border border-transparent hover:border-white transition duration-300 mb-4">
                        <div className="w-1/5">
                            <img src={papers} className="h-20 w-20 object-cover" alt="Paper" />
                        </div>
                        <div className="flex-grow px-4">
                            <p className="text-white font-bold text-lg">
                                Fuzzy-Contextual Contrast Enhancement
                            </p>
                            <p className="text-white font-light text-sm">
                                AS Parihar, OP Verma, C Khanna
                            </p>
                            <p className="text-white font-light text-sm">
                                IEEE Transactions on Image Processing 26 (4), 1810-1819
                            </p>
                        </div>
                        <div className="text-right w-1/6">
                            <p className="text-white text-3xl">2019</p>
                        </div>
                    </div>
                    {/* Repeat this block for more entries */}
                </div>

                {/* Right side section - Takes 1/4th of the space */}
                <div className="w-1/4 bg-[#121214] rounded-md p-4 h-auto">
                    <p className="text-orange-500 font-bold mb-2">
                        RESEARCH AREAS
                    </p>
                    <ul className="list-none space-y-2">
                        <li className="text-white flex items-start">
                            <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-1"></span>
                            Dynamic spectrum access, decision making and learning algorithms for cognitive radio applications
                        </li>
                        <li className="text-white flex items-start">
                            <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-1"></span>
                            Reinforcement Learning
                        </li>
                        <li className="text-white flex items-start">
                            <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-1"></span>
                            Distributed computing
                        </li>
                        <li className="text-white flex items-start">
                            <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-1"></span>
                            Block chain
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Research;
