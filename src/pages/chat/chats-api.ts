import { HTTPTransport } from '../../utils/http-transport';
import { apiSettings } from '../../api/api-settings';
const { baseUrl } = apiSettings;

const http = new HTTPTransport(`${baseUrl }/chats`);
const httpUser = new HTTPTransport(`${baseUrl }/user`);

export const chatsApi = {
  getChats: () => {
    return http.get('?limit=30', {});
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
  addUsersToChat: (data: { users: number[]; chatId: number }) => {
    return http.put('/users', { data });
  },
  deleteUsersToChat: (data: { users: number[]; chatId: number }) => {
    return http.delete('/users', { data });
  },
};
