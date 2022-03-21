import './changePassword.less';
import InputProfile from '../../../../components/inputProfile';
import { templater } from '../../../../templater';
import { changePasswordTmpl } from './changePassword.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '../../../../components/input';
import Store from '../../../../store';
import { isPassword } from '../../../../utils/validations';

export class ChangePassword extends Block {
  constructor() {
    super('section', { className: ['change-password'] });
  }

  onFocus(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.classList.contains('input-error-settings')) {
      target.classList.remove('input-error-settings');
    }
  }

  onBlur(e: Event) {
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
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isPassword(target.value);
                  if (isValidValue) {
                    if (Store.oldData.oldPassword === isValidValue) {
                      Store.changePassword = {
                        ...Store.changePassword,
                        [target.name]: isValidValue,
                      };
                    }
                  }
                },
                focus: (e: Event) => this.onFocus(e),
                blur: (e: Event) => this.onBlur(e),
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
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isPassword(target.value);
                  if (isValidValue) {
                    Store.changePassword = {
                      ...Store.changePassword,
                      [target.name]: isValidValue,
                    };
                  }
                },
                focus: (e: Event) => this.onFocus(e),
                blur: (e: Event) => this.onBlur(e),
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
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const { newPassword } = Store.changePassword;
                  const isValudValue = isPassword(target.value);
                  if (isValudValue) {
                    if (newPassword === target.value) {
                      Store.changePassword = {
                        ...Store.changePassword,
                        [target.name]: isValudValue,
                      };
                    }
                  }
                },
                focus: (e: Event) => this.onFocus(e),
                blur: (e: Event) => this.onBlur(e),
              },
            }),
          }),
        },
      ],
    };

    return compile(templater, changePasswordTmpl, changePasswordContext);
  }
}
