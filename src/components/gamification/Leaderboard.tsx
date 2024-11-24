import React, { useState } from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const leaderboardData = [
  {
    rank: 1,
    name: 'Alex Chen',
    points: 15000,
    badges: 42,
    challenges: 28,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    rank: 2,
    name: 'Sarah Johnson',
    points: 14200,
    badges: 38,
    challenges: 25,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    rank: 3,
    name: 'Michael Wong',
    points: 13800,
    badges: 35,
    challenges: 23,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
  },
  // Add more users...
];

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('all');

  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Global Leaderboard</h1>
          <p className="mt-4 text-lg text-gray-400">
            Compete with cybersecurity enthusiasts worldwide
          </p>
        </div>

        {/* Top 3 Winners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <div
              key={user.rank}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center ${
                index === 0 ? 'transform scale-105' : ''
              }`}
            >
              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                {index === 0 && (
                  <Trophy className="absolute -top-4 -right-4 h-8 w-8 text-yellow-500" />
                )}
                {index === 1 && (
                  <Medal className="absolute -top-4 -right-4 h-8 w-8 text-gray-400" />
                )}
                {index === 2 && (
                  <Award className="absolute -top-4 -right-4 h-8 w-8 text-orange-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{user.name}</h3>
              <p className="text-cyan-500 font-bold text-2xl mb-4">{user.points} pts</p>
              <div className="flex justify-center space-x-4 text-sm text-gray-400">
                <div>
                  <Star className="h-4 w-4 inline mr-1" />
                  {user.badges} badges
                </div>
                <div>
                  <Trophy className="h-4 w-4 inline mr-1" />
                  {user.challenges} challenges
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Rankings</h2>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="bg-gray-900 text-white rounded-lg px-3 py-1 text-sm"
              >
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="week">This Week</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="px-6 py-3">Rank</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Points</th>
                  <th className="px-6 py-3">Badges</th>
                  <th className="px-6 py-3">Challenges</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((user) => (
                  <tr key={user.rank} className="border-t border-gray-700">
                    <td className="px-6 py-4 text-cyan-500 font-semibold">#{user.rank}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <span className="text-white">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white">{user.points}</td>
                    <td className="px-6 py-4 text-white">{user.badges}</td>
                    <td className="px-6 py-4 text-white">{user.challenges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;