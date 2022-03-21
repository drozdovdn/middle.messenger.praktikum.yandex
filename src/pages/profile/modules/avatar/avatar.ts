import './avatar.less';
import { templater } from '../../../../templater';
import { avatarTmpl } from './avatar.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import ButtonAvatar from '../buttonAvatar';
import AddAvatarModal from '../../../../features/addAvatarModal';

export class Avatar extends Block {
  constructor() {
    super('div', { className: ['avatar'] });
  }

  openModal() {
    const profile = document.querySelector('.profile');
    const modal = document.querySelector('.add-avatar-modal');
    if (modal) {
      modal.classList.remove('hidden-modal');
    } else {
      const addAvatar = new AddAvatarModal({
        events: {
          click: (e) => {
            if (e?.srcElement?.classList?.value === 'add-avatar-modal') {
              e?.target?.classList?.add('hidden-modal');
              console.log(e);
            }
          },
        },
      }).getContent();

      profile.appendChild(addAvatar);
    }
  }

  render(): DocumentFragment {
    const button = new ButtonAvatar({
      text: 'Поменять аватар',
      className: [],
      events: {
        click: () => this.openModal(),
      },
    });

    const avatarContext = {
      name: 'Иван',
      button,
    };

    return compile(templater, avatarTmpl, avatarContext);
  }
}
