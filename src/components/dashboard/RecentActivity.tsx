import React from 'react';
import { CheckCircle2, Trophy, Target, BookOpen } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'achievement',
    title: 'Earned "Quick Learner" Badge',
    timestamp: '2 hours ago',
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    id: 2,
    type: 'course',
    title: 'Completed "Introduction to Cryptography" module',
    timestamp: '5 hours ago',
    icon: BookOpen,
    color: 'text-blue-500',
  },
  {
    id: 3,
    type: 'challenge',
    title: 'Solved "Basic Network Security" challenge',
    timestamp: '1 day ago',
    icon: Target,
    color: 'text-green-500',
  },
  {
    id: 4,
    type: 'course',
    title: 'Started "Advanced Penetration Testing" course',
    timestamp: '2 days ago',
    icon: CheckCircle2,
    color: 'text-purple-500',
  },
];

const RecentActivity = () => {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-900/50 ${activity.color} bg-gray-900/50`}>
                    <activity.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-300">{activity.title}</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-400">
                    <time dateTime={activity.timestamp}>{activity.timestamp}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;