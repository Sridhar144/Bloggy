import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { clearAuth } from '../store'; // Clear the auth data
import Link from 'next/link';

const Navbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  const handleLogout = () => {
    dispatch(clearAuth()); // Clear the token in Redux
    router.push('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link className="font-bold text-lg" href="/">
        Blog
      </Link>
      <div>
        {token ? (
          <>
            <Link className="mr-4" href="/create-post">Create Post</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        ) : (
          <>
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/register" className="mr-4">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
