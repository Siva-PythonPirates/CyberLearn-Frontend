import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, Play, CheckCircle, Lock } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === Number(courseId));

  if (!course) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Course not found</h2>
          <p className="text-gray-400 mt-2">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const completedModules = course.modulesList.filter((module) => module.completed).length;
  const progress = (completedModules / course.modulesList.length) * 100;

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {course.enrolled.toLocaleString()} enrolled
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                {course.rating} rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">About this course</h2>
              <p className="text-gray-300">{course.description}</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.modulesList.map((module) => (
                  <div
                    key={module.id}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      module.locked ? 'bg-gray-900/50' : 'bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center">
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      ) : module.locked ? (
                        <Lock className="h-5 w-5 text-gray-500 mr-3" />
                      ) : (
                        <Play className="h-5 w-5 text-cyan-500 mr-3" />
                      )}
                      <div>
                        <h3 className="text-white font-medium">{module.title}</h3>
                        <p className="text-sm text-gray-400">{module.duration}</p>
                      </div>
                    </div>
                    {!module.locked && !module.completed && (
                      <button className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700">
                        Start
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-white font-medium">{course.instructor}</h3>
                  <p className="text-gray-400">Senior Security Engineer</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700">
                Continue Learning
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Course Progress</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-500 bg-cyan-500/20">
                      {progress}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-400">
                      {completedModules}/{course.modulesList.length} modules completed
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;