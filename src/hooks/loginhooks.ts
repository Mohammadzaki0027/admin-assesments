import { useState } from 'react';
import axios from 'axios';

type LoginData = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('/api/login', data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
