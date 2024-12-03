import React, { useState } from 'react';
import api from '../services/api';  // Your axios setup
import { useDispatch } from 'react-redux';
import { setAuth } from '../store';
import { useAuth } from '../store';  // Get token from Redux using this hook
import { useRouter } from 'next/router';  // Import the useRouter hook from Next.js

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { token } = useAuth();  // Get token from Redux here
  const router = useRouter();  // Initialize the router

  const handleLogin = async () => {
    try {
      const res = await api.post('/user/login/', { username, password }, {
        headers: {
          Authorization: `Bearer ${token}`,  // Pass token in headers
        },
      });
      console.log(res)
      dispatch(setAuth({ token: res.data.access, user: username }));
      alert('Login successful');
      router.push('/');  // Use Next.js router to navigate to the posts page

      // window.location.href = '/';  // Change the URL to your PostList page
    } catch (error) {
      console.error(error);
      alert('Login failed');

    }
  };

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mt-4">
        Login
      </button>
    </div>
  );
};

export default Login;
