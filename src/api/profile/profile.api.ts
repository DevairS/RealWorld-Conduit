import { ResponseError } from '../../utils';
import request from '../request';

class ProfileApi {
  private static instance: ProfileApi | null = null;

  static getInstance(): ProfileApi {
    if (!ProfileApi.instance) {
      ProfileApi.instance = new ProfileApi();
    }
    return ProfileApi.instance;
  }

  getProfile = async (profile: string): Promise<Profile> => {
    try {
      const { data } = await request.get(`/profiles/${profile}`);
      return data.profile;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default ProfileApi;
