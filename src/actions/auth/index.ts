import { Store } from '../../store/store';
import { authApi } from '../../pages/auth/auth-api';
import { RoutePath } from '../../utils/router/route-path';
import Router from '../../utils/router/router';

const store = new Store();
export const requestSignIn = (data: Record<string, unknown>) => {
  authApi.signIn(data).then((res) => {
    if (res?.status === 200) {
      requestAutchUser();
      store.set('auth', true);
      const router = new Router('.root');
      router.go(RoutePath.CHAT);
    }
  });
};

export const requestSignUp = (data: Record<string, unknown>) => {
  authApi.signUp(data).then((res) => {
    if (res?.status === 200) {
      requestAutchUser();
      store.set('auth', true);
      const router = new Router('.root');
      router.go(RoutePath.CHAT);
    }
  });
};
export const requestAutchUser = () => {
  if (![RoutePath.SIGN_IN, RoutePath.SIGN_UP, RoutePath.CHAT, RoutePath.PROFILE, RoutePath.ERROR].includes(window.location.pathname as RoutePath)) {
    const router = new Router('.root');
    return router.go(RoutePath.NOT_FIND);
  }
  if (RoutePath.ERROR === (window.location.pathname as RoutePath)) {
    return;
  }
  if (store.state.auth) {
    return;
  }

  authApi.user().then((res) => {
    if (res?.status === 200) {
      const { response } = res;
      const router = new Router('.root');
      store.set('auth', true);
      store.set('user', JSON.parse(response));

      if ([RoutePath.SIGN_IN, RoutePath.SIGN_UP].includes(window.location.pathname as RoutePath)) {
        router.go(RoutePath.CHAT);
      }
    } else {
      const router = new Router('.root');
      //редиректим на авторизацию
      router.go(RoutePath.SIGN_IN);
      store.set('user', {});
    }
  });
};
export const requestLogout = () => {
  authApi.logout().then(() => {
    store.set('auth', false);
  });
};

export const logoutUser = () => {
  authApi.logout().then((res) => {
    if (res.status === 200) {
      store.removeAll();
      const router = new Router('.root');
      router.go(RoutePath.SIGN_IN);
    }
  });
};

export const getStore = () => {
  return store;
};
