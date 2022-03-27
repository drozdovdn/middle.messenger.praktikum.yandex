import { HTTPTransport } from '../../../../utils/http-transport';

const http = new HTTPTransport('/user');

export const controlApi = {
  changeUserData: (data: Record<string, unknown>) => {
    return http.put(`/profile`, data);
  },
  changeUserPassword: (data: Record<string, unknown>) => {
    return http.put(`/password`, data);
  },
};
