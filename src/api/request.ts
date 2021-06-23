import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  timeout: 30000,
});

const handleError = (error: AxiosResponse): FailValidationError => {
  throw error;
};

const sucessResponse = (response: any): AxiosResponse => response;

request.interceptors.response.use(sucessResponse, handleError);

const tokenValidator = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  const token = await localStorage.getItem('token');
  if (!token) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Token ${token}`,
    },
  };
};

request.interceptors.request.use(tokenValidator);
export default request;
