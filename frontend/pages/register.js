
import React, { useState } from 'react';
import axios from 'axios';
import api from '../services/api';  // Your axios setup
import { useRouter } from 'next/router';  // Import the useRouter hook from Next.js

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const router = useRouter();  // Initialize the router

  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/user/register/', formData);
      if (response.status === 201) {
        setMessage('Registration successful!');
        router.push('/login')
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
        console.log(error, error.response)
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Server Error'}`);
      } else {
        setMessage('Network Error. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full mb-4 rounded"
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full mb-4 rounded"
          /> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full mb-4 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
        {message && <p className="text-center mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
