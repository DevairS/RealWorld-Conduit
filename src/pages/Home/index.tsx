import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import { UserApi } from '../../api';
import AuthContext from '../../Context/AuthContext';

const HomeContainer: React.FC = () => {
  const userApi = new UserApi();
  const [articles, setArticles] = useState<ArticlesList>();
  const [tags, setTags] = useState<TagsList>();
  const { user } = useContext(AuthContext);

  const searchArticles = async (): Promise<void> => {
    try {
      const response = await userApi.listArticles();
      setArticles(response);
    } catch (error) {
      console.log('Não buscou os artigos', error);
    }
  };

  const searchTags = async (): Promise<void> => {
    try {
      const response = await userApi.getTags();
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
