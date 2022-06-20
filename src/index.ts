import './main.less';
import Auth from '@pages/auth';
import SignIn from '@pages/auth/modules/signIn';
import SignUp from '@pages/auth/modules/signUp';
import Error_404 from '@pages/errors/modules/404';
import Error_500 from '@pages/errors/modules/500';
import Chat from '@pages/chat';
import Profile from '@pages/profile';
import Router from './utils/router/router';
import { RoutePath } from './utils/router/route-path';
import Store from './store';
import store from './store';

declare global {
  interface Window {
    AppStore: Record<string, any>;
  }
}
window.AppStore = Store;
document.addEventListener('DOMContentLoaded', () => {
  store.removeAll();
  const router = new Router('.root');
  router
    .use(RoutePath.SIGN_IN, () => new Auth({ content: new SignIn() }))
    .use(RoutePath.SIGN_UP, () => new Auth({ content: new SignUp() }))
    .use(RoutePath.CHAT, () => new Chat())
    .use(RoutePath.PROFILE, () => new Profile())
    .use(RoutePath.NOT_FIND, () => new Error_404())
    .use(RoutePath.ERROR, () => new Error_500())
    .start();
});
