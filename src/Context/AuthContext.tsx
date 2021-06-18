import React, { createContext, useEffect, useState } from 'react';
import { UserApi } from '../api';
import request from '../api/request';
import showAlert from '../utils/helpers/Alert';

interface AuthContextData {
  authenticated: boolean;
  user: User;
  signIn(user: UserLogin): Promise<void>;
  handleLogout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const userApi = new UserApi();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const [authenticated, setAuthenticated] = useState(false);

  const signIn = async (user: UserLogin): Promise<void> => {
    try {
      const userAuth = await userApi.authUser(user);
      localStorage.setItem('token', JSON.stringify(userAuth?.token));
      showAlert({ message: 'Login efetuado com sucesso', type: 'success' });
      setUser(userAuth);
      setAuthenticated(true);
    } catch (error) {
      showAlert({ message: 'Error no login', type: 'error' });
    }
  };

  const handleLogout = (): void => {
    showAlert({ message: 'Logout efetuado com sucesso', type: 'success' });
    setAuthenticated(false);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, user, signIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
