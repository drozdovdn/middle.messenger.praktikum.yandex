import './settinps.less';
import { InputProfile } from '@components/inputProfile/inputProfile';
import { templater } from '../../../../templater';
import { settingsTmpl } from './settings.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import Input from '@components/input';
import { isEmail, isLogin, isName, isPhone } from '@utils/validations';
import { getUserData } from '../../../../actions/user';

//Локальные данные Settings
export let localData: Record<string, any> = {
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
};
export class SettingsProfile extends Block {
  constructor() {
    super({ tagName: 'section', data: { className: ['settings'] } });
  }

  onFocus(e?: Event) {
    const target = e?.target as HTMLInputElement;
    if (target.classList.contains('input-error-settings')) {
      target.classList.remove('input-error-settings');
    }
  }

  onBlur(e?: Event) {
    const target = e?.target as HTMLInputElement;
    if (localData[target.name] === '') {
      target.classList.add('input-error-settings');
    }
  }

  render(): DocumentFragment {
    const user = getUserData();
    if (user) {
      localData = { ...localData, ...user };
    }
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
              value: user?.email,
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  localData = {
                    ...localData,
                    [target.name]: isEmail(target.value),
                  };
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: user?.login,
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  localData = {
                    ...localData,
                    [target.name]: isLogin(target.value),
                  };
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: user?.first_name,
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  localData = {
                    ...localData,
                    [target.name]: isName(target.value),
                  };
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: user?.second_name,
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  localData = {
                    ...localData,
                    [target.name]: isName(target.value),
                  };
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: user?.display_name,
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  localData = {
                    ...localData,
                    [target.name]: isName(target.value),
                  };
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
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
              value: user?.phone,
              events: {
                change: (e?: Event) => {
                  const target = e?.target as HTMLInputElement;
                  localData = {
                    ...localData,
                    [target.name]: isPhone(target.value),
                  };
                },
                focus: (e?: Event) => this.onFocus(e),
                blur: (e?: Event) => this.onBlur(e),
              },
            }),
          }),
        },
      ],
    };
    return compile(templater, settingsTmpl, settingsContext);
  }
}
