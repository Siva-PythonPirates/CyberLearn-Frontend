import React from 'react';
import { Shield, Lock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-center mb-8">
            <Shield className="h-16 w-16 text-cyan-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Master Cybersecurity Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600"> Interactive Learning</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join our gamified learning platform and become a cybersecurity expert through hands-on challenges, real-world simulations, and structured courses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/register"
              className="rounded-md bg-cyan-500 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="text-lg font-semibold leading-6 text-white hover:text-cyan-400"
            >
              View Courses <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-20 blur-3xl" />
      </div>
    </div>
  );
};

export default Hero;