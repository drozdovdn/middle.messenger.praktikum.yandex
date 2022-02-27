import { Store } from '../../store/store';
import { chatsApi } from '../../pages/chat/chats-api';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';
import { settingsApi } from '../../pages/profile/modules/settings/settings-api';

const store = new Store();

export const getUser = () => {
  settingsApi.postUser({ id: store.state.user.id });
};
