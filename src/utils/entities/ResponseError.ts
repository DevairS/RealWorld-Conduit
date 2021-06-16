import { AxiosError } from 'axios';

class ResponseError {
  message = '';

  constructor({ response }: AxiosError) {
    this.message =
      response?.data?.error && response?.data?.error[0]
        ? response.data.error[0]
        : 'Error inesperado';
  }
}

export default ResponseError;
