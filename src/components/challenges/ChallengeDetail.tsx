import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Terminal, Clock, Trophy, Users, Play, CheckCircle } from 'lucide-react';
import { challenges } from '../data/challenges';

const ChallengeDetail = () => {
  const { challengeId } = useParams();
  const [consoleOutput, setConsoleOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const challenge = challenges.find((c) => c.id === Number(challengeId));

  if (!challenge) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Challenge not found</h2>
          <p className="text-gray-400 mt-2">The challenge you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleRunSimulation = () => {
    setIsRunning(true);
    setConsoleOutput('Initializing security simulation...\n');
    
    setTimeout(() => {
      setConsoleOutput(prev => prev + 'Scanning target application...\n');
    }, 1000);
    
    setTimeout(() => {
      setConsoleOutput(prev => prev + 'Vulnerability detected: SQL Injection possibility in login form\n');
    }, 2000);
    
    setTimeout(() => {
      setConsoleOutput(prev => prev + 'Attempting exploitation...\n');
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{challenge.title}</h1>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-cyan-500" />
                {challenge.points} points
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {challenge.timeLimit}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {challenge.participants} attempts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Challenge Description</h2>
              <p className="text-gray-300">{challenge.description}</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Simulation Console</h2>
                <button
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    isRunning
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-cyan-600 text-white hover:bg-cyan-700'
                  }`}
                >
                  {isRunning ? (
                    <>
                      <Terminal className="h-5 w-5 mr-2 animate-pulse" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      Run Simulation
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap">{consoleOutput || 'Ready to start simulation...'}</pre>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Challenge Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="text-cyan-500 font-medium">{challenge.difficulty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Time Limit</span>
                  <span className="text-white">{challenge.timeLimit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Points</span>
                  <span className="text-white">{challenge.points}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Participants</span>
                  <span className="text-white">{challenge.participants}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Required Skills</h3>
              <div className="space-y-2">
                {challenge.requiredSkills.map((skill, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;