import './controlChat.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { controlChatTmpl } from './controlChat.tmpl';
import ButtonSettings from '../../subComponents/buttonSettings';
import InputMessage from '../inputMessage';
import Input from '../../../../components/input';
import Modal from '../../../../components/modal';
import ModalSettings from '../../subComponents/modalSettings';
import ItemButtonSettings from '../../subComponents/itemButtonSettins';
import { createSocketCanal } from '../../../../api/api-settings';
import { getStore } from '../../../../actions/auth';
import { DataSocketProps, UserProps } from '../../../../store/models';

const showModalSettings = () => {
  const modal = document.querySelector('.modal-bottom');
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    const contentModal = new Modal({
      className: ['modal-bottom'],
      content: new ModalSettings({
        className: ['modal-settings__bottom'],
        data: [
          {
            item: new ItemButtonSettings({
              title: 'Фото или Видео',
              src: './add_foto.svg',
              events: {
                click: () => console.log('Добавить фото или видео'),
              },
            }),
          },
          {
            item: new ItemButtonSettings({
              title: 'Файл',
              src: './add_fille.svg',
              events: {
                click: () => console.log('Добавить файл'),
              },
            }),
          },
          {
            item: new ItemButtonSettings({
              title: 'Локация',
              src: './add_location.svg',
              events: {
                click: () => console.log('Добавить локацию'),
              },
            }),
          },
        ],
      }),
      events: {
        click: (e) => {
          if (e?.srcElement?.classList?.value === 'modal-bottom') {
            e?.target?.classList?.add('hidden-modal');
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

type PropsData = {
  data_socket: DataSocketProps;
  user: UserProps;
};

export class ControlChat extends Block {
  message: string;
  soket: any;
  token: string | null;
  constructor(props?: PropsData) {
    super('div', { ...props, className: ['control-chat'] });
    this.message = '';
    this.soket = null;
    this.token = null;
  }

  render(): DocumentFragment {
    console.log('this.props control', this.props);

    if (this.props?.data_socket?.token) {
      const { data_socket, user } = this.props;
      console.log('SOCKET');
      if (data_socket?.token && this.token !== data_socket?.token) {
        if (this.soket) {
          console.log('CLOSE', this.soket);
          this.soket.close();
          console.log('###', this.soket);
        }
        console.log('&&&&&&&&&&&', this.soket);
        this.soket?.addEventListener('close', () => {
          console.log('Соединение закрыто');
          this.soket = null;
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
        });

        this.token = data_socket?.token;
        if (!this.soket) {
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
        }

        this.soket?.addEventListener('open', () => {
          console.log('Соединение установлено!');
          this.soket.send(JSON.stringify({ content: 'Мое первое сообщение', type: 'message' }));
        });
      } else {
        // if(this.soket) {
        //   this.soket.close()
        //   this.soket = null
        // }
      }
    }

    const input = new Input({
      className: ['input--message'],
      placeholder: 'Сообщение',
      name: 'message',
      type: 'text',
      events: {
        change: (e) => {
          const target = e.target as HTMLInputElement;
          this.message = target.value;
        },
      },
    });

    const controlChatContext = {
      addFiles: new ButtonSettings({
        src: './add_filles.svg',
        events: {
          click: () => showModalSettings(),
        },
      }),
      inputMessage: new InputMessage({ input }),
      sendMessage: new ButtonSettings({
        src: './send_message.svg',
        events: {
          click: () => {
            if (this.message === '') {
              throw Error('Поле не заполненно');
            } else {
              console.log(this.message);
            }
          },
        },
      }),
    };

    return compile(templater, controlChatTmpl, controlChatContext);
  }
}
