import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import { ArticleApi, TagApi } from '../../api';
import AuthContext from '../../Context/AuthContext';

const HomeContainer: React.FC = () => {
  const { user } = useContext(AuthContext);
  const tagApi = TagApi.getInstance();
  const articleApi = ArticleApi.getInstance();

  const [articles, setArticles] = useState<Article>();
  const [tags, setTags] = useState<TagsList>();

  const searchGlobalArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles();
      setArticles(response.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const searchFeedArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.feedArticle();
      setArticles(response.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const searchTags = async (): Promise<void> => {
    try {
      const response = await tagApi.getTags();
      setTags(response);
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

  const changeArticles = async (tag: string): Promise<void> => {
    try {
      const response = await articleApi.listArticles({ tag });
      setArticles(response.articles);
    } catch (error) {
      console.error(error);
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
