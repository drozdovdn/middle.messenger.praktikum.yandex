import { HTTPTransport } from '../../../../utils/http-transport';
import { apiSettings } from '../../../../api/api-settings';
const { baseUrl } = apiSettings;

const http = new HTTPTransport(`${baseUrl }/user`);

export const controlApi = {
  changeUserData: (data: Record<string, unknown>) => {
    return http.put(`/profile`, data);
  },
  changeUserPassword: (data: Record<string, unknown>) => {
    return http.put(`/password`, data);
  },
};
