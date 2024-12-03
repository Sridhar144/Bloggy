import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null, // Initially null
    user: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;

      // Store token in localStorage
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      } else {
        localStorage.removeItem('token');
      }
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

// Configure store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// Optionally export other relevant Redux items
export const useAuth = () => {
  const [isClient, setIsClient] = useState(false); // Track if the code is running client-side
  const token = useSelector((state) => state.auth?.token); // Use optional chaining here too
  const user = useSelector((state) => state.auth?.user); // Optional chaining for user
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client
  }, []);

  useEffect(() => {
    if (isClient && !token) {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        dispatch(setAuth({ token: storedToken, user: 'user_from_local_storage' }));
      }
    }
  }, [isClient, token, dispatch]);

  return { token, user, dispatch };
};
