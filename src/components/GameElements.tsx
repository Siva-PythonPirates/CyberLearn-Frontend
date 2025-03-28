import React from 'react';
import { Star, Shield, Award, Trophy, Target } from 'lucide-react';
import { Badge } from '../models/types';

interface GameElementsProps {
  streakCount: number;
  points: number;
  rank: string;
  badges: Badge[];
}

const GameElements: React.FC<GameElementsProps> = ({
  streakCount,
  points,
  rank,
  badges
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Streak Counter */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-medium flex items-center">
            <Target className="w-5 h-5 mr-2 text-red-500" />
            Learning Streak
          </h3>
          <span className="text-2xl font-bold text-red-500">{streakCount} days</span>
        </div>
        <div className="flex space-x-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${
                i < (streakCount % 7) ? 'bg-red-500' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Points & Rank */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Hacker Points
            </h3>
            <p className="text-2xl font-bold text-yellow-500 mt-1">{points}</p>
          </div>
          <div>
            <h3 className="text-white font-medium flex items-center justify-end">
              <Shield className="w-5 h-5 mr-2 text-cyan-500" />
              Current Rank
            </h3>
            <p className="text-2xl font-bold text-cyan-500 mt-1">{rank}</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="md:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <h3 className="text-white font-medium flex items-center mb-4">
          <Award className="w-5 h-5 mr-2 text-purple-500" />
          Earned Badges
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-gray-700/50 rounded-lg p-4 text-center"
            >
              <img
                src={badge.imageUrl}
                alt={badge.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <h4 className="text-white text-sm font-medium">{badge.name}</h4>
              <p className="text-gray-400 text-xs mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameElements;