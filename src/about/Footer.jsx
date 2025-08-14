// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-background py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">India Action Platform</h3>
            <p className="text-gray-400 mb-4">Awareness. Action. Impact. India</p>
            <button className="bg-dark-teal hover:bg-light-teal text-white py-2 px-6 rounded-full transition-colors duration-300">
              Help Us Now
            </button>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Socials</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">NGOs</a></li>
              <li><a href="#" className="hover:text-white">Data</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Impact</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Join Chat</a></li>
              <li><a href="#" className="hover:text-white">Donate</a></li>
              <li><a href="#" className="hover:text-white">Volunteer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact us</h4>
            <div className="space-y-2 text-gray-400">
              <a href="mailto:info@indiaactionplatform.org" className="block hover:text-white">info@indiaactionplatform.org</a>
              <a href="tel:+919876543210" className="block hover:text-white">+919876543210</a>
              <div className="flex space-x-4 mt-4">
                {/* Social media icons here */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© 2066 India Action Platform, we love our users!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;