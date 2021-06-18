import { ResponseError } from '../../utils';
import request from '../request';

class UserApi {
  createUser = async (user: UserRegister): Promise<void> => {
    // ok
    try {
      await request.post('/users', {
        user,
      });
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  authUser = async (user: UserLogin): Promise<User> => {
    // ok
    try {
      const { data } = await request.post('/users/login', {
        user,
      });
      return data.user;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  // Authentication required
  getUser = async (): Promise<void> => {
    try {
      const response = await request.get('/user');
      console.log('resposta', response);
    } catch (error) {
      console.log('error da busca', error.message);
    }
  };

  // updateUser put/user authentication required

  // getProfile get/profiles:username authetication optional

  // followUser post/profiles:username/follow authentication required

  // unfollowUser delete/profiles:username/follow authentication required

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
  createArticle = async (): Promise<void> => {
    try {
      const response = await request.post('/articles', {
        articles: {
          title: 'oi sou Devair',
          description: 'som teste',
          body: 'huumm',
          taglist: ['reactjs', 'typescript', 'lol'],
        },
      });
      console.log('resposta createArticle:', response);
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

  // addComments post/articles/:slug/comments authentication required

  // getComments get/articles/:slug/comments optional authentication required

  // deleteComments delete/articles/:slug/comments/:id optional authentication required

  // favoriteArticle post/articles/:slug/favorite authentication required

  // unfavoriteArticle delete/articles/:slug/favorite authentication required

  // favoriteArticle post/articles/:slug/favorite authentication required

  // No authetication required
  getTags = async (): Promise<TagsList> => {
    // ok
    try {
      const { data } = await request.get('/tags');
      return data.tags;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default UserApi;
