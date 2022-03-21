import { Store } from '../../store/store';
import { chatsApi } from '../../pages/chat/chats-api';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';

const store = new Store();

export const getChatsRequest = () => {
  chatsApi.getChats().then((res) => {
    if (res.status !== 200) {
      // router.go(RoutePath.NOT_FIND);
      store.set('chat.data_list', []);
    } else if (res.status === 200) {
      const { response } = res;
      store.set('chat.data_list', typeof response === 'string' ? [] : response);
    }
  });
};

export const getChatsData = () => {
  return store?.state?.chat;
};
