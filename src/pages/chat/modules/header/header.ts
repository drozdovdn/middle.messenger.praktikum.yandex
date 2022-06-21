import './header.less';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import { templater } from '../../../../templater';
import { headerTmpl } from './header.tmpl';
import ButtonSettings from '../../subComponents/buttonSettings';
import Modal from '@components/modal';
import ModalSettings from '../../subComponents/modalSettings';
import ItemButtonSettings from '../../subComponents/itemButtonSettins';
import { AddDelete } from '../addDelete/addDelete';
import Input from '@components/input';
import InputForm from '@components/inputForm';
import Button from '@components/button';
import { isLogin } from '@utils/validations';
import { addUserInChat, deleteUserInChat } from '../../../../actions/chat';

const showModalAddUser = () => {
  const modal = document.querySelector('.add-user');
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    let login = '';

    const onFocus = (e: any) => {
      const target = e.target as HTMLInputElement;
      if (target.classList.contains('input-error')) {
        target.classList.remove('input-error');
      }
    };

    const onBlur = (e: any) => {
      const target = e.target as HTMLInputElement;
      if (login === '') {
        target.classList.add('input-error');
      }
    };

    const addModalUser = new AddDelete({
      title: 'Добавить пользователя',
      className: ['add-user'],
      input: new InputForm({
        label: 'Логин',
        input: new Input({
          type: 'text',
          name: 'login',
          events: {
            change: (e) => {
              const target = e!.target as HTMLInputElement;
              login = isLogin(target.value);
            },
            focus: (e) => onFocus(e),
            blur: (e) => onBlur(e),
          },
        }),
      }),
      button: new Button({
        name: 'Добавить',
        className: [],
        events: {
          click: (e: any) => {
            if (e?.srcElement?.classList?.value === 'modal-top') {
              e?.target?.classList?.add('hidden-modal');
            }
            addUserInChat({ login });
          },
        },
      }),
      events: {
        click: (e: any) => {
          if (e?.srcElement?.classList?.value === 'add-user') {
            e?.target?.classList?.add('hidden-modal');
          }
        },
      },
    });
    const root: HTMLDivElement | null = document.querySelector('.root');
    if (root) {
      root.appendChild(addModalUser.getContent() as Node);
    }
  }
};

const showModalDeleteUser = () => {
  const modal = document.querySelector('.delete-user');
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    let login = '';

    const onFocus = (e: any) => {
      const target = e.target as HTMLInputElement;
      if (target.classList.contains('input-error')) {
        target.classList.remove('input-error');
      }
    };

    const onBlur = (e: any) => {
      const target = e.target as HTMLInputElement;
      if (login === '') {
        target.classList.add('input-error');
      }
    };

    const addModalUser = new AddDelete({
      title: 'Удалить пользователя',
      className: ['delete-user'],
      input: new InputForm({
        label: 'Логин',
        input: new Input({
          type: 'text',
          name: 'login',
          events: {
            change: (e) => {
              const target = e!.target as HTMLInputElement;
              login = isLogin(target.value);
            },
            focus: (e) => onFocus(e),
            blur: (e) => onBlur(e),
          },
        }),
      }),
      button: new Button({
        name: 'Удалить',
        className: [],
        events: {
          click: (e: any) => {
            if (e?.srcElement?.classList?.value === 'modal-top') {
              e?.target?.classList?.add('hidden-modal');
            }
            deleteUserInChat({ login });
          },
        },
      }),
      events: {
        click: (e: any) => {
          if (e?.srcElement?.classList?.value === 'delete-user') {
            e?.target?.classList?.add('hidden-modal');
          }
        },
      },
    });
    const root: HTMLDivElement | null = document.querySelector('.root');
    if (root) {
      root.appendChild(addModalUser.getContent() as Node);
    }
  }
};

const showModalSettings = () => {
  const modal = document.querySelector('.modal-top');
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    const contentModal = new Modal({
      className: ['modal-top'],
      content: new ModalSettings({
        className: ['modal-settings__top'],
        data: [
          {
            item: new ItemButtonSettings({
              title: 'Довить пользователя',
              src: './add_user.svg',
              events: {
                click: (e) => {
                  showModalAddUser();
                  const modal = document.querySelector('.modal-top');
                  if (modal) {
                    modal.classList.add('hidden-modal');
                  }
                  console.log('Добавить пользователя', e);
                },
              },
            }),
          },
          {
            item: new ItemButtonSettings({
              title: 'Удалить пользователя',
              src: './add_user.svg',
              events: {
                click: () => {
                  showModalDeleteUser();
                  const modal = document.querySelector('.modal-top');
                  if (modal) {
                    modal.classList.add('hidden-modal');
                  }
                },
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
        click: (e: any) => {
          if (e?.srcElement?.classList?.value === 'modal-top') {
            e?.target?.classList?.add('hidden-modal');
          }
        },
      },
    });
    const root: HTMLDivElement | null = document.querySelector('.root');
    if (root) {
      root.appendChild(contentModal.getContent() as Node);
    }
  }
};

export class Header extends Block {
  constructor(props: Record<string, any>) {
    super({ tagName: 'div', data: { ...props, className: ['header'] } });
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
