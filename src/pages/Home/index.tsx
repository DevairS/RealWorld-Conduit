import React, { useEffect } from 'react';
import Home from './Home';
import { UserApi } from '../../api';

const HomeContainer: React.FC = () => {
  const userApi = new UserApi();

  const searchArticles = async (): Promise<void> => {
    try {
      const userAuth = await userApi.listArticles();
      console.log(userAuth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchArticles();
  }, []);
  return <Home />;
};

export default HomeContainer;
