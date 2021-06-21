import { ResponseError } from '../../utils';
import request from '../request';

class UserApi {
  private static instance: UserApi | null = null;

  static getInstance(): UserApi {
    if (!UserApi.instance) {
      UserApi.instance = new UserApi();
    }
    return UserApi.instance;
  }

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

  updateUser = async (user: UserUpdate): Promise<void> => {
    // ok
    try {
      const { data } = await request.put('/user', user);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.user.token));
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  followUser = async (user: string): Promise<void> => {
    try {
      await request.post(`/profiles/${user}/follow`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  unfollowUser = async (user: string): Promise<void> => {
    try {
      await request.delete(`/profiles/${user}/follow`);
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default UserApi;
