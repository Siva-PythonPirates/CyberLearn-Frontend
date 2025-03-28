import React, { useState, lazy, Suspense } from 'react';

// Lazy load practice components
const LinuxTerminal = lazy(() => import('../practice/LinuxTerminal'));
const QuizGame = lazy(() => import('../practice/QuizGame'));
const SqlInjection = lazy(() => import('../practice/SqlInjection'));
const XssChallenge = lazy(() => import('../practice/XssChallenge'));

// The component that handles loading practice challenges
const Practice: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const handleStartPractice = (practiceName: string) => {
    setSelectedPractice(practiceName);
  };

  return (
    <div>
      <button onClick={() => handleStartPractice('LinuxTerminal')}>Start Linux Terminal</button>
      <button onClick={() => handleStartPractice('QuizGame')}>Start Quiz Game</button>

      <Suspense fallback={<div>Loading...</div>}>
        {selectedPractice === 'LinuxTerminal' && <LinuxTerminal />}
        {selectedPractice === 'QuizGame' && <QuizGame />}
        {selectedPractice === 'SqlInjection' && <SqlInjection />}
        {selectedPractice === 'XssChallenge' && <XssChallenge />}
      </Suspense>
    </div>
  );
};

export default Practice;
