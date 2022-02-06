import '../form.less';
import { formTmpl } from '../form.tmpl';
import Title from '../../../../components/title';
import InputForm from '../../../../components/inputForm';
import Button from '../../../../components/button';
import { templater } from '../../../../templater';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '../../../../components/input';

export class SignUp extends Block {
  constructor() {
    super('form', { className: ['form', 'sign-up'] });
  }

  render(): DocumentFragment {
    const signUpContext = {
      title: new Title({ title: 'Регистрация', className: [] }),
      data: [
        {
          input: new InputForm({ label: 'Почта', input: new Input({ type: 'text', name: 'email' }) }),
        },
        {
          input: new InputForm({ label: 'Логин', input: new Input({ type: 'text', name: 'login' }) }),
        },
        {
          input: new InputForm({ label: 'Имя', input: new Input({ type: 'text', name: 'first_name' }) }),
        },
        {
          input: new InputForm({ label: 'Фамилия', input: new Input({ type: 'text', name: 'second_name' }) }),
        },
        {
          input: new InputForm({ label: 'Телефон', input: new Input({ type: 'text', name: 'phone' }) }),
        },
        {
          input: new InputForm({ label: 'Пароль', input: new Input({ type: 'password', name: 'password' }) }),
        },
        {
          input: new InputForm({ label: 'Пароль (ещё раз)', input: new Input({ type: 'password', name: 'repeat_password' }) }),
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
