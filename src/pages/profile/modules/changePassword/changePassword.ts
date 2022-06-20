import './changePassword.less';
import InputProfile from '@components/inputProfile';
import { templater } from '../../../../templater';
import { changePasswordTmpl } from './changePassword.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Input from '@components/input';

import { isPassword } from '../../../../utils/validations';

export let passwordLocalData: Record<string, any> = {
  oldPassword: '',
  newPassword: '',
  repeatNewPassword: '',
};

export class ChangePassword extends Block {
  constructor() {
    super({ tagName: 'section', data: { className: ['change-password'] } });
  }

  onFocus(e?: Event) {
    const target = e?.target as HTMLInputElement;
    if (target.classList.contains('input-error-settings')) {
      target.classList.remove('input-error-settings');
    }
  }

  onBlur(e?: Event) {
    const target = e?.target as HTMLInputElement;
    if (passwordLocalData[target.name] === '') {
      target.classList.add('input-error-settings');
    }
  }

  render(): DocumentFragment {
    const changePasswordContext = {
      data: [
        {
          inputProfile: new InputProfile({
            label: 'Старый пароль',
            input: new Input({
              className: ['profile__input'],
              name: 'oldPassword',
              value: passwordLocalData.oldPassword,
              type: 'password',
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  const isValidValue = isPassword(target.value);
                  if (isValidValue) {
                    passwordLocalData = {
                      ...passwordLocalData,
                      [target.name]: isValidValue,
                    };
                  }
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: passwordLocalData.newPassword,
              type: 'password',
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  const isValidValue = isPassword(target.value);
                  if (isValidValue) {
                    passwordLocalData = {
                      ...passwordLocalData,
                      [target.name]: isValidValue,
                    };
                  }
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: passwordLocalData.repeatNewPassword,
              type: 'password',
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  const { newPassword } = passwordLocalData;
                  const isValudValue = isPassword(target.value);
                  if (isValudValue) {
                    if (newPassword === target.value) {
                      passwordLocalData = {
                        ...passwordLocalData,
                        [target.name]: isValudValue,
                      };
                    }
                  }
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
              },
            }),
          }),
        },
      ],
    };

    return compile(templater, changePasswordTmpl, changePasswordContext);
  }
}
