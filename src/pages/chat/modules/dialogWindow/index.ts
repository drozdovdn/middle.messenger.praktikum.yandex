import './dialogWindow.less';
import { DialogWindow } from './dialogWindow';
import { connect } from '../../../../store/connect';
import { EVENT_UPDATE } from '../../../../store/store';
import Block from '../../../../utils/block';

export default connect(
  DialogWindow as typeof Block,
  (s) => {
    return {
      data_socket: s.chat?.data_socket,
      user: s.user,
      data_message: s?.messages,
    };
  },
  EVENT_UPDATE.DIALOG_WINDOW
);
