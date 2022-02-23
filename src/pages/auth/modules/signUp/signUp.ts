import '../form.less';
import { formTmpl } from '../form.tmpl';
import Title from '../../../../components/title';
import InputForm from '../../../../components/inputForm';
import Button from '../../../../components/button';
import { templater } from '../../../../templater';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '../../../../components/input';
import { isEmail, isLogin, isName, isPassword, isPhone } from '../../../../utils/validations';
import ButtonLink from '../../../../components/buttonLink';
import { router } from '../../../../index';
import { RoutePath } from '../../../../utils/router/route-path';

export class SignUp extends Block {
  inputs: Record<string, string>;
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
                  const target = e!.target as HTMLInputElement;
                  this.inputs = {
                    ...this.inputs,
                    email: isEmail(target.value),
                  };
                },
                focus: (e) => this.onFocus(e!),
                blur: (e) => this.onBlur(e!),
              },
            }),
          }),
        },
        {
          input: new InputForm({
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
          }),
        },
        {
          input: new InputForm({
            label: 'Имя',
            input: new Input({
              type: 'text',
              name: 'first_name',
              events: {
                change: (e) => {
                  const target = e!.target as HTMLInputElement;
                  this.inputs = {
                    ...this.inputs,
                    first_name: isName(target.value),
                  };
                },
                focus: (e) => this.onFocus(e!),
                blur: (e) => this.onBlur(e!),
              },
            }),
          }),
        },
        {
          input: new InputForm({
            label: 'Фамилия',
            input: new Input({
              type: 'text',
              name: 'second_name',
              events: {
                change: (e) => {
                  const target = e!.target as HTMLInputElement;
                  this.inputs = {
                    ...this.inputs,
                    second_name: isName(target.value),
                  };
                },
                focus: (e) => this.onFocus(e!),
                blur: (e) => this.onBlur(e!),
              },
            }),
          }),
        },
        {
          input: new InputForm({
            label: 'Телефон',
            input: new Input({
              type: 'text',
              name: 'phone',
              events: {
                change: (e) => {
                  const target = e!.target as HTMLInputElement;
                  this.inputs = {
                    ...this.inputs,
                    phone: isPhone(target.value),
                  };
                },
                focus: (e) => this.onFocus(e!),
                blur: (e) => this.onBlur(e!),
              },
            }),
          }),
        },
        {
          input: new InputForm({
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
          }),
        },
        {
          input: new InputForm({
            label: 'Пароль (ещё раз)',
            input: new Input({
              type: 'password',
              name: 'repeat_password',
              events: {
                change: (e) => {
                  const target = e!.target as HTMLInputElement;
                  if (this.inputs.password === target.value) {
                    this.inputs = {
                      ...this.inputs,
                      repeat_password: isPassword(target.value),
                    };
                  } else {
                    this.inputs = {
                      ...this.inputs,
                      repeat_password: '',
                    };
                  }
                },
                focus: (e) => this.onFocus(e!),
                blur: (e) => this.onBlur(e!),
              },
            }),
          }),
        },
      ],
      button: new Button({
        name: 'Зарегистрироваться',
        className: ['sign-up__button'],
        events: {
          click: (e) => {
            e!.preventDefault();
            if (Object.values(this.inputs).includes('')) {
              console.log('Поля не заполенны');
            } else {
              console.log(this.inputs);
            }
          },
        },
      }),
      link: new ButtonLink({
        name: 'Войти',
        className: ['form__link'],
        events: {
          click: () => router.go(RoutePath.SIGN_IN),
        },
      }),
    };

    return compile(templater, formTmpl, signUpContext);
  }
}
