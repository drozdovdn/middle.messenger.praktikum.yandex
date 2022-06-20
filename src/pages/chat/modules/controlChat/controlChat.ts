import './controlChat.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { controlChatTmpl } from './controlChat.tmpl';
import ButtonSettings from '../../subComponents/buttonSettings';
import InputMessage from '../inputMessage';
import Input from '@components/input';
import Modal from '@components/modal';
import ModalSettings from '../../subComponents/modalSettings';
import ItemButtonSettings from '../../subComponents/itemButtonSettins';
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
        click: (e: any) => {
          if (e?.srcElement?.classList?.value === 'modal-bottom') {
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

type PropsData = {
  data_socket: DataSocketProps;
  user: UserProps;
};

export class ControlChat extends Block {
  message: string;
  constructor(props?: PropsData) {
    super({ tagName: 'div', data: { ...props, className: ['control-chat'] } });
    this.message = '';
  }

  render(): DocumentFragment {
    const input = new Input({
      className: ['input--message'],
      placeholder: 'Сообщение',
      name: 'message',
      type: 'text',
      events: {
        change: (e) => {
          const target = e?.target as HTMLInputElement;
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
              this.props?.activeSoket?.send(JSON.stringify({ content: this.message, type: 'message' }));
              const input: HTMLInputElement | null = document.querySelector('.input--message');
              if (input) {
                input.value = '';
                this.message = '';
              }
            }
          },
        },
      }),
    };

    return compile(templater, controlChatTmpl, controlChatContext);
  }
}
