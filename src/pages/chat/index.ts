import { connect } from '../../store/connect';
import { Chat } from './chat';

export default connect(Chat, (state) => {
  console.log('state', state)
  state?.chat
});
