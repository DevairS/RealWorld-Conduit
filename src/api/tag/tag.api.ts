import { ResponseError } from '../../utils';
import request from '../request';

class TagApi {
  private static instance: TagApi | null = null;

  static getInstance(): TagApi {
    if (!TagApi.instance) {
      TagApi.instance = new TagApi();
    }
    return TagApi.instance;
  }

  getTags = async (): Promise<TagsList> => {
    try {
      const { data } = await request.get('/tags');
      return data.tags;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}

export default TagApi;
