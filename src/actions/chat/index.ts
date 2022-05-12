import { Store } from '../../store/store';
import { chatsApi } from '../../pages/chat/chats-api';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';

const store = new Store();

export const getChatsRequest = () => {
  chatsApi.getChats().then((res) => {
    if (res.status === 200) {
      const { response } = res;
      store.set('chat.data_list', JSON.parse(response));
    } else {
      store.set('chat.data_list', []);
    }
  });
};

export const createNewChat = (data: Record<string, unknown>) => {
  chatsApi.createChat(data).then((res) => {
    if (res.status === 200) {
      getChatsRequest();
      const modal = document.querySelector('.add-delete-modal');
      modal.classList.add('hidden-modal');
      const { response } = res;
      console.log({ response });
    }
  });
};
export const getToken = (data: Record<string, unknown>) => {
  chatsApi.getChatToken(data).then((res) => {
    if (res.status === 200) {
      const { response } = res;
      store.set('chat.data_socket.id', data.id);
      store.set('chat.data_socket.token', JSON.parse(response).token);
      console.log(JSON.parse(response));
    }
  });
};

export const getChatsData = () => {
  return store?.state?.chat;
};
