import { HTTPTransport } from '../../../../utils/http-transport';

const http = new HTTPTransport('/user');

export const settingsApi = {
  postUser: (data: Record<string, unknown>) => {
    return http.get(`/${data?.id}`, {});
  },
};
