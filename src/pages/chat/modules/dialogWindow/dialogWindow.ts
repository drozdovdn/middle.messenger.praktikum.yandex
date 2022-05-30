import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { dialogWindowTmpl } from './dialogWindow.tmpl';
import { Header } from '../header/header';
import ChatDialog from '../chatDialog';
import ControlChat from '../controlChat';
import Block from '../../../../utils/block';
import { createSocketCanal } from '../../../../api/api-settings';
import DialogMessage from "../dialogMessage";
import Message from "../message";
import {clearMessage, getToken, setMessage} from "../../../../actions/chat";
import {DataPropsItemChats} from "../../subComponents/itemChat/itemChat";
import itemChat from "../../subComponents/itemChat";

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
        setMessage(JSON.parse(event.data))
        console.log('Получены данные', JSON.parse(event.data));
      });
    };

    if (this.props?.data_socket?.token) {
      const { data_socket, user } = this.props;

      if (data_socket?.token && this.token !== data_socket?.token) {
        if (this.soket) {
          clearMessage()
          this.soket.close();
          this.soket = null
        }

        this.soket?.addEventListener('close', () => {
          console.log('Соединение закрыто readyState', this.soket.readyState);
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
          this.soket.addEventListener('open', openSoket(this.soket));
        });

        this.token = data_socket?.token;
        // console.log('AAAA', this.soket);
        if (!this.soket) {
          // console.log('open 1');
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
      body: new DialogMessage({data_message: data.data_message}),
      controlChat: new ControlChat(data),
    });
  } else {
    return '<span>Выбериите чат чтобы отправить сообщение</span>';
  }
}

