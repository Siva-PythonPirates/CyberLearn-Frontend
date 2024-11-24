import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  icon: LucideIcon;
  progress: number;
  metric: string;
}

const ProgressCard = ({ title, icon: Icon, progress, metric }: ProgressCardProps) => {
  return (
    <div className="bg-gray-900/50 rounded-xl p-4">
      <div className="flex items-center mb-3">
        <Icon className="h-5 w-5 text-cyan-500 mr-2" />
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-500 bg-cyan-500/20">
              {progress}%
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-400">
              {metric}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-700">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;