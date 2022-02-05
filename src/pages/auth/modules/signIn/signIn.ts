import '../form.less';
import { formTmpl } from '../form.tmpl';
import Input from '../../../../components/input';
import { templater } from '../../../../templater';
import Title from '../../../../components/title';
import Button from '../../../../components/button';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class SignIn extends Block {
  constructor() {
    super('form', { className: ['form', 'sign-in'] });
  }

  render(): DocumentFragment {
    const title = new Title({ title: 'Вход', className: [] });

    const autButton = new Button({
      name: 'Авторизация',
      className: ['sign-in__button'],
      events: {
        click: (e) => {
          e.preventDefault();
          console.log('click auth');
        },
      },
    });

    const inputLogin = new Input({
      label: 'Логин',
      type: 'text',
      name: 'login',
    });
    const passwordLogin = new Input({
      label: 'Пароль',
      type: 'password',
      name: 'password',
    });

    const signInContext = {
      title: title,
      data: [
        {
          input: inputLogin,
        },
        {
          input: passwordLogin,
        },
      ],
      button: autButton,
      link: {
        title: 'Нет аккаунта?',
        href: '#auth#signup',
      },
    };

    const content = compile(templater, formTmpl, signInContext);
    return content;
  }
}
