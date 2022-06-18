import { HTTPTransport } from '../../utils/http-transport';
import { apiSettings } from '../../api/api-settings';
const { baseUrl } = apiSettings;
const http = new HTTPTransport(`${baseUrl }/user/profile`);

export const profileApi = {
  changeAvatar: (data: FormData) => {
    return http.put('/avatar', { data, headers: {} });
  },
};
