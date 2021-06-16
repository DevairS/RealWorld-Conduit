import { ResponseError } from '../../utils';
import request from '../request';

class UserApi {
  createUser = async (user: UserRegister): Promise<void> => {
    try {
      await request.post('/users', {
        user,
      });
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  authUser = async (user: UserLogin): Promise<void> => {
    try {
      const { data } = await request.post('users/login', {
        user,
      });
      localStorage.setItem('token', JSON.stringify(data.user.token));
      request.defaults.headers.Authorization = data.user.token;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default UserApi;
