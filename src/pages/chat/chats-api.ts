import { HTTPTransport } from '../../utils/http-transport';

const http = new HTTPTransport('/chats');

export const chatsApi = {
  getChats: () => {
    return http.get('/chats', {});
  },
  postChat: (data: Record<string, unknown>) => {
    return http.post('/chats', { data });
  },
  deleteChat: (data: Record<string, unknown>) => {
    return http.post('/chats', { data });
  },
};
