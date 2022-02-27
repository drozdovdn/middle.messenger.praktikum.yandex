import { Store } from './store';
import { authApi } from '../pages/auth/auth-api';

const store = new Store();

export const requestSignIn = (data: Record<string, unknown>) => {
  authApi.signIn(data).then((res) => {
    console.log(res);
  });
};

export const requestSignUp = (data: Record<string, unknown>) => {
  authApi.signUp(data).then((res) => {
    console.log(res);
  });
};
export const requestLogout = () => {
  authApi.logout().then((res) => {
    console.log(res);
  });
};

export const addData = (data: Record<string, unknown>) => {
  store.set('inputs', data);
};

export const getStore = () => {
  return store;
};
