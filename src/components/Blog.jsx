import React from "react";
import { Link } from 'react-router-dom';

import Thumbnail from "../assets/Thumbnail.png";

const Blogs = () => {
    return (
        <div className="bg-black text-white p-8">
            {/* Upper section with title and main image */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 space-y-4 md:space-y-0">
                
                <div className="flex-1 md:pr-8"> {/* Left side */}
                    <h1 className="text-2xl md:text-3xl font-bold mb-4"> {/* Responsive heading */}
                        Optical Flow Estimation with Deep Learning: Techniques, Applications, and Advances
                    </h1>
                    <p className="text-gray-400 mb-6">
                        Discover how deep learning has transformed optical flow estimation, a key technique in computer vision. Learn about methods, challenges, and applications in autonomous driving, robotics, and more.
                    </p>
                    <Link to="/blogs1">
                        <button className="border border-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200 ease-in-out">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="flex-1"> {/* Right side */}
                    <Link to="/blogs1">
                        <img src={Thumbnail} alt="Thumbnail for blog 1" className="rounded-md w-full object-cover" />
                    </Link>
                </div>
            </div>

            {/* Bottom section with blog thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#121214] p-4 rounded-md">
                
                <div className="flex flex-col items-center bg-[#1e1e1e] p-4 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out"> {/* Blog thumbnail 1 */}
                    <Link to="/blog2">
                        <img src={Thumbnail} alt="Thumbnail for blog 2" className="rounded-md mb-2 w-full object-cover" />
                        <p className="font-bold text-center">Title of Blog 2</p>
                        <p className="text-gray-400 text-sm text-center">Time of upload</p>
                    </Link>
                </div>

                <div className="flex flex-col items-center bg-[#1e1e1e] p-4 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out"> {/* Blog thumbnail 2 */}
                    <Link to="/blog3">
                        <img src={Thumbnail} alt="Thumbnail for blog 3" className="rounded-md mb-2 w-full object-cover" />
                        <p className="font-bold text-center">Title of Blog 3</p>
                        <p className="text-gray-400 text-sm text-center">Time of upload</p>
                    </Link>
                </div>

                <div className="flex flex-col items-center bg-[#1e1e1e] p-4 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out"> {/* Blog thumbnail 3 */}
                    <Link to="/blog4">
                        <img src={Thumbnail} alt="Thumbnail for blog 4" className="rounded-md mb-2 w-full object-cover" />
                        <p className="font-bold text-center">Title of Blog 4</p>
                        <p className="text-gray-400 text-sm text-center">Time of upload</p>
                    </Link>
                </div>

                <div className="flex flex-col items-center bg-[#1e1e1e] p-4 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out"> {/* Blog thumbnail 4 */}
                    <Link to="/blog5">
                        <img src={Thumbnail} alt="Thumbnail for blog 5" className="rounded-md mb-2 w-full object-cover" />
                        <p className="font-bold text-center">Title of Blog 5</p>
                        <p className="text-gray-400 text-sm text-center">Time of upload</p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Blogs;
