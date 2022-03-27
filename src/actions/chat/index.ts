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
      const modal = document.querySelector('.add-delete-modal');
      modal.classList.add('hidden-modal');
      const { response } = res;
      console.log({ response });
    }
  });
};

export const getChatsData = () => {
  return store?.state?.chat;
};
