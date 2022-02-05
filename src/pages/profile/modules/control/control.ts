import './control.less';
import ItemControl from '../../../../components/itemControl';
import { templater } from '../../../../templater';
import { controlTmpl } from './control.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import Button from '../../../../components/button';
import ChangePassword from '../changePassword';

export class Control extends Block {
  constructor() {
    super('section', { className: ['control'] });
  }

  changeData() {
    const controlBlock: HTMLElement = document.querySelector('.control');
    const inputSettings: NodeListOf<HTMLInputElement> = document.querySelectorAll('.profile__input');
    const profileControl: HTMLElement = document.querySelector('.profile__control');
    controlBlock.classList.add('hidden');
    inputSettings.forEach((item) => item.removeAttribute('disabled'));
    const button = new Button({
      name: 'Сохранить',
      className: ['profile__save-button'],
      events: {
        click: (e) => {
          const target = e.target as HTMLButtonElement;
          controlBlock.classList.remove('hidden');
          inputSettings.forEach((item) => item.setAttribute('disabled', 'true'));
          target.classList.add('hidden');
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
          const target = e.target as HTMLButtonElement;
          controlBlock.classList.remove('hidden');
          settingsBlock.classList.remove('hidden');
          const changePassword: HTMLElement = document.querySelector('.change-password');
          changePassword.remove();
          target.classList.add('hidden');
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
          }),
        },
      ],
    };

    return compile(templater, controlTmpl, controlContext);
  }
}
