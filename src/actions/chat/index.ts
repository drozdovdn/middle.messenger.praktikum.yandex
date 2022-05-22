import { Store } from '../../store/store';
import { chatsApi } from '../../pages/chat/chats-api';

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
      modal?.classList.add('hidden-modal');
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
      store.set('chat.data_socket.avatar', data.avatar);
      store.set('chat.data_socket.title', data.title);
      store.set('chat.data_socket.token', JSON.parse(response).token);
    }
  });
};

export const addUserInChat = (data: { login: string }) => {
  chatsApi.searchUser(data).then((res) => {
    if (res.status === 200) {
      console.log(JSON.parse(res));
      console.log('200', { res });
    }
  });
};

export const getChatsData = () => {
  return store?.state?.chat;
};
