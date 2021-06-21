import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleApi, UserApi } from '../../api';
import showAlert from '../../utils/helpers/Alert';
import Article from './Article';
import { schemaValidation } from './validation';

const ArticleContainer: React.FC = () => {
  const { slug } = useParams<ArticleRouteParams>();
  const articleApi = ArticleApi.getInstance();
  const userApi = UserApi.getInstance();
  const [article, setArticle] = useState<Article>();
  const [commentsArticle, setCommentsArticle] = useState<ArticleComment>();

  useEffect(() => {
    searchArticle(slug);
  }, [slug]);

  const searchArticle = async (slug: string): Promise<void> => {
    try {
      const articleResponse = await articleApi.getArticle(slug);
      const commentsArticlesResponse = await articleApi.getComments(slug);
      setCommentsArticle(commentsArticlesResponse);
      setArticle(articleResponse);
    } catch (error) {
      showAlert({ message: 'Artigo não encotrado', type: 'error' });
    }
  };

  const handleChangeFollow = async (
    username: string,
    state: boolean,
  ): Promise<void> => {
    try {
      if (state) {
        await userApi.unfollowUser(username);
      } else {
        await userApi.followUser(username);
      }
    } catch (error) {
      showAlert({ message: 'Erro no follow', type: 'error' });
    }
  };

  const submitForm = async (
    values: NewComment,
    slug: string,
  ): Promise<void> => {
    try {
      await articleApi.addComment(values, slug);
    } catch (error) {
      showAlert({ message: 'Erro ao adicionar comentário', type: 'error' });
    }
  };

  return (
    <Article
      validationSchema={schemaValidation}
      submitForm={submitForm}
      article={article}
      comments={commentsArticle}
      handleChangeFollow={handleChangeFollow}
    />
  );
};

export default ArticleContainer;
