import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { dialogWindowTmpl } from './dialogWindow.tmpl';
import { Header } from '../header/header';
import ChatDialog from '../chatDialog';
import ControlChat from '../controlChat';
import Block from '../../../../utils/block';

export class DialogWindow extends Block {
  constructor(props: any) {
    super('div', { ...props, className: ['dialog_window'] });
  }

  render(): DocumentFragment {
    console.log('DIALOG', this.props);
    return compile(templater, dialogWindowTmpl, {
      dialog: this.props?.data_socket?.token ? dialogWindows(this.props) : '',
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
