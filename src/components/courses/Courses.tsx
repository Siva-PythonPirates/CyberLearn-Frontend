import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Star } from 'lucide-react';
import axiosInstance from '../auth/axiosInstance';

const Courses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('/courses/'); 
        setCourses(response.data); 
        setLoading(false); 
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false); 
      }
    };

    fetchCourses();
  }, []); 

  if (loading) {
    return <div className="text-center text-white">Loading courses...</div>; 
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; 
  }

  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Available Courses</h1>
          <p className="mt-4 text-lg text-gray-400">
            Choose from our curated selection of cybersecurity courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.CourseId}
              to={`/courses/${course.CourseId}`}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={course.ImageUrl}
                  alt={course.CourseName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                  {course.Category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{course.CourseName}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.Description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.StartDate} - {course.EndDate}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.Author}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {course.Price === "0.00" ? 'Free' : `$${course.Price}`}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
