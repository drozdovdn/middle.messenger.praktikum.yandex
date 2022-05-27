import './dialogWindow.less';
import { DialogWindow } from './dialogWindow';
import { connect } from '../../../../store/connect';
import { EVENT_UPDATE } from '../../../../store/store';

// export default DialogWindow;
export default connect(
  DialogWindow,
  (s) => {
    console.log({ s });
    return {
      data_socket: s.chat?.data_socket,
      user: s.user,
    };
  },
  EVENT_UPDATE.DIALOG_WINDOW
);
