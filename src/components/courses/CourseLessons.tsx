import React, { useState, useEffect } from "react";
import axiosInstance from "../auth/axiosInstance";
import { CheckCircle, Lock } from "lucide-react";
import ReactPlayer from "react-player";
import SqlInjectionChallenge from "../practice/SqlInjection";

interface Lesson {
  LessonId: number;
  LessonName: string;
  Description: string;
  Status: string;
  Course: number;
  VideoUrl: string;
}

interface CourseLessonsProps {
  courseId: number;
  updateProgress: (completedLessons: number, totalLessons: number) => void;
}

const CourseLessons: React.FC<CourseLessonsProps> = ({ courseId, updateProgress }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [playingLesson, setPlayingLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axiosInstance.get(`/lessons/`);
        const filteredLessons: Lesson[] = response.data
          .filter((lesson: any) => lesson.Course === courseId)
          .map((lesson: any) => ({
            ...lesson,
            Status: lesson.Status === "completed" ? "completed" : "not completed",
            VideoUrl: lesson.VideoUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          })) as Lesson[];

        setLessons(filteredLessons);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, [courseId]);

  const handleStartLesson = (lesson: Lesson) => {
    setPlayingLesson(lesson);
  };

  const handleVideoEnd = async () => {
    if (!playingLesson) return;

    try {
      const response = await axiosInstance.patch(`/lessons/${playingLesson.LessonId}/complete/`);

      if (response.data.Status === "completed") {
        const updatedLessons = lessons.map((lesson) =>
          lesson.LessonId === playingLesson.LessonId ? { ...lesson, Status: "completed" } : lesson
        );

        setLessons(updatedLessons);
        setPlayingLesson(null);

        const completedLessons = updatedLessons.filter((lesson) => lesson.Status === "completed").length;
        updateProgress(completedLessons, lessons.length);
      }
    } catch (error) {
      console.error("Error updating lesson status:", error);
    }
  };

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.LessonId}
          className={`flex items-center justify-between p-4 rounded-xl ${lesson.Status === "not completed" ? "bg-gray-900/50" : "bg-gray-700/50"}`}
        >
          <div className="flex items-center">
            {lesson.Status === "completed" ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            ) : (
              <Lock className="h-5 w-5 text-gray-500 mr-3" />
            )}
            <div>
              <h3 className="text-white font-medium">{lesson.LessonName}</h3>
              <p className="text-sm text-gray-400">{lesson.Description}</p>
            </div>
          </div>

          {lesson.Status === "not completed" && (
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700"
              onClick={() => handleStartLesson(lesson)}
            >
              Start
            </button>
          )}
        </div>
      ))}

      {playingLesson && (
        <div className="mt-6">
          {playingLesson.LessonName.toLowerCase() === "practice" ? (
            <SqlInjectionChallenge />
          ) : (
            <ReactPlayer url={playingLesson.VideoUrl} playing={true} controls={true} onEnded={handleVideoEnd} />
          )}
        </div>
      )}
    </div>
  );
};

export default CourseLessons;
