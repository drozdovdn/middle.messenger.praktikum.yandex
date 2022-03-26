import { Store } from '../../store/store';
import { settingsApi } from '../../pages/profile/modules/settings/settings-api';
import { controlApi } from '../../pages/profile/modules/control/constrol-api';

const store = new Store();

export const setUserData = (data: Record<string, unknown>) => {
  console.log('set', { data });
  store.set('user', data);
};
export const getUserData = () => {
  return store?.state?.user;
};

export const getUser = () => {
  settingsApi.postUser({ id: store.state.user.id }).then((res) => {
    if (res.status === 200) {
      const { response } = res;
      store.set('user', response.data);
    }
  });
};

export const changeUserData = (data: Record<string, unknown>) => {
  controlApi.changeUserData({ data }).then((res) => {
    if (res.status === 200) {
      const { response } = res;
      setUserData(JSON.parse(response));
      console.log(response);
    }
  });
};
