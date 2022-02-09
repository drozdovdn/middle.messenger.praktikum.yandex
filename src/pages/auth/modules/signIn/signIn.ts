import '../form.less';
import { formTmpl } from '../form.tmpl';
import InputForm from '../../../../components/inputForm';
import { templater } from '../../../../templater';
import Title from '../../../../components/title';
import Button from '../../../../components/button';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '../../../../components/input';
import { isLogin, isPassword } from '../../../../utils/validations';

export class SignIn extends Block {
  inputs: { [key: string]: string };

  constructor() {
    super('form', { className: ['form', 'sign-in'] });
    this.inputs = {
      login: '',
      password: '',
    };
  }

  onFocus(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.classList.contains('input-error')) {
      target.classList.remove('input-error');
    }
  }

  onBlur(e: Event) {
    const target = e.target as HTMLInputElement;
    if (this.inputs[target.name] === '') {
      target.classList.add('input-error');
    }
  }

  render(): DocumentFragment {
    const title = new Title({ title: 'Вход', className: [] });
    const autButton = new Button({
      name: 'Авторизация',
      className: ['sign-in__button'],
      events: {
        click: (e) => {
          e!.preventDefault();
          if (Object.values(this.inputs).includes('')) {
            throw Error('Поля не заполенны');
          } else {
            console.log(this.inputs);
          }
        },
      },
    });

    const inputLogin = new InputForm({
      label: 'Логин',
      input: new Input({
        type: 'text',
        name: 'login',
        events: {
          change: (e) => {
            const target = e!.target as HTMLInputElement;
            this.inputs = {
              ...this.inputs,
              login: isLogin(target.value),
            };
          },
          focus: (e) => this.onFocus(e!),
          blur: (e) => this.onBlur(e!),
        },
      }),
    });
    const passwordLogin = new InputForm({
      label: 'Пароль',
      input: new Input({
        type: 'password',
        name: 'password',
        events: {
          change: (e) => {
            const target = e!.target as HTMLInputElement;
            this.inputs = {
              ...this.inputs,
              password: isPassword(target.value),
            };
          },
          focus: (e) => this.onFocus(e!),
          blur: (e) => this.onBlur(e!),
        },
      }),
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

    return compile(templater, formTmpl, signInContext);
  }
}
