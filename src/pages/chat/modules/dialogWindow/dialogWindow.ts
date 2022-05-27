import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { dialogWindowTmpl } from './dialogWindow.tmpl';
import { Header } from '../header/header';
import ChatDialog from '../chatDialog';
import ControlChat from '../controlChat';
import Block from '../../../../utils/block';
import { createSocketCanal } from '../../../../api/api-settings';

export class DialogWindow extends Block {
  constructor(props: any) {
    super('div', { ...props, className: ['dialog_window'] });
  }

  render(): DocumentFragment {
    console.log('DIALOG');
    return compile(templater, dialogWindowTmpl, {
      dialog: dialogWindows(this.props),
    });
  }
}

function dialogWindows(data: any) {
  if (data.data_socket) {
    const { data_socket, user } = data;

    if (data_socket?.token) {
      const socket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);

      socket?.addEventListener('open', () => {
        console.log('Соединение установлено!');
        // this.socket.send(JSON.stringify({ content: 'Мое первое сообщение', type: 'message' }));
      });
    }
    return new ChatDialog({
      header: new Header({ title: data_socket.title, src: data_socket.avatar }),
      controlChat: new ControlChat(),
    });
  } else {
    return '<span>Выбериите чат чтобы отправить сообщение</span>';
  }
}
