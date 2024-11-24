import React from 'react';
import { Shield, Trophy, Target, Star, Award, BookOpen, Clock, ChevronRight } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'Alex Chen',
    title: 'Security Specialist',
    points: 15000,
    rank: 1,
    badges: 42,
    challenges: 28,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    recentAchievements: [
      {
        id: 1,
        title: 'Master Hacker',
        description: 'Complete 25 advanced challenges',
        icon: Trophy,
        date: '2 days ago',
      },
      {
        id: 2,
        title: 'Quick Learner',
        description: 'Complete 5 courses in a month',
        icon: Star,
        date: '1 week ago',
      },
    ],
    currentCourses: [
      {
        id: 1,
        title: 'Advanced Penetration Testing',
        progress: 75,
        nextLesson: 'Cross-Site Scripting (XSS)',
      },
      {
        id: 2,
        title: 'Network Security Fundamentals',
        progress: 45,
        nextLesson: 'Firewall Configuration',
      },
    ],
  };

  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full"
            />
            <div className="ml-6">
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.title}</p>
              <div className="flex items-center mt-4 space-x-6">
                <div className="flex items-center text-cyan-500">
                  <Trophy className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{user.points} points</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Award className="h-5 w-5 mr-2" />
                  <span>{user.badges} badges</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Target className="h-5 w-5 mr-2" />
                  <span>{user.challenges} challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Courses */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Current Courses</h2>
              <div className="space-y-4">
                {user.currentCourses.map((course) => (
                  <div key={course.id} className="bg-gray-900/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-white font-medium">{course.title}</h3>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="mb-2">
                      <div className="text-sm text-gray-400">Next: {course.nextLesson}</div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-500 bg-cyan-500/20">
                            {course.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-700">
                        <div
                          style={{ width: `${course.progress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-whitejustify-center bg-cyan-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="flow-root">
                <ul className="-mb-8">
                  {user.recentAchievements.map((achievement, achievementIdx) => (
                    <li key={achievement.id}>
                      <div className="relative pb-8">
                        {achievementIdx !== user.recentAchievements.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-900/50 bg-cyan-500/20">
                              <achievement.icon className="h-5 w-5 text-cyan-500" />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm text-white">{achievement.title}</p>
                              <p className="text-sm text-gray-400">{achievement.description}</p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-400">
                              <time dateTime={achievement.date}>{achievement.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Statistics</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">Global Rank</div>
                  <div className="text-white font-semibold">#{user.rank}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">Courses Completed</div>
                  <div className="text-white font-semibold">12</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">Challenges Won</div>
                  <div className="text-white font-semibold">{user.challenges}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">Total Points</div>
                  <div className="text-cyan-500 font-semibold">{user.points}</div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Badges</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                  <span className="text-xs text-gray-400">Master</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-cyan-500" />
                  </div>
                  <span className="text-xs text-gray-400">Defender</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-purple-500" />
                  </div>
                  <span className="text-xs text-gray-400">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;