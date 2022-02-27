import { HTTPTransport } from '../../../../utils/http-transport';

const http = new HTTPTransport('/chats');

export const settingsApi = {
  postUser: (data: Record<string, unknown>) => {
    return http.post(`/chats/${data?.id}`, {});
  },
};
