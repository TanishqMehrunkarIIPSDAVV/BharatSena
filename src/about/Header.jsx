// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-dark-background bg-opacity-70 backdrop-blur-sm z-50 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Bharat Sena</div>
        <div className="flex space-x-6 items-center">
          <a href="#" className="hover:text-light-teal transition-colors duration-300">Social Feed</a>
          <a href="#" className="hover:text-light-teal transition-colors duration-300">Data Dashboard</a>
          <a href="#" className="hover:text-light-teal transition-colors duration-300">NGO Connect</a>
          <a href="#" className="bg-dark-teal hover:bg-light-teal text-white py-2 px-4 rounded-md transition-colors duration-300">Take Action</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;