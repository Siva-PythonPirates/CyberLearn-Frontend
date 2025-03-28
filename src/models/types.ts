export interface Achievement {
    id: number;
    name: string;
    description: string;
    icon: string;
    unlockedAt?: Date;
  }
  
  export interface UserProgress {
    userId: number;
    courseId: number;
    completedLessons: number[];
    quizScores: Record<number, number>;
    achievements: Achievement[];
    experiencePoints: number;
    level: number;
  }
  
  export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    points: number;
  }
  
  export interface Badge {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    requirement: string;
  }