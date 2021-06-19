import React, { createContext, useEffect, useState } from 'react';
import { UserApi } from '../api';
import showAlert from '../utils/helpers/Alert';

interface AuthContextData {
  user?: User;
  signIn(user: UserLogin): Promise<void>;
  handleLogout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const userApi = new UserApi();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const signIn = async (user: UserLogin): Promise<void> => {
    try {
      const userAuth = await userApi.authUser(user);
      localStorage.setItem('token', JSON.stringify(userAuth?.token));
      localStorage.setItem('user', JSON.stringify(userAuth));

      const storageUser = localStorage.getItem('user');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }

      showAlert({ message: 'Login efetuado com sucesso', type: 'success' });
    } catch (error) {
      showAlert({ message: 'Error no login', type: 'error' });
    }
  };

  const handleLogout = (): void => {
    showAlert({ message: 'Logout efetuado com sucesso', type: 'success' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(undefined);
  };

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    const storageUser = localStorage.getItem('user');

    if (storageToken && storageUser) {
      setUser(JSON.parse(storageUser));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider value={{ user, signIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
