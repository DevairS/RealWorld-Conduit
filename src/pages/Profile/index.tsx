import React, { useContext, useEffect, useState } from 'react';
import Profile from './Profile';
import AuthContext from '../../Context/AuthContext';
import { ArticleApi } from '../../api';

const ProfileContainer: React.FC = () => {
  const articleApi = ArticleApi.getInstance();
  const { user, handleLogout } = useContext(AuthContext);
  const [articles, setArticles] = useState<Article>();

  const searchMyArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles({
        author: user?.username,
      });
      setArticles(response.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const searchFavoritedArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles({
        favorited: user?.username,
      });
      setArticles(response.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const favoritedArticle = async (
    slug: string,
    state: boolean,
  ): Promise<void> => {
    try {
      if (state) {
        await articleApi.unfavoritedArticle(slug);
      } else {
        await articleApi.favoritedArticle(slug);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMyArticles();
  }, []);
  return (
    <Profile
      user={user}
      handleLogout={handleLogout}
      articles={articles}
      searchMyArticles={searchMyArticles}
      searchFavoritedArticles={searchFavoritedArticles}
      favoritedArticle={favoritedArticle}
    />
  );
};

export default ProfileContainer;
