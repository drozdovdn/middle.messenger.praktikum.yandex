import { HTTPTransport } from '../../utils/http-transport';

const http = new HTTPTransport('/chats');
const httpUser = new HTTPTransport('/user');

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
  searchUser: (data: { login: string }) => {
    return httpUser.post('/search', { data });
  },
};
