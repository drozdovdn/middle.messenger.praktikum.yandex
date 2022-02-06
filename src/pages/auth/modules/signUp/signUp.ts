import '../form.less';
import { formTmpl } from '../form.tmpl';
import Title from '../../../../components/title';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import { templater } from '../../../../templater';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class SignUp extends Block {
  constructor() {
    super('form', { className: ['form', 'sign-up'] });
  }

  render(): DocumentFragment {
    const signUpContext = {
      title: new Title({ title: 'Регистрация', className: [] }),
      data: [
        {
          input: new Input({ label: 'Почта', type: 'text', name: 'email' }),
        },
        {
          input: new Input({ label: 'Логин', type: 'text', name: 'login' }),
        },
        {
          input: new Input({ label: 'Имя', type: 'text', name: 'first_name' }),
        },
        {
          input: new Input({ label: 'Фамилия', type: 'text', name: 'second_name' }),
        },
        {
          input: new Input({ label: 'Телефон', type: 'text', name: 'phone' }),
        },
        {
          input: new Input({ label: 'Пароль', type: 'password', name: 'password' }),
        },
        {
          input: new Input({ label: 'Пароль (ещё раз)', type: 'password', name: 'repeat_password' }),
        },
      ],
      button: new Button({ name: 'Зарегистрироваться', className: ['sign-up__button'] }),
      link: {
        title: 'Войти',
        href: '#auth#signin',
      },
    };

    return compile(templater, formTmpl, signUpContext);
  }
}
