import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import { ArticleApi, TagApi } from '../../api';
import AuthContext from '../../Context/AuthContext';

const HomeContainer: React.FC = () => {
  const tagApi = TagApi.getInstance();
  const articleApi = ArticleApi.getInstance();

  const [articles, setArticles] = useState<ArticlesList>();
  const [tags, setTags] = useState<TagsList>();
  const { user } = useContext(AuthContext);

  const searchArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles();
      console.log(response.articles);
      setArticles(response);
    } catch (error) {
      console.log('Não buscou os artigos', error);
    }
  };

  const searchTags = async (): Promise<void> => {
    try {
      const response = await tagApi.getTags();
      setTags(response);
    } catch (error) {
      console.log('Error na busca das tags', error);
    }
  };

  useEffect(() => {
    searchArticles();
    searchTags();
  }, []);

  return <Home user={user} articles={articles} tags={tags} />;
};

export default HomeContainer;
