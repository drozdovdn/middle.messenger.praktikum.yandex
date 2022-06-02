import './main.less';
import Auth from './pages/auth';
import Router from './utils/router/router';
import SignIn from './pages/auth/modules/signIn';
import SignUp from './pages/auth/modules/signUp';
import { RoutePath } from './utils/router/route-path';
import Error_404 from './pages/errors/modules/404';
import Error_500 from './pages/errors/modules/500';
import Chat from './pages/chat';
import Profile from './pages/profile';
import Store from './store';

declare global {
  interface Window {
    AppStore: Record<string, any>;
  }
}
window.AppStore = Store;

const signIn = new Auth({ content: new SignIn() });
const signUp = new Auth({ content: new SignUp() });

export const router = new Router('.root');

router
  .use(RoutePath.SIGN_IN, () => signIn)
  .use(RoutePath.SIGN_UP, () => signUp)
  .use(RoutePath.CHAT, () => new Chat())
  .use(RoutePath.PROFILE, () => new Profile())
  .use(RoutePath.NOT_FIND, () => new Error_404())
  .use(RoutePath.ERROR, () => new Error_500())
  .start();
