import { ResponseError } from '../../utils';
import request from '../request';

class ArticleApi {
  private static instance: ArticleApi | null = null;

  static getInstance(): ArticleApi {
    if (!ArticleApi.instance) {
      ArticleApi.instance = new ArticleApi();
    }
    return ArticleApi.instance;
  }

  // Authentication required
  createArticle = async (
    article: ArticleCreate,
    tags?: TagsList,
  ): Promise<void> => {
    try {
      const articles = {
        article: {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: [tags],
        },
      };
      await request.post('/articles', articles);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  // authentication no required
  listArticles = async (): Promise<ArticlesList> => {
    // ok
    try {
      const { data } = await request.get('/articles');
      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  // Authentication required
  feedArticle = async (): Promise<void> => {
    try {
      const { data } = await request.get('/articles/feed');
      console.log('data do FeedArticles', data);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getArticle = async (): Promise<void> => {
    try {
      const { data } = await request.get('/articles/:slug');
      console.log('data do getArticles', data);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  // Authentication required
  updateArticle = async (): Promise<void> => {
    try {
      const response = await request.put('/articles/:slug', {
        articles: {
          title: 'oi sou test',
          description: 'somd',
          body: 'huummdsdsdsds',
        },
      });
      console.log('resposta updateArticle:', response);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  // Authentication required
  deleteArticle = async (): Promise<void> => {
    try {
      await request.delete('/articles/:slug');
      console.log('delete');
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default ArticleApi;
