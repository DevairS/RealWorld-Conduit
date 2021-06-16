import { ResponseError } from '../../utils';
import request from '../request';

class UserApi {
  createUser = async (user: UserRegister): Promise<void> => {
    console.log('antesTry');
    try {
      console.log('1devair');
      await request.post('/users', {
        user,
      });
      console.log('2');
    } catch (error) {
      console.log('teste123', error);
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
      console.log(error);
    }
  };
}

export default UserApi;
