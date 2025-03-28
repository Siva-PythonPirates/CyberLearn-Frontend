import React, { useState } from 'react';
import { Timer, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { QuizQuestion } from '../models/types';

interface QuizGameProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + questions[currentQuestion].points);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex items-center text-yellow-500">
            <Timer className="w-4 h-4 mr-1" />
            {timeLeft}s
          </div>
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-cyan-500 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl text-white font-medium mb-4">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                showExplanation
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-500/20 border-green-500'
                    : selectedAnswer === index
                    ? 'bg-red-500/20 border-red-500'
                    : 'bg-gray-700/50'
                  : 'bg-gray-700/50 hover:bg-gray-600/50'
              } ${
                selectedAnswer === index ? 'border-2' : 'border-2 border-transparent'
              }`}
            >
              <span className="text-white">{option}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mb-6">
          <div
            className={`p-4 rounded-lg ${
              selectedAnswer === questions[currentQuestion].correctAnswer
                ? 'bg-green-500/20'
                : 'bg-red-500/20'
            }`}
          >
            <div className="flex items-start">
              {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" />
              )}
              <div>
                <h4 className="text-white font-medium mb-2">
                  {selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'Correct!'
                    : 'Incorrect'}
                </h4>
                <p className="text-gray-300">
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      {showExplanation && (
        <button
          onClick={nextQuestion}
          className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
        </button>
      )}
    </div>
  );
};

export default QuizGame;