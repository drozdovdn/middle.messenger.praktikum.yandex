import {EVENT_UPDATE, Store} from '../../store/store';
import {chatsApi} from '../../pages/chat/chats-api';

const store = new Store();

export const getChatsRequest = () => {
  chatsApi.getChats().then((res) => {
    if (res.status === 200) {
      const { response } = res;
      store.set('chat.data_list', JSON.parse(response), EVENT_UPDATE.LIST_CHAT);
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
      const data_socket = {
        id: data.id,
        avatar: data.avatar,
        title: data.title,
        token: JSON.parse(response).token
      }
      store.set('chat.data_socket', data_socket, EVENT_UPDATE.CONTROL_CHAT)
    }
  });
};

export const addUserInChat = (data: { login: string }) => {
  chatsApi.searchUser(data).then((res) => {
    if (res.status === 200) {
      const { response } = res;
      const data = JSON.parse(response);
      if (data[0].id) {
        const dataRequest = {
          users: [data[0].id],
          chatId: store?.state?.chat?.data_socket.id,
        };
        chatsApi.addUsersToChat(dataRequest);
        const modal = document.querySelector('.add-delete-modal');
        modal?.classList.add('hidden-modal');
        console.log('Пользователь найден', { dataRequest });
      } else {
        console.log('Пользователь не найден');
      }

      // console.log('200', { res });
    }
  });
};

export const getChatsData = () => {
  return store?.state?.chat;
};
