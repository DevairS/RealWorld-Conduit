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

  listArticles = async (
    query?: Partial<QueryArticles>,
  ): Promise<ArticlesList> => {
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
    try {
      const { data } = await request.get('/articles/feed');
      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  favoritedArticle = async (slug: string): Promise<void> => {
    try {
      await request.post(`/articles/${slug}/favorite`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  unfavoritedArticle = async (slug: string): Promise<void> => {
    try {
      await request.delete(`/articles/${slug}/favorite`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getArticle = async (slug: string): Promise<Article> => {
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

  deleteArticle = async (slug: string): Promise<void> => {
    try {
      await request.delete(`/articles/${slug}`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default ArticleApi;
