import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { ChatListTmpl } from './chatList.tmpl';
import { getToken } from '../../../../actions/chat';
import itemChat from '../../subComponents/itemChat';
import {ChatProps} from "../../../../store/models";
import {DataPropsItemChats} from "../../subComponents/itemChat/itemChat";


export class ChatList extends Block {
  constructor(props?: Record<string, ChatProps>) {
    super('div', { ...props, className: ['chat__list-items'] });
  }
  render(): DocumentFragment {
    const dataList = (data: Record<string, ChatProps>) => {
      let result: { item: DataPropsItemChats }[] = [];
      if (Object.values(data).length) {
        result = Object.values(data).map((item) => {
          return {
            item: new itemChat({
              src: '#',
              name: item?.title ?? '',
              desc: item?.last_message ?? '',
              date: '',
              counter: item?.unread_count ?? '',
              className: [],
              events: {
                click: () => {
                  getToken(item);
                },
              },
            }),
          };
        });
      } else {
        result = [];
      }
      return result;
    };
    return compile(templater, ChatListTmpl, { ...this.props, data_list: this.props?.data_list ? dataList(this.props?.data_list) : [] });
  }
}
