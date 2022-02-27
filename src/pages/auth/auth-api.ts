import { HTTPTransport } from '../../utils/http-transport';

const http = new HTTPTransport('/auth');

export const authApi = {
  signIn: (data: Record<string, unknown>) => {
    return http.post('/signin', { data });
  },
  signUp: (data: Record<string, unknown>) => {
    return http.post('/signup', { data });
  },
  user: () => {
    return http.get('/user', {});
  },
  logout: () => {
    return http.post('/logout', {});
  },
};
