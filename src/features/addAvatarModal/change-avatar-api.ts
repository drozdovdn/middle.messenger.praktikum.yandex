import { HTTPTransport } from '../../utils/http-transport';

const http = new HTTPTransport('/user/profile');

export const profileApi = {
  changeAvatar: (data: FormData) => {
    return http.put('/avatar', { data, headers: {} });
  },
};
