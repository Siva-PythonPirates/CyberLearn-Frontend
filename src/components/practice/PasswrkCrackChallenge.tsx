import React, { useState } from 'react';
import './PasswordCrackChallenge.css';

const correctPassword = 'BruteForce123';

const PasswordCrackChallenge: React.FC = () => {
  const [inputPassword, setInputPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isChallengeCompleted, setIsChallengeCompleted] = useState<boolean>(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputPassword === correctPassword) {
      setMessage('You cracked the password! 🎉');
      setIsChallengeCompleted(true);
    } else {
      setMessage('Wrong password. Try again!');
      setIsChallengeCompleted(false);
    }
  };

  return (
    <div className="password-crack-container">
      <h2>Password Cracking Challenge</h2>
      <p>Try to crack the password hidden behind this clue: "Brute force is key!"</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputPassword}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>

      {isChallengeCompleted && <div className="success-badge">Challenge Completed! 🎉</div>}
    </div>
  );
};

export default PasswordCrackChallenge;
