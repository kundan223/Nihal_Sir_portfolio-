import React from "react";
import papers from '../assets/p1.png';

const Research = () => {
    return (
        <div className="bg-black p-6 md:px-16">
            <div className="flex flex-col lg:flex-row">
                {/* Main Content Area - Takes 3/4 of the space on large screens */}
                <div className="lg:w-3/4 lg:pr-6 mb-6 lg:mb-0">
                    <div className="flex justify-between items-center lg:ml-64 mb-4 lg:mr-8">
                        <p className="text-orange-500 font-bold">TITLE</p>
                        <p className="text-orange-500 font-bold">YEAR</p>
                    </div>

                    {/* Paper Items */}
                    {[{
                        title: "Fuzzy-Contextual Contrast Enhancement",
                        authors: "AS Parihar, OP Verma, C Khanna",
                        journal: "IEEE Transactions on Image Processing 26 (4), 1810-1819",
                        year: "2018"
                    },
                    {
                        title: "PAPERS 2",
                        authors: "AS Parihar, OP Verma, C Khanna",
                        journal: "IEEE Transactions on Image Processing 26 (4), 1810-1819",
                        year: "2017"
                    },
                    {
                        title: "PAPERS 3",
                        authors: "AS Parihar, OP Verma, C Khanna",
                        journal: "IEEE Transactions on Image Processing 26 (4), 1810-1819",
                        year: "2016"
                    },
                    {
                        title: "PAPERS 4",
                        authors: "AS Parihar, OP Verma, C Khanna",
                        journal: "IEEE Transactions on Image Processing 26 (4), 1810-1819",
                        year: "2015"
                    }].map((paper, index) => (
                        <div key={index} className="flex items-center rounded-md border border-transparent hover:border-white transition duration-300 mb-4">
                            <div className="w-1/4 md:w-1/5">
                                <img
                                    src={papers}
                                    className="h-24 w-24 md:h-36 md:w-36 object-cover rounded-tl-lg rounded-bl-lg"
                                    alt="Paper"
                                />
                            </div>
                            <div className="flex-grow px-4">
                                <p className="text-white font-bold text-lg">{paper.title}</p>
                                <p className="text-white font-light text-sm">{paper.authors}</p>
                                <p className="text-white font-light text-sm">{paper.journal}</p>
                            </div>
                            <div className="text-right w-1/6 hidden md:block">
                                <p className="text-white text-2xl md:text-3xl">{paper.year}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Research Areas Sidebar - Takes 1/4 of the space on large screens */}
                <div className="lg:w-1/4 bg-[#121214] rounded-md p-4">
                    <p className="text-orange-500 font-bold mb-2">RESEARCH AREAS</p>
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
