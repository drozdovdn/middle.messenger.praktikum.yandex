import {ChatList} from './chatList';
import {connect} from '../../../../store/connect';
import {EVENT_UPDATE} from "../../../../store/store";

export default connect(ChatList, (state) => {
  return {data_list: state?.chat?.data_list}
}, EVENT_UPDATE.LIST_CHAT);
