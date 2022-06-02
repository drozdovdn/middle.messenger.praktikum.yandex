import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { dialogWindowTmpl } from './dialogWindow.tmpl';
import { Header } from '../header/header';
import ChatDialog from '../chatDialog';
import ControlChat from '../controlChat';
import Block from '../../../../utils/block';
import { createSocketCanal } from '../../../../api/api-settings';
import DialogMessage from '../dialogMessage';
import { clearMessage, setMessage } from '../../../../actions/chat';

export class DialogWindow extends Block {
  constructor(props: any) {
    super({ tagName: 'div', data: { ...props, className: ['dialog_window'] } });
  }

  render(): DocumentFragment {
    console.log('DIALOD', this.props);
    window.addEventListener('unload', () => {
      this.props._soket.close();
    });

    const openSoket = (soket: any) => () => {
      soket.send(
        JSON.stringify({
          content: '0',
          type: 'get old',
        })
      );

      console.log('soket соедтнение открыто', soket);
      this.props._soket = soket;
      this.props._soket.addEventListener('message', (event) => {
        console.log('event.data', event.data);
        setMessage(JSON.parse(event.data));
        console.log('Получены данные', JSON.parse(event.data));
      });
    };

    if (this.props?.data_socket?.token) {
      const { data_socket, user } = this.props;

      if (data_socket?.token && this.props._token !== data_socket?.token) {
        if (this.props._soket) {
          console.log(this.props._soket);
          this.props._soket.close();
        }

        this.props._soket?.addEventListener('close', () => {
          console.log('Соединение закрыто readyState');
          this.props._soket = null;
          clearMessage();
          this.props._soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
          this.props._soket.addEventListener('open', openSoket(this.props._soket));
        });

        this.props._token = data_socket?.token;
        // console.log('AAAA', this.soket);
        if (!this.props._soket) {
          // console.log('open 1');
          console.log('OPEN', this.props._soket);
          this.props._soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
          this.props._soket.addEventListener('open', openSoket(this.props._soket));
        }
      }
    }

    return compile(templater, dialogWindowTmpl, {
      dialog: this.props?.data_socket?.token ? dialogWindows({ ...this.props, activeSoket: this.props._soket }) : '',
    });
  }
}

function dialogWindows(data: any) {
  if (data.data_socket) {
    const { data_socket } = data;
    return new ChatDialog({
      header: new Header({ title: data_socket.title, src: data_socket.avatar }),
      body: new DialogMessage({ data_message: data.data_message }),
      controlChat: new ControlChat(data),
    });
  } else {
    return '<span>Выбериите чат чтобы отправить сообщение</span>';
  }
}
