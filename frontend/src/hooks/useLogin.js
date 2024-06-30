import { useState } from 'react';

import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const validateData = (userName, password) => {
  if (!userName || !password) {
    toast.error('Please enter your username and password');
    return false;
  }

  return true;
};

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }) => {
    const success = validateData(userName, password);
    if (!success) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};
