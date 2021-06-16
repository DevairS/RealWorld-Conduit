import React, { createContext, useState } from 'react';
import { UserApi } from '../api';

interface AuthContextData {
  authenticated: boolean;
  signIn(user: UserLogin): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const userApi = new UserApi();
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = async (user: UserLogin): Promise<void> => {
    try {
      await userApi.authUser(user);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
