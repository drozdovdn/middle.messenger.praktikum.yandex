import { EVENT_UPDATE, Store } from '../../store/store';
import { authApi } from '../../pages/auth/auth-api';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';
import { getChatsRequest } from '../chat';

const store = new Store();
export const requestSignIn = (data: Record<string, unknown>) => {
  authApi.signIn(data).then((res) => {
    if (res?.status === 200) {
      store.set('auth', true);
      router.go(RoutePath.CHAT);
    }
  });
};

export const requestSignUp = (data: Record<string, unknown>) => {
  authApi.signUp(data).then((res) => {
    if (res?.status === 200) {
      const { response } = res;
      store.set('auth', true);
      router.go(RoutePath.CHAT);
      console.log(JSON.parse(response));
    }
  });
};
export const requestAutchUser = () => {
  authApi.user().then((res) => {
    if (res?.status === 200) {
      const { response } = res;

      store.set('user', JSON.parse(response));

      if (store.chat.data_list && [RoutePath.SIGN_IN, RoutePath.SIGN_UP].includes(window.location.pathname)) {
        router.go(RoutePath.CHAT);
      } else {
        getChatsRequest();
      }
    } else {
      //редиректим на авторизацию
      router.go(RoutePath.SIGN_IN);

      store.set('user', {});
    }
  });
};
export const requestLogout = () => {
  authApi.logout().then((res) => {
    console.log(res.status);
    store.set('auth', false);
  });
};

export const logoutUser = () => {
  authApi.logout().then((res) => {
    console.log('LOGOUT');
    if (res.status === 200) {
      localStorage.clear();
      router.go(RoutePath.SIGN_IN);
    }
  });
};

export const getStore = () => {
  return store;
};
