import { connect } from '../../store/connect';
import { Chat } from './chat';

export default connect(Chat, (state) => state?.chat?.data_list);
