import './settinps.less';
import { InputProfile } from '../../../../components/inputProfile/inputProfile';
import { templater } from '../../../../templater';
import { settingsTmpl } from './settings.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { Store } from '../../../../store';
import Input from '../../../../components/input';
import { isEmail, isLogin, isName, isPhone } from '../../../../utils/validations';

export class SettingsProfile extends Block {
  constructor() {
    super('section', { className: ['settings'] });
  }

  onFocus(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.classList.contains('input-error-settings')) {
      target.classList.remove('input-error-settings');
    }
  }

  onBlur(e: Event) {
    const target = e.target as HTMLInputElement;
    if (Store.inputSettings[target.name] === '') {
      target.classList.add('input-error-settings');
    }
  }

  render(): DocumentFragment {
    const { email, login, first_name, second_name, display_name, phone } = Store.inputSettings;

    const settingsContext = {
      data: [
        {
          input: new InputProfile({
            label: 'Почта',
            input: new Input({
              disabled: true,
              type: 'text',
              className: ['profile__input'],
              name: 'email',
              value: email,
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isEmail(target.value);
                  if (isValidValue) {
                    Store.inputSettings = {
                      ...Store.inputSettings,
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
          input: new InputProfile({
            label: 'Логин',
            input: new Input({
              disabled: true,
              type: 'text',
              className: ['profile__input'],
              name: 'login',
              value: login,
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isLogin(target.value);
                  if (isValidValue) {
                    Store.inputSettings = {
                      ...Store.inputSettings,
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
          input: new InputProfile({
            label: 'Имя',
            input: new Input({
              disabled: true,
              type: 'text',
              className: ['profile__input'],
              name: 'first_name',
              value: first_name,
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isName(target.value);
                  if (isValidValue) {
                    Store.inputSettings = {
                      ...Store.inputSettings,
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
          input: new InputProfile({
            label: 'Фамилия',
            input: new Input({
              disabled: true,
              type: 'text',
              className: ['profile__input'],
              name: 'second_name',
              value: second_name,
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isName(target.value);
                  if (isValidValue) {
                    Store.inputSettings = {
                      ...Store.inputSettings,
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
          input: new InputProfile({
            label: 'Имя в чате',
            input: new Input({
              disabled: true,
              type: 'text',
              className: ['profile__input'],
              name: 'display_name',
              value: display_name,
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isName(target.value);
                  if (isValidValue) {
                    Store.inputSettings = {
                      ...Store.inputSettings,
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
          input: new InputProfile({
            label: 'Телефон',
            input: new Input({
              disabled: true,
              type: 'text',
              className: ['profile__input'],
              name: 'phone',
              value: phone,
              events: {
                change: (e: Event) => {
                  const target = e.target as HTMLInputElement;
                  const isValidValue = isPhone(target.value);
                  if (isValidValue) {
                    Store.inputSettings = {
                      ...Store.inputSettings,
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
      ],
    };
    return compile(templater, settingsTmpl, settingsContext);
  }
}
