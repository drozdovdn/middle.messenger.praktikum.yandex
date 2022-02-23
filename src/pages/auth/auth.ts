import './aurh.less';
import { templater } from '../../templater';
import { authTmpl } from './auth.tmpl';
import SignIn from './modules/signIn';
import SignUp from './modules/signUp';
import { compile } from '../../utils/compile';
import Block from '../../utils/block';

//Временная замена роутингу

export class Auth extends Block {
  constructor(props) {
    super('div', { ...props });
  }
  render(): DocumentFragment {
    // window.addEventListener('hashchange', () => {
    //   const { hash } = window.location;
    //   if (hash.includes('signin')) {
    //     const auth = document.querySelector('.auth');
    //     const sighUp = document.querySelector('.sign-up');
    //     const sighIn = document.querySelector('.sign-in');
    //     sighUp?.remove();
    //     if (!sighIn) {
    //       auth?.appendChild(new SignIn().getContent());
    //     }
    //   }
    //   if (hash.includes('signup')) {
    //     const auth = document.querySelector('.auth');
    //     const sighIn = document.querySelector('.sign-in');
    //     const sighUp = document.querySelector('.sign-up');
    //     sighIn?.remove();
    //     if (!sighUp) {
    //       auth?.appendChild(new SignUp().getContent());
    //     }
    //   }
    // });

    return compile(templater, authTmpl, { ...this.props });
  }
}
