import { Store } from './store';
import { authApi } from '../pages/auth/auth-api';
import { router } from '../index';
import { RoutePath } from '../utils/router/route-path';

const store = new Store();

export const requestSignIn = (data: Record<string, unknown>) => {
  authApi
    .signIn(data)
    .then((res) => {
      if (res?.status === 200) {
        store.set('auth', true);
        router.go(RoutePath.CHAT);
      }
    })
    .catch((error) => console.log(error));
};

export const requestSignUp = (data: Record<string, unknown>) => {
  authApi
    .signUp(data)
    .then((res) => {
      if (res?.status === 200) {
        const { response } = res;
        store.set('auth', true);
        router.go(RoutePath.CHAT);
        console.log(JSON.parse(response));
      }
    })
    .catch((error) => console.log(error));
};
export const requestLogout = () => {
  authApi.logout().then((res) => {
    console.log(res.status);
  });
};

export const addData = (data: Record<string, unknown>) => {
  store.set('inputs', data);
};

export const getStore = () => {
  return store;
};
