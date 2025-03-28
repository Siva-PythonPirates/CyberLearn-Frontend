import React, { useState } from 'react';
import './QuizGame.css';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const quizQuestions: Question[] = [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Standard Query Language",
      "System Query Language"
    ],
    answer: "Structured Query Language",
  },
  {
    question: "What is Cross-Site Scripting (XSS)?",
    options: [
      "SQL Injection",
      "Client-side code injection",
      "Server-side code injection",
      "Denial of Service"
    ],
    answer: "Client-side code injection",
  },
  {
    question: "Which type of encryption uses two keys, public and private?",
    options: [
      "Symmetric",
      "Asymmetric",
      "Hashing",
      "Steganography"
    ],
    answer: "Asymmetric",
  }
];

const QuizGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz-game-container">
      <h2>Cybersecurity Quiz</h2>
      {!showResult ? (
        <div>
          <div className="question">{currentQuestion.question}</div>
          <form onSubmit={handleSubmitAnswer}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="quiz-option">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="answer"
                  value={option}
                  onChange={handleAnswerChange}
                  checked={userAnswer === option}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="quiz-result">
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score}/{quizQuestions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
