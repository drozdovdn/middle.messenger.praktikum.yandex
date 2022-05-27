import './chat.less';
import { templater } from '../../templater';
import { chatTmpl } from './chat.tmpl';
import itemChat from './subComponents/itemChat';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Search from './modules/search';
import ButtonLink from '../../components/buttonLink';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';
import { getChatsData, getToken } from '../../actions/chat';
import { createChat } from './utils';
import ChatList from './modules/chatList';
import { ChatProps } from '../../store/models';
import DialogWindow from './modules/dialogWindow';

type Props = {
  data_list: Record<string, ChatProps>;
};

export class Chat extends Block {
  constructor(props?: Props) {
    super('section', { ...props, className: ['chat'] });
  }

  render(): DocumentFragment {
    const search = new Search();
    const dataChat = getChatsData();
    console.log('Chat', this.props);

    const dataList = (dataChat: any) => {
      let result: any[] = [];
      if (!dataChat?.data_list) {
        result = [];
      }

      if (this.props.data_list) {
        result = Object.values(this.props.data_list).map((item) => {
          console.log(item);
          return {
            item: new itemChat({
              src: '#',
              name: item.title ?? '',
              desc: item.unread_count ?? '',
              date: item.created_by ?? '',
              counter: item.unread_count ?? '',
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

    const chatContext = {
      search,
      createChat: new ButtonLink({
        name: 'Создать чат',
        className: ['chat__link'],
        events: {
          click: () => createChat(),
        },
      }),
      link: new ButtonLink({
        name: 'Профиль',
        className: ['chat__link'],
        events: {
          click: () => router.go(RoutePath.PROFILE),
        },
      }),
      messages: this.props.data_list !== 0 ? '' : 'Чаты не созданы',
      chat_list: new ChatList(),
      dialog: new DialogWindow(),
    };

    return compile(templater, chatTmpl, chatContext);
  }
}
