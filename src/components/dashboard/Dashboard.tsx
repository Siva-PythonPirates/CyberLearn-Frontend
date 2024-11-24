import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Trophy, Star, Activity, Clock } from 'lucide-react';
import ProgressCard from './ProgressCard';
import RecentActivity from './RecentActivity';
import AchievementCard from '../gamification/AchievementCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h1 className="text-2xl font-bold text-white mb-4">Welcome back, Alex!</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProgressCard
                  title="Course Progress"
                  icon={BookOpen}
                  progress={65}
                  metric="3/5 modules completed"
                />
                <ProgressCard
                  title="Challenge Score"
                  icon={Target}
                  progress={80}
                  metric="800/1000 points"
                />
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <RecentActivity />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Latest Achievements</h2>
              <div className="space-y-4">
                <AchievementCard
                  title="First Blood"
                  description="Complete your first challenge"
                  icon={Trophy}
                  earned={true}
                />
                <AchievementCard
                  title="Quick Learner"
                  description="Complete 5 modules in a week"
                  icon={Star}
                  earned={true}
                />
                <AchievementCard
                  title="Persistent"
                  description="Login for 7 consecutive days"
                  icon={Activity}
                  earned={false}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Upcoming Deadlines</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-2 text-cyan-500" />
                  <div>
                    <p className="font-medium">Network Security Quiz</p>
                    <p className="text-sm text-gray-400">Due in 2 days</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-2 text-cyan-500" />
                  <div>
                    <p className="font-medium">CTF Challenge</p>
                    <p className="text-sm text-gray-400">Due in 5 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;