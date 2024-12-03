import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';  // Import your PostList component
import api from '../services/api';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('http://localhost:8000/posts/api/posts/')  // Make sure to hit the correct API URL
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />  {/* Pass posts as a prop to the PostList component */}
    </div>
  );
};

export default PostsPage;
