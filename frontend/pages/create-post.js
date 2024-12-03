import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  const { token } = useSelector((state) => state.auth);  // Get token from Redux
  const router = useRouter();
  console.log(token)
  useEffect(() => {
    if (!token) {
      router.push('/login');  // Redirect to login if no token is found
    }
  }, [token, router]);

  return (
    
  <>
  <Navbar />
  <div className="container mx-auto mt-6">
    <PostForm />
  </div>
</>
  );
};

export default CreatePost;
