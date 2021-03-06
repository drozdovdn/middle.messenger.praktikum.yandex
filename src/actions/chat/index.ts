import { EVENT_UPDATE, Store } from '../../store/store';
import { chatsApi } from '../../pages/chat/chats-api';
import { RoutePath } from '../../utils/router/route-path';
import Router from '../../utils/router/router';

const store = new Store();

export const clearMessage = () => {
  store.removeState('messages', EVENT_UPDATE.MESSAGES);
};
export const clearDataSocket = () => {
  store.removeState('data_socket', EVENT_UPDATE.MESSAGES);
};

export const setMessage = (data: any) => {
  let _data: Record<string, any>[] = [];
  if (Array.isArray(data)) {
    if (store?.state?.messages) {
      _data = [...Object.values(store.state.messages), ...data];
    } else {
      _data = [..._data, ...data];
    }
  } else {
    if (store?.state?.messages) {
      _data = [...Object.values(store.state.messages), data];
    } else {
      _data = [..._data, data];
    }
  }

  store.set('messages', _data, EVENT_UPDATE.MESSAGES);
};

export const getChatsRequest = () => {
  chatsApi.getChats().then((res) => {
    if (res.status === 200) {
      const { response } = res;
      store.set('chat.data_list', JSON.parse(response), EVENT_UPDATE.LIST_CHAT);
      if ([RoutePath.SIGN_IN, RoutePath.SIGN_UP].includes(window.location.pathname as RoutePath)) {
        const router = new Router('.root');
        router.go(RoutePath.CHAT);
      }
    } else {
      store.set('chat.data_list', []);
    }
  });
};

export const createNewChat = (data: Record<string, unknown>) => {
  chatsApi.createChat(data).then((res) => {
    if (res.status === 200) {
      getChatsRequest();
      const modal = document.querySelector('.add-chat');
      modal?.classList.add('hidden-modal');
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
        token: JSON.parse(response).token,
      };
      store.set('data_socket', { ...data_socket }, EVENT_UPDATE.DIALOG_WINDOW);
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
          users: [Number(data[0].id)],
          chatId: Number(store?.state?.data_socket?.id),
        };
        chatsApi.addUsersToChat(dataRequest);
        const modal = document.querySelector('.add-user');
        modal?.classList.add('hidden-modal');
        console.log('???????????????????????? ????????????', { dataRequest });
      } else {
        console.log('???????????????????????? ???? ????????????');
      }
    }
  });
};

export const deleteUserInChat = (data: { login: string }) => {
  chatsApi.searchUser(data).then((res) => {
    if (res.status === 200) {
      const { response } = res;
      const data = JSON.parse(response);
      if (data[0].id) {
        const dataRequest = {
          users: [Number(data[0].id)],
          chatId: Number(store?.state?.data_socket?.id),
        };
        chatsApi.deleteUsersToChat(dataRequest);
        const modal = document.querySelector('.delete-user');
        modal?.classList.add('hidden-modal');
        console.log('???????????????????????? ????????????', { dataRequest });
      } else {
        console.log('???????????????????????? ???? ????????????');
      }
    }
  });
};

export const getChatsData = () => {
  return store?.state?.chat;
};
