import Block from '@utils/block';
import { compile } from '@utils/compile';
import { templater } from '../../../../templater';
import { ChatListTmpl } from './chatList.tmpl';
import { getToken } from '../../../../actions/chat';
import itemChat from '../../subComponents/itemChat';
import { ChatProps } from '../../../../store/models';

export class ChatList extends Block {
  constructor(props: Record<string, ChatProps>) {
    super({ tagName: 'div', data: { ...props, className: ['chat__list-items'] } });
  }

  render(): DocumentFragment {
    const dataList = (data: Record<string, ChatProps>) => {
      let result: { item: itemChat }[] = [];
      if (Object.values(data).length) {
        result = Object.values(data).map((item) => {
          return {
            item: new itemChat({
              src: '#',
              name: item?.title ?? '',
              desc: item?.last_message?.content ?? '',
              date: '',
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

    return compile(templater, ChatListTmpl, {
      ...this.props,
      messages: this.props?.data_list === 0 ? 'Чаты не созданы' : '',
      data_list: this.props?.data_list ? dataList(this.props?.data_list) : [],
    });
  }
}
