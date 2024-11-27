import React, { useState, useEffect } from 'react';
import axiosInstance from '../auth/axiosInstance';
import { CheckCircle, Lock, Play } from 'lucide-react';

interface Lesson {
  LessonId: number;
  LessonName: string;
  Description: string;
  Status: 'completed' | 'not completed';
  Course: number;
}

interface CourseLessonsProps {
  courseId: number;
}

const CourseLessons: React.FC<CourseLessonsProps> = ({ courseId }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axiosInstance.get(`/lessons/`);
        console.log('Received lessons:', response.data);
        console.log(courseId);
        const filteredLessons = response.data.filter((lesson: Lesson) => lesson.Course === courseId);
        console.log('Filtered lessons:', filteredLessons);
        setLessons(filteredLessons);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    };

    fetchLessons();
  }, [courseId]);

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.LessonId || Math.random()}
          className={`flex items-center justify-between p-4 rounded-xl ${
            lesson.Status === 'not completed' ? 'bg-gray-900/50' : 'bg-gray-700/50'
          }`}
        >
          <div className="flex items-center">
            {lesson.Status === 'completed' ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            ) : lesson.Status === 'not completed' ? (
              <Lock className="h-5 w-5 text-gray-500 mr-3" />
            ) : (
              <Play className="h-5 w-5 text-cyan-500 mr-3" />
            )}
            <div>
              <h3 className="text-white font-medium">{lesson.LessonName}</h3>
              <p className="text-sm text-gray-400">{lesson.Description}</p>
            </div>
          </div>
          {lesson.Status === 'not completed' && (
            <button className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700">
              Start
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseLessons;
