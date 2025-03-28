import React, { useState } from 'react';
import './SqlInjection.css';

interface User {
  id: number;
  username: string;
  password: string;
}

const usersDatabase: User[] = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'userpass' },
];

const SqlInjectionChallenge: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');
  const [isChallengeCompleted, setIsChallengeCompleted] = useState<boolean>(false);
  const [isHintVisible, setIsHintVisible] = useState<boolean>(false); // state to toggle the hint

  // Simulate SQL query (vulnerable)
  const simulateSqlQuery = (inputUsername: string, inputPassword: string): boolean => {
    // Vulnerable SQL Query Simulation
    const sqlQuery = `SELECT * FROM users WHERE username = '${inputUsername}' AND password = '${inputPassword}'`;
    console.log("Simulated SQL Query:", sqlQuery);

    // Check for SQL injection patterns
    const injectionPatterns = [
      "admin' --",
      "user' --",
      "' OR '1'='1",
      "' OR '' = '",
      "' OR 1=1 --"
    ];

    if (injectionPatterns.includes(inputUsername) || injectionPatterns.includes(inputPassword)) {
      return true;
    }

    // Check the database simulation
    const user = usersDatabase.find(
      (user) => user.username === inputUsername && user.password === inputPassword
    );

    return !!user;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate SQL Injection vulnerability
    if (simulateSqlQuery(username, password)) {
      setLoginMessage('Login successful! You found a vulnerability!');
      setIsChallengeCompleted(true);
    } else {
      setLoginMessage('Invalid login. Try SQL injection techniques!');
      setIsChallengeCompleted(false);
    }
  };

  const toggleHint = () => {
    setIsHintVisible(!isHintVisible); // Toggle the visibility of the hint section
  };

  return (
    <div className="sql-injection-container">
      <h2>SQL Injection Challenge</h2>
      <p>
        Try to use SQL Injection techniques to bypass the login system.
      </p>

      <div className="available-usernames">
        <h3>Available Usernames:</h3>
        {usersDatabase.map((user) => (
          <p key={user.id} className="username-item">{user.username}</p>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <p>{loginMessage}</p>

      {isChallengeCompleted && (
        <div className="completed-badge">
          Challenge Completed! 🎉
        </div>
      )}

      <div className="hint-container">
        <button className="hint-toggle-btn" onClick={toggleHint}>
          {isHintVisible ? 'Hide Hints' : 'Show Hints'}
        </button>

        {isHintVisible && (
          <div className="hint-content">
            <h3>Hints:</h3>
            <p>
              Try injecting an SQL statement such as <code>' OR '1'='1</code> in the
              username or password field.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SqlInjectionChallenge;
