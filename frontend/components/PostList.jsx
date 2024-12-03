import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts/api/posts').then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-4">
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
          <small>By {post.author}</small>
        </div>
      ))}
    </div>
  );
};

export default PostList;
