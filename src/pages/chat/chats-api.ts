import { HTTPTransport } from '../../utils/http-transport';

const http = new HTTPTransport('/chats');

export const chatsApi = {
  getChats: () => {
    return http.get('', {});
  },
  postChat: (data: Record<string, unknown>) => {
    return http.post('/', { data });
  },
  deleteChat: (data: Record<string, unknown>) => {
    return http.post('/', { data });
  },
  createChat: (data: Record<string, unknown>) => {
    return http.post('/', { data });
  },
  getChatToken: (data: Record<string, unknown>) => {
    return http.post(`/token/${data.id}`, {});
  },
};
