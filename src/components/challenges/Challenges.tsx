import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Clock, Users } from 'lucide-react';
import { challenges } from '../data/challenges';

const Challenges = () => {
  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Security Challenges</h1>
          <p className="mt-4 text-lg text-gray-400">
            Test your skills with real-world cybersecurity challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <Link
              key={challenge.id}
              to={`/challenges/${challenge.id}`}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                  {challenge.difficulty}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
                  <div className="flex items-center text-cyan-500">
                    <Trophy className="h-4 w-4 mr-1" />
                    <span>{challenge.points} pts</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {challenge.timeLimit}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {challenge.participants} attempts
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;