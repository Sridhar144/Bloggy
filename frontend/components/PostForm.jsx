import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import { useRouter } from 'next/router';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = useSelector((state) => state.auth?.token);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      if (!token) {
        alert("Authorization token is missing");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the token is passed correctly
          'Content-Type': 'application/json', // Ensure content type is specified
        },
      };
      await api.post('/posts/api/posts/', { title, content }, config);
      alert('Post created successfully!');
      router.push('/')
    } catch (error) {
      console.error('Error Response:', error.response); // Check server error response
      alert('Failed to create post');
    }
  };

  return (
    <div>
      <h1 className="text-xl">Create Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mt-2"
      ></textarea>
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-4">
        Submit
      </button>
    </div>
  );
};

export default PostForm;
