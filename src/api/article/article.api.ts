import { ResponseError } from '../../utils';
import showAlert from '../../utils/helpers/Alert';
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
  listArticles = async (
    query?: Partial<QueryArticles>,
  ): Promise<ArticlesList> => {
    // ok
    try {
      const { data } = await request.get('/articles', {
        params: query,
      });
      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  feedArticle = async (): Promise<ArticlesList> => {
    // ok
    try {
      const { data } = await request.get('/articles/feed');
      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  favoritedArticle = async (slug: string): Promise<void> => {
    // ok
    try {
      await request.post(`/articles/${slug}/favorite`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  unfavoritedArticle = async (slug: string): Promise<void> => {
    // ok
    try {
      await request.delete(`/articles/${slug}/favorite`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getArticle = async (slug: string): Promise<Article> => {
    // ok
    try {
      const { data } = await request.get(`/articles/${slug}`);
      return data.article;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getComments = async (slug: string): Promise<ArticleComment> => {
    try {
      const { data } = await request.get(`articles/${slug}/comments`);
      return data.comments;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  addComment = async (comment: NewComment, slug: string): Promise<void> => {
    try {
      await request.post(`articles/${slug}/comments`, {
        comment,
      });
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
