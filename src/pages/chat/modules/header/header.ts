import './header.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { headerTmpl } from './header.tmpl';
import ButtonSettings from '../../subComponents/buttonSettings';
import Modal from '../../../../components/modal';
import ModalSettings from '../../subComponents/modalSettings';
import ItemButtonSettings from '../../subComponents/itemButtonSettins';

const showModalSettings = () => {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    const contentModal = new Modal({
      content: new ModalSettings({
        data: [
          {
            item: new ItemButtonSettings({
              title: 'Довить пользователя',
              src: './add_user.svg',
              events: {
                click: () => console.log('Добавить пользователя'),
              },
            }),
          },
          {
            item: new ItemButtonSettings({
              title: 'Удалить пользователя',
              src: './add_user.svg',
              events: {
                click: () => console.log('Удалить пользователя'),
              },
            }),
          },
          {
            item: new ItemButtonSettings({
              title: 'Удалить чат',
              src: './delete_chat.svg',
              events: {
                click: () => console.log('Удалить чат'),
              },
            }),
          },
        ],
      }),
      events: {
        click: (e) => {
          if (e?.srcElement?.classList?.value === 'modal') {
            e?.target?.classList?.add('hidden-modal');
            console.log(e);
          }
        },
      },
    });
    const root: HTMLDivElement | null = document.querySelector('.root');
    if (root) {
      root.appendChild(contentModal.getContent());
    }
  }
};

export class Header extends Block {
  constructor(props) {
    super('div', { ...props, className: ['header'] });
  }

  render(): DocumentFragment {
    const headerContext = {
      buttonSettings: new ButtonSettings({
        src: './button_settings.svg',
        events: {
          click: () => showModalSettings(),
        },
      }),
    };
    return compile(templater, headerTmpl, { ...headerContext, ...this.props });
  }
}
