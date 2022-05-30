import './dialogWindow.less';
import { DialogWindow } from './dialogWindow';
import { connect } from '../../../../store/connect';
import { EVENT_UPDATE } from '../../../../store/store';

export default connect(
  DialogWindow,
  (s) => {
    return {
      data_socket: s.chat?.data_socket,
      user: s.user,
      data_message: s.chat?.messages
    };
  },
  EVENT_UPDATE.DIALOG_WINDOW
);
