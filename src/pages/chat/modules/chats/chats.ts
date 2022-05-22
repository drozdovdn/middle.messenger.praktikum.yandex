import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { ChatsTmpl } from './chats.tmpl';
import { getChatsData, getToken } from '../../../../actions/chat';
import itemChat from '../../subComponents/itemChat';

type PropsType = {};

export class Chats extends Block {
  constructor(props: PropsType) {
    super('div', { ...props, className: ['chat__list-items'] });
  }

  render(): DocumentFragment {
    const dataChat = getChatsData();

    const dataList = (dataChat) => {
      let result = [];
      if (!dataChat?.data_list) {
        result = [];
      }

      if (Object.values(dataChat?.data_list).length) {
        result = Object.values(dataChat?.data_list).map((item) => {
          return {
            item: new itemChat({
              src: '#',
              name: item?.title ?? '',
              desc: item?.last_message?.content ?? '',
              date: item?.last_message?.time ?? '',
              counter: item?.unread_count ?? '',
              className: [],
              events: {
                click: () => {
                  getToken(item);
                  console.log(item?.title);
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

    return compile(templater, ChatsTmpl, { ...this.props, data_list: dataList(dataChat as []) });
  }
}
