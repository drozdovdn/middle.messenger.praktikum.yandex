import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { dialogWindowTmpl } from './dialogWindow.tmpl';
import { Header } from '../header/header';
import ChatDialog from '../chatDialog';
import ControlChat from '../controlChat';
import Block from '../../../../utils/block';
import { createSocketCanal } from '../../../../api/api-settings';

export class DialogWindow extends Block {
  soket: any;
  token: string | null;
  constructor(props: any) {
    super('div', { ...props, className: ['dialog_window'] });
    this.soket = null;
    this.token = null;
  }

  render(): DocumentFragment {
    window.addEventListener('unload', () => {
      this.soket.close();
    });

    const openSoket = (soket: any) => () => {
      console.log('soket соедтнение открыто', soket);
      this.soket = soket;
      this.soket.addEventListener('message', (event) => {
        console.log('Получены данные', event.data);
      });
    };

    if (this.props?.data_socket?.token) {
      const { data_socket, user } = this.props;

      if (data_socket?.token && this.token !== data_socket?.token) {
        if (this.soket) {
          this.soket.close();
        }

        this.soket?.addEventListener('close', () => {
          console.log('Соединение закрыто readyState', this.soket.readyState);
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
          this.soket.addEventListener('open', openSoket(this.soket));
        });

        this.token = data_socket?.token;
        console.log('AAAA', this.soket);
        if (!this.soket) {
          console.log('open 1');
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
          this.soket.addEventListener('open', openSoket(this.soket));
        }
      }
    }

    return compile(templater, dialogWindowTmpl, {
      dialog: this.props?.data_socket?.token ? dialogWindows({ ...this.props, activeSoket: this.soket }) : '',
    });
  }
}

function dialogWindows(data: any) {
  if (data.data_socket) {
    const { data_socket } = data;
    return new ChatDialog({
      header: new Header({ title: data_socket.title, src: data_socket.avatar }),
      controlChat: new ControlChat(data),
    });
  } else {
    return '<span>Выбериите чат чтобы отправить сообщение</span>';
  }
}
