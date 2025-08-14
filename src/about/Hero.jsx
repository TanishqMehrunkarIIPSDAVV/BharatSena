// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "url('src/assets/Flag.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-left relative z-10 p-8 md:p-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Empowering India: <br/> Awareness into Action
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Uniting citizens to address India's pressing social and environmental challenges.
          </p>
          <button className="bg-dark-teal hover:bg-light-teal text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;