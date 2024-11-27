import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import { Shield, Lock } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('login/', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
        <div>
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-cyan-500" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <Link to="/register" className="font-medium text-cyan-500 hover:text-cyan-400">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Password"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
