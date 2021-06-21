import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import { ArticleApi, TagApi } from '../../api';
import AuthContext from '../../Context/AuthContext';
import showAlert from '../../utils/helpers/Alert';

const HomeContainer: React.FC = () => {
  const { user } = useContext(AuthContext);
  const tagApi = TagApi.getInstance();
  const articleApi = ArticleApi.getInstance();

  const [articles, setArticles] = useState<Articles>();
  const [tags, setTags] = useState<TagsList>();

  const searchGlobalArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles();
      setArticles(response.articles);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  const searchFeedArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.feedArticle();
      setArticles(response.articles);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  const searchTags = async (): Promise<void> => {
    try {
      const response = await tagApi.getTags();
      setTags(response);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
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
      showAlert({ message: error.message, type: 'error' });
    }
  };

  const changeArticles = async (tag: string): Promise<void> => {
    try {
      const response = await articleApi.listArticles({ tag });
      setArticles(response.articles);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  useEffect(() => {
    searchGlobalArticles();
    searchTags();
  }, []);

  return (
    <Home
      user={user}
      articles={articles}
      tags={tags}
      searchFeedArticles={searchFeedArticles}
      searchGlobalArticles={searchGlobalArticles}
      favoritedArticle={favoritedArticle}
      changeArticles={changeArticles}
    />
  );
};

export default HomeContainer;
