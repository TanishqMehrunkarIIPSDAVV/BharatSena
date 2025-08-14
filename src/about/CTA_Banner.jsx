// src/components/CTABanner.jsx
import React from 'react';

const CTABanner = () => {
  return (
    <section className="bg-dark-teal py-20 text-center">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Help India, Act Now!</h2>
        <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
          Join us in making a real difference. Support our partner NGOs and contribute to a better future for India.
        </p>
        <button className="bg-white text-dark-teal hover:bg-gray-200 font-semibold py-3 px-8 rounded-full transition-colors duration-300">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default CTABanner;