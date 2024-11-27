import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold text-white">CyberLearn</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/courses" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link to="/challenges" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Challenges</Link>
              <Link to="/leaderboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leaderboard</Link>
              <Link to="/login" className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/register" className="text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Register</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/courses" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link to="/challenges" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Challenges</Link>
            <Link to="/leaderboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leaderboard</Link>
            <Link to="/login" className="text-white bg-cyan-600 hover:bg-cyan-700 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            <Link to="/register" className="text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;