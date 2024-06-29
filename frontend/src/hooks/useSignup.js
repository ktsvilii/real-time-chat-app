import { useState } from 'react';

import toast from 'react-hot-toast';

const validateData = (fullName, userName, password, confirmPassword, gender) => {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;
};

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
    const success = validateData(fullName, userName, password, confirmPassword, gender);
    if (!success) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.success(`User ${userName} has been successfully created`);
      setIsLoading(false);
    }
  };

  return { isLoading, signup };
};
