// src/components/KeyFeatures.jsx
import React from 'react';

const KeyFeatures = () => {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto px-8">
        <center>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 ">Key Features for Awareness and Action Platform</h2>
        </center>
        {/* <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          Empowering change through awareness, community, and connecting with impactful NGOs.
        </p> */}
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Social Content Feed</h3>
            <p className="text-gray-300 mb-6">
              Share impactful videos, engage in discussions, and raise awareness about critical issues across India.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="bg-dark-teal hover:bg-light-teal text-white py-2 px-6 rounded-full transition-colors duration-300">
                Share Now
              </button>
              <button className="border border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white py-2 px-6 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="src/assets/palace.webp" alt="Social content feed" className="rounded-lg shadow-xl"/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <img src="src/assets/data_insights.jpg" alt="Social content feed" className="rounded-lg shadow-xl"/>
          </div>
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Social Content Feed</h3>
            <p className="text-gray-300 mb-6">
              Share impactful videos, engage in discussions, and raise awareness about critical issues across India.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="bg-dark-teal hover:bg-light-teal text-white py-2 px-6 rounded-full transition-colors duration-300">
                Share Now
              </button>
              <button className="border border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white py-2 px-6 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;