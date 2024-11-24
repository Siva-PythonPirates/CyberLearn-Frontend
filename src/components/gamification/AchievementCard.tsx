import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  earned: boolean;
}

const AchievementCard = ({ title, description, icon: Icon, earned }: AchievementCardProps) => {
  return (
    <div className={`flex items-center p-3 rounded-lg ${earned ? 'bg-cyan-500/10' : 'bg-gray-900/50'}`}>
      <div className={`flex-shrink-0 ${earned ? 'text-cyan-500' : 'text-gray-500'}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="ml-3">
        <h3 className={`text-sm font-medium ${earned ? 'text-cyan-500' : 'text-gray-400'}`}>
          {title}
        </h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      {earned && (
        <div className="ml-auto">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-cyan-500/20 text-cyan-500">
            Earned
          </span>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;