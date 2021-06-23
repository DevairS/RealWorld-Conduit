import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleApi, UserApi } from '../../api';
import AuthContext from '../../Context/AuthContext';
import showAlert from '../../utils/helpers/Alert';
import Article from './Article';
import { schemaValidation } from './validation';

const ArticleContainer: React.FC = () => {
  const { user } = useContext(AuthContext);
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

  const handleChangeFollow = async (): Promise<void> => {
    try {
      if (article) {
        if (article?.author.following) {
          await userApi.unfollowUser(article.author.username);
          showAlert({ message: 'Parou de seguir', type: 'success' });
        } else {
          await userApi.followUser(article.author.username);
          showAlert({ message: 'Seguindo', type: 'success' });
        }
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

  const deleteArticle = async (slug: string): Promise<void> => {
    try {
      await articleApi.deleteArticle(slug);
      showAlert({ message: 'Artigo deletado com sucesso', type: 'success' });
    } catch (error) {
      showAlert({ message: 'Erro ao deletar Artigo', type: 'error' });
    }
  };

  return (
    <Article
      validationSchema={schemaValidation}
      submitForm={submitForm}
      article={article}
      comments={commentsArticle}
      handleChangeFollow={handleChangeFollow}
      userLogged={user}
      deleteArticle={deleteArticle}
    />
  );
};

export default ArticleContainer;
