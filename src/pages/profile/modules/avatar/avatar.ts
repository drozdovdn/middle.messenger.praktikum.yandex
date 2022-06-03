import './avatar.less';
import { templater } from '../../../../templater';
import { avatarTmpl } from './avatar.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import ButtonAvatar from '../buttonAvatar';
import AddAvatarModal from '../../../../features/addAvatarModal';
import { getUserData } from '../../../../actions/user';

export class Avatar extends Block {
  constructor() {
    super({ tagName: 'div', data: { className: ['avatar'] } });
  }

  openModal() {
    const profile = document.querySelector('.profile');
    const modal = document.querySelector('.add-avatar-modal');
    if (modal) {
      modal.classList.remove('hidden-modal');
    } else {
      const addAvatar = new AddAvatarModal({
        events: {
          click: (e: any) => {
            if (e?.srcElement?.classList?.value === 'add-avatar-modal') {
              e?.target?.classList?.add('hidden-modal');
              console.log(e);
            }
          },
        },
      }).getContent();

      profile?.appendChild(addAvatar as Node);
    }
  }

  render(): DocumentFragment {
    const user = getUserData();
    let avatar = 'avatar_icon.svg';
    if (user?.avatar) {
      avatar = `https://ya-praktikum.tech/api/v2/resources${user.avatar}`;
    }
    console.log(user?.avatar);
    const button = new ButtonAvatar({
      text: 'Поменять аватар',
      className: [],
      src: avatar,
      events: {
        click: () => this.openModal(),
      },
    });

    const avatarContext = {
      name: user?.first_name,
      button,
    };

    return compile(templater, avatarTmpl, avatarContext);
  }
}
