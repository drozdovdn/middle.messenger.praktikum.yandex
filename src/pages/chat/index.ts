import { connect } from '../../store/connect';
import { Chat } from './chat';
import Block from '../../utils/block';
console.log('@@');
export default connect(Chat as typeof Block, (state) => state?.chat?.data_list);
