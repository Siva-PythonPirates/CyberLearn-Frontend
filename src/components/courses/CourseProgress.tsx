import React from 'react';
import { Shield, Award, Trophy } from 'lucide-react';
import { Achievement } from '../../models/types';

interface CourseProgressProps {
  progress: number;
  level: number;
  xp: number;
  nextLevelXp: number;
  achievements: Achievement[];
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  progress,
  level,
  xp,
  nextLevelXp,
  achievements
}) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 space-y-6">
      {/* Level Progress */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-cyan-500 font-semibold">Level {level}</span>
          <span className="text-gray-400 text-sm">{xp}/{nextLevelXp} XP</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div 
            className="h-full bg-cyan-500 rounded-full transition-all duration-300"
            style={{ width: `${(xp / nextLevelXp) * 100}%` }}
          />
        </div>
      </div>

      {/* Course Progress */}
      <div>
        <h3 className="text-white font-medium mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-cyan-500" />
          Course Progress
        </h3>
        <div className="h-2 bg-gray-700 rounded-full">
          <div 
            className="h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-gray-400 text-sm mt-2 block">
          {progress}% Complete
        </span>
      </div>

      {/* Recent Achievements */}
      <div>
        <h3 className="text-white font-medium mb-4 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
          Recent Achievements
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {achievements.slice(0, 4).map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-gray-700/50 rounded-lg p-3 flex items-center"
            >
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <h4 className="text-white text-sm font-medium">
                  {achievement.name}
                </h4>
                <p className="text-gray-400 text-xs">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;