import axios from 'axios';
import { HttpError } from 'errors/HttpError';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export function getHttpError(error: unknown): HttpError {
  if (axios.isAxiosError(error) && error.response?.data.error) {
    return new HttpError({
      message: error.response.data.error,
      statusCode: error.response.status,
      params: error.response.data.params,
    });
  }
  return new HttpError({
    message: 'Ocorreu um erro desconhecido',
  });
}

export default api;
