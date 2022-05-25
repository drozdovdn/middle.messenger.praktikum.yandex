import { connect } from '../../store/connect';
import { Chat } from './chat';
import { EVENT_UPDATE } from '../../store/store';

export default connect(
  Chat,
  (state) => {
    console.log('state', state);
    return { data_list: state?.chat };
  },
  EVENT_UPDATE.CHAT
);
