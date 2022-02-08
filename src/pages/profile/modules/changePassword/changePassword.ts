import './changePassword.less';
import InputProfile from '../../../../components/inputProfile';
import { templater } from '../../../../templater';
import { changePasswordTmpl } from './changePassword.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '../../../../components/input';
import { Store } from '../../../../store';
import { isPassword } from '../../../../utils/validations';

export class ChangePassword extends Block {
  oldPassword: string;
  constructor() {
    super('section', { className: ['change-password'] });
    this.oldPassword = 'Q123456789'; //Временно, данные старого пароля
  }

  onFocus(e) {
    const target = e.target as HTMLInputElement;
    if (target.classList.contains('input-error-settings')) {
      target.classList.remove('input-error-settings');
    }
  }

  onBlur(e) {
    const target = e.target as HTMLInputElement;
    if (Store.changePassword[target.name] === '') {
      target.classList.add('input-error-settings');
    }
  }

  render(): DocumentFragment {
    const { oldPassword, newPassword, repeatNewPassword } = Store.changePassword;

    const changePasswordContext = {
      data: [
        {
          inputProfile: new InputProfile({
            label: 'Старый пароль',
            input: new Input({
              className: ['profile__input'],
              name: 'oldPassword',
              value: oldPassword,
              type: 'password',
              disabled: false,
              events: {
                change: (e) => {
                  const target = e.target as HTMLInputElement;
                  if (this.oldPassword === target.value) {
                    Store.changePassword = {
                      ...Store.changePassword,
                      [target.name]: isPassword(target.value),
                    };
                  }
                },
                focus: (e) => this.onFocus(e),
                blur: (e) => this.onBlur(e),
              },
            }),
          }),
        },
        {
          inputProfile: new InputProfile({
            label: 'Новый пароль',
            input: new Input({
              className: ['profile__input'],
              name: 'newPassword',
              value: newPassword,
              type: 'password',
              disabled: false,
              events: {
                change: (e) => {
                  const target = e.target as HTMLInputElement;
                  Store.changePassword = {
                    ...Store.changePassword,
                    [target.name]: isPassword(target.value),
                  };
                },
                focus: (e) => this.onFocus(e),
                blur: (e) => this.onBlur(e),
              },
            }),
          }),
        },
        {
          inputProfile: new InputProfile({
            label: 'Повторите новый пароль',
            input: new Input({
              className: ['profile__input'],
              name: 'repeatNewPassword',
              value: repeatNewPassword,
              type: 'password',
              disabled: false,
              events: {
                change: (e) => {
                  const target = e.target as HTMLInputElement;
                  const { newPassword } = Store.changePassword;
                  if (newPassword === target.value) {
                    Store.changePassword = {
                      ...Store.changePassword,
                      [target.name]: isPassword(target.value),
                    };
                  } else {
                    Store.changePassword = {
                      ...Store.changePassword,
                      [target.name]: '',
                    };
                  }
                },
                focus: (e) => this.onFocus(e),
                blur: (e) => this.onBlur(e),
              },
            }),
          }),
        },
      ],
    };

    return compile(templater, changePasswordTmpl, changePasswordContext);
  }
}
