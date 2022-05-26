import { connect } from '../../store/connect';
import { Chat } from './chat';
import { EVENT_UPDATE } from '../../store/store';

export default connect(
  Chat,
  (state) => {
    return { data_list: state.chat.data_list };
  },
  EVENT_UPDATE.CHAT
);
