import './control.less';
import ItemControl from '../../../../components/itemControl';
import { templater } from '../../../../templater';
import { controlTmpl } from './control.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Button from '../../../../components/button';
import ChangePassword from '../changePassword';
import { localData } from '../settings/settings';
import { changeUserData, changeUserPassword, getUserData } from '../../../../actions/user';
import { passwordLocalData } from '../changePassword/changePassword';
import { logoutUser } from '../../../../actions/auth';

export class Control extends Block {
  constructor() {
    super({ tagName: 'section', data: { className: ['control'] } });
  }

  changeData() {
    const controlBlock: HTMLElement = document.querySelector('.control');
    const inputSettings: NodeListOf<HTMLInputElement> = document.querySelectorAll('.profile__input');
    const profileControl: HTMLElement = document.querySelector('.profile__control');
    const user = getUserData();
    controlBlock.classList.add('hidden');
    inputSettings.forEach((item) => item.removeAttribute('disabled'));
    const button = new Button({
      name: 'Сохранить',
      className: ['profile__save-button'],
      events: {
        click: (e) => {
          const target = e!.target as HTMLButtonElement;
          if (Object.values(localData).includes('')) {
            throw Error('Поля не валидны');
          } else {
            const data = Object.keys(localData).reduce((acc, key) => {
              if (localData[key]?.length) {
                return { ...acc, [key]: localData[key] };
              } else {
                return acc;
              }
            }, {});
            const userData = { ...user, ...data };
            changeUserData({
              first_name: userData.first_name,
              second_name: userData.second_name,
              display_name: userData.display_name,
              login: userData.login,
              email: userData.email,
              phone: userData.phone,
            });
            controlBlock.classList.remove('hidden');
            inputSettings.forEach((item) => item.setAttribute('disabled', 'true'));
            target.classList.add('hidden');
          }
        },
      },
    });
    profileControl.appendChild(button.getContent());
  }

  changePassword() {
    const controlBlock: HTMLElement = document.querySelector('.control');
    const settingsBlock: HTMLElement = document.querySelector('.settings');
    const profileControl: HTMLElement = document.querySelector('.profile__control');
    const profileSettings: HTMLElement = document.querySelector('.profile__settings');

    controlBlock.classList.add('hidden');
    settingsBlock.classList.add('hidden');
    const changePanel = new ChangePassword();
    const button = new Button({
      name: 'Сохранить',
      className: ['profile__save-button'],
      events: {
        click: (e) => {
          if (Object.values(passwordLocalData).includes('')) {
            throw Error('Поля не валидны');
          } else {
            console.log(passwordLocalData);
            changeUserPassword(passwordLocalData);
            controlBlock.classList.remove('hidden');
            settingsBlock.classList.remove('hidden');
          }
        },
      },
    });
    profileSettings.appendChild(changePanel.getContent());
    profileControl.appendChild(button.getContent());
  }

  render(): DocumentFragment {
    const controlContext = {
      data: [
        {
          item: new ItemControl({
            title: 'Изменить данные',
            className: ['item-control__change-data'],
            events: {
              click: () => this.changeData(),
            },
          }),
        },
        {
          item: new ItemControl({
            title: 'Изменить пароль',
            className: ['item-control__change-password'],
            events: {
              click: () => this.changePassword(),
            },
          }),
        },
        {
          item: new ItemControl({
            title: 'Выйти',
            className: ['item-control_red'],
            events: {
              click: () => {
                logoutUser();
              },
            },
          }),
        },
      ],
    };

    return compile(templater, controlTmpl, controlContext);
  }
}
