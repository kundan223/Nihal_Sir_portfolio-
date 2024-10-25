import React from "react";
import p1 from "../assets/p1.png";

const RecentWork = () => {
  // Mock data for recent work items
  const workItems = [
    {
      id: 1,
      title: "Evolution of transformer-based optical flow estimation techniques: a survey",
      description: "Optical flow plays a crucial role in computer vision, and with the rapid advancements of Transformer-based models in natural language processing (NLP) and various visual tasks, Transformer architectures are becoming increasingly prevalent in the field of optical flow. In recent years, Transformer-based optical flow techniques have demonstrated superior accuracy compared to conventional CNN-based models. However, despite the existence of survey work on traditional and CNN-based methods for flow estimation, there is a lack of research focused exclusively on the emerging trend of Transformer-based approaches. This gap in the literature hinders the understanding and further development of these state-of-the-art techniques.",
      vision: "Low-Light Image Enhancement",
      imageSrc: p1, // Replace with actual image path
    },
    {
      id: 2,
      title: "Low-Light Image Enhancement with Wavelet-based Diffusion Models",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      vision: "Low-Light Image Enhancement",
      imageSrc: "path/to/your/image2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Low-Light Image Enhancement with Wavelet-based Diffusion Models",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      vision: "Low-Light Image Enhancement",
      imageSrc: "path/to/your/image3.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-gray-400 text-3xl font-bold mb-2">Recent work</h2>
        <div className="h-[1px] bg-white  mb-8"></div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <div
              key={item.id}
              className="bg-black border border-gray-400 rounded-lg overflow-hidden p-6"
            >
              {/* Image Section */}
              <div className="mb-4">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              {/* Title and Description */}
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm my-4">{item.description}</p>
              {/* Vision */}
              <p className="text-gray-400 uppercase font-bold">Vision</p>
              <h4 className="text-white text-xl font-semibold">{item.vision}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
