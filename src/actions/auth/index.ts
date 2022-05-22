import { Store } from '../../store/store';
import { authApi } from '../../pages/auth/auth-api';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';

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
      if ([RoutePath.SIGN_IN, RoutePath.SIGN_UP].includes(window.location.pathname)) {
        router.go(RoutePath.CHAT);
      }
    } else {
      //редиректим на авторизацию
      router.go(RoutePath.SIGN_IN);
      console.log('#', res);
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

export const addData = (data: Record<string, unknown>) => {
  store.set('inputs', data);
};

export const logoutUser = () => {
  authApi.logout().then((res) => {
    console.log({ res });
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
