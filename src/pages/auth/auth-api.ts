import { HTTPTransport } from '../../utils/http-transport';
import { apiSettings } from '../../api/api-settings';
const { baseUrl } = apiSettings;
const http = new HTTPTransport(`${baseUrl }/auth`);

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
