import { ChatList } from './chatList';
import { connect } from '../../../../store/connect';
import { EVENT_UPDATE } from '../../../../store/store';
import Block from '@utils/block';
import { StoreProps } from '../../../../store/models';

export default connect(
  ChatList as typeof Block,
  (state: StoreProps) => {
    return { data_list: state?.chat ? state?.chat?.data_list ?? {} : {} };
  },
  EVENT_UPDATE.LIST_CHAT
);
