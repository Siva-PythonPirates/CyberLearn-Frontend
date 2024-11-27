import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, Clock, Users, Star } from 'lucide-react';
import axiosInstance from '../auth/axiosInstance';
import CourseLessons from './CourseLessons';

interface Course {
  CourseName: string;
  Duration: string;
  Enrolled: number;
  Rating: number;
  Description: string;
  ImageUrl: string;
  Author: string;
  lessons: any[];
}

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>(''); 

  
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axiosInstance.get(`/courses/${courseId}/`);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch course details. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div className="text-center text-white">Loading course details...</div>; 
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

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

 
  const completedModules = course.lessons.filter((lesson: any) => lesson.Status === 'completed').length;
  const progress = (completedModules / course.lessons.length) * 100;

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src={course.ImageUrl}
          alt={course.CourseName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{course.CourseName}</h1>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {course.Duration}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {(course.Enrolled || 0).toLocaleString()} enrolled
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                {course.Rating} rating
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
              <p className="text-gray-300">{course.Description}</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Course Content</h2>
              {/* Use the CourseLessons component here */}
              <CourseLessons courseId={parseInt(courseId as string)} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                  alt={course.Author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-white font-medium">{course.Author}</h3>
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
                      {progress.toFixed(0)}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-400">
                      {completedModules}/{course.lessons.length} lessons completed
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
