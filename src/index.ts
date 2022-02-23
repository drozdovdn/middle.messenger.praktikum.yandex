import './main.less';
import Auth from './pages/auth';
import Router from './utils/router/router';
import SignIn from './pages/auth/modules/signIn';
import SignUp from './pages/auth/modules/signUp';
import { RoutePath } from './utils/router/route-path';

const signIn = new Auth({ content: new SignIn() });
const signUp = new Auth({ content: new SignUp() });

export const router = new Router('.root');
console.log('APP');
router
  .use(RoutePath.SIGN_IN, () => signIn)
  .use(RoutePath.SIGN_UP, () => signUp)
  .start();

console.log({ router });
