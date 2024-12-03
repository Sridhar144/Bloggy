import React from 'react';
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';

const Home = () => (
  <>
    <Navbar />
    <div className="container mx-auto mt-6">
      <PostList />
    </div>
  </>
);

export default Home;
