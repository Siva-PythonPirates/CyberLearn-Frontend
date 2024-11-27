import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import { Shield, UserPlus } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axiosInstance.post('register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
        <div>
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-cyan-500" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-cyan-500 hover:text-cyan-400">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Username"
              required
            />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Email address"
              required
            />
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Password"
              required
            />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Confirm Password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <UserPlus className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400" />
            </span>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
