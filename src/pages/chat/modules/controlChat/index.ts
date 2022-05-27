import { ControlChat } from './controlChat';
import { connect } from '../../../../store/connect';
import { EVENT_UPDATE } from '../../../../store/store';

export default ControlChat;

// export default connect(
//   ControlChat,
//   (s) => {
//     return {
//       data_socket: s.chat?.data_socket,
//       user: s.user,
//     };
//   },
//   EVENT_UPDATE.CONTROL_CHAT
// );
