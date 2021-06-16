import React, { createContext, useEffect, useState } from 'react';
import { UserApi } from '../api';
import showAlert from '../utils/helpers/Alert';

interface AuthContextData {
  authenticated: boolean;
  signIn(user: UserLogin): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const userApi = new UserApi();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signIn = async (user: UserLogin): Promise<void> => {
    try {
      await userApi.authUser(user);
      showAlert({ message: 'Login Efetuado com sucesso1', type: 'success' });
      setAuthenticated(true);
    } catch (error) {
      showAlert({ message: 'Error no login2', type: 'error' });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('useEffect:', token);
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
