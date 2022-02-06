import '../form.less';
import { formTmpl } from '../form.tmpl';
import Title from '../../../../components/title';
import InputForm from '../../../../components/inputForm';
import Button from '../../../../components/button';
import { templater } from '../../../../templater';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '../../../../components/input';
import { isEmail } from '../../../../utils/validations';

export class SignUp extends Block {
  inputs: { [key: string]: string };
  constructor() {
    super('form', { className: ['form', 'sign-up'] });
    this.inputs = {
      email: '',
      login: '',
      first_name: '',
      second_name: '',
      phone: '',
      password: '',
      repeat_password: '',
    };
  }

  render(): DocumentFragment {
    const signUpContext = {
      title: new Title({ title: 'Регистрация', className: [] }),
      data: [
        {
          input: new InputForm({
            label: 'Почта',
            input: new Input({
              type: 'text',
              name: 'email',
              events: {
                change: (e) => {
                  const target = e.target as HTMLInputElement;
                  if (isEmail(target.value)) {
                    this.inputs = {
                      ...this.inputs,
                      email: target.value,
                    };
                  } else {
                    this.inputs = {
                      ...this.inputs,
                      email: '',
                    };
                  }
                },
                blur: (e) => {
                  const target = e.target as HTMLInputElement;
                  if (this.inputs.email === '') {
                    target.classList.add('input-error');
                  }
                  console.log('blur', this.inputs);
                },
              },
            }),
          }),
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
