import React, { useState } from 'react';
import './XssChallenge.css';

const XssChallenge: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const [isChallengeCompleted, setIsChallengeCompleted] = useState<boolean>(false);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (comment.startsWith("alert(") && comment.endsWith(")")) {
        eval(comment);
        setIsChallengeCompleted(true);
      }
    } catch (error) {
      console.error('Invalid JavaScript code:', error);
    }

    setComment('');
  };

  return (
    <div className="xss-challenge-container">
      <h2>Cross-Site Scripting (XSS) Challenge</h2>
      <p>
        This challenge demonstrates a vulnerability where user input is reflected back and executed.
        Try injecting JavaScript in the comment box below (e.g., alert('hello')).
      </p>

      <div className="comment-form">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment (Try JavaScript injection like alert('hello'))"
        />
        <div className="button-container">
          <button onClick={handlePostComment}>Post Comment</button>
        </div>
      </div>

      {isChallengeCompleted && (
        <div className="challenge-completed">
          <h3>Challenge Completed!</h3>
          <p>You've successfully executed the JavaScript code. Good job!</p>
        </div>
      )}
    </div>
  );
};

export default XssChallenge;
