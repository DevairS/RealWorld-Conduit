import axios, { AxiosResponse } from 'axios';
// import { ResponseError } from '../utils';

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

const handleError = (error: AxiosResponse): FailValidationError => {
  const unauthorizedError = 401;
  const forbiddenError = 403;
  const notFound = 404;

  if (error.status === unauthorizedError) {
    const message = 'Não conseguimos identificar seu usuário e/ou senha';
  }
  if (error.status === forbiddenError) {
    const message = 'Sem permissão';
  }
  if (error.status === notFound) {
    const message = 'Não encotrado';
  }
  throw error;
};

const sucessResponse = (response: any): AxiosResponse => response;

request.interceptors.response.use(sucessResponse, handleError);

export default request;
