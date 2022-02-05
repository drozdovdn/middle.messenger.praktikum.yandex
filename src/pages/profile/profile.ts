import './profile.less';
import SettingsProfile from './modules/settings';
import { templater } from '../../templater';
import { profileTmpl } from './profile.tmpl';
import Avatar from './modules/avatar';
import BackPanel from './modules/backPanel';
import Control from './modules/control';
import Button from '../../components/button';
import ChangePassword from './modules/changePassword';
import { PageProps } from '../../models';
import AddAvatarModal from '../../features/addAvatarModal';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

export class Profile extends Block {
  constructor() {
    super('section', { className: ['profile'] });
  }

  render(): DocumentFragment {
    const profileContext = {
      backPanel: new BackPanel(),
      avatar: new Avatar(),
      settings: new SettingsProfile(),
      control: new Control(),
    };

    // const changeButton: HTMLButtonElement = document.querySelector(
    //   '.item-control__change-data'
    // );
    // const controlBlock: HTMLElement = document.querySelector('.control');
    // const profileControl: HTMLElement =
    //   document.querySelector('.profile__control');
    // const inputSettings: NodeListOf<HTMLInputElement> =
    //   document.querySelectorAll('.profile__input');
    //
    // changeButton.onclick = () => {
    //   controlBlock.classList.add('hidden');
    //   inputSettings.forEach((item) => item.removeAttribute('disabled'));
    //   const buttton = new Button({
    //     name: 'Сохранить',
    //     className: 'profile__save-button',
    //   });
    //   profileControl.appendChild(buttton.getContent());
    // };
    //
    // const changePasswordButton: HTMLButtonElement = document.querySelector(
    //   '.item-control__change-password'
    // );
    // const profileSettings: HTMLElement =
    //   document.querySelector('.profile__settings');
    // const settingsBlock: HTMLElement = document.querySelector('.settings');
    //
    // changePasswordButton.onclick = () => {
    //   controlBlock.classList.add('hidden');
    //   settingsBlock.classList.add('hidden');
    //   const changePanel = new ChangePassword();
    //   const button = new Button({
    //     name: 'Сохранить',
    //     className: 'profile__save-button',
    //   });
    //   profileSettings.appendChild(changePanel.getContent());
    //   profileControl.appendChild(button.getContent());
    // };

    return compile(templater, profileTmpl, profileContext);
  }
}
