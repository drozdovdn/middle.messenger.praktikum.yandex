import { DialogMessage } from './dialogMessage';
import { connect } from '../../../../store/connect';
import { EVENT_UPDATE } from '../../../../store/store';
import Block from '../../../../utils/block';

export default connect(
  DialogMessage as typeof Block,
  (s) => {
    return { data_message: s?.messages };
  },
  EVENT_UPDATE.MESSAGES
);
