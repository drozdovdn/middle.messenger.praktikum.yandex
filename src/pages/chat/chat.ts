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
import ChatDialog from './modules/chatDialog';
import ControlChat from './modules/controlChat';
import { Header } from './modules/header/header';

type Props = {
  data_list: Record<string, any>;
};

export class Chat extends Block {
  constructor(props?: Props) {
    super('section', { ...props, className: ['chat'] });
  }

  render(): DocumentFragment {
    // console.log('@@@@@@@@@');
    const search = new Search();
    const dataChat = getChatsData();
    console.log(this.props);

    const dataList = (dataChat: any) => {
      let result: any[] = [];
      if (!dataChat?.data_list) {
        result = [];
      }

      if (this.props.data_list) {
        result = Object.values(this.props.data_list).map((item) => {
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
      data_list: this.props?.data_list ? dataList(this.props) : [],
      dialog: dialogWindows(dataChat),
    };

    return compile(templater, chatTmpl, chatContext);
  }
}

function dialogWindows(dataChat: any) {
  if (dataChat?.data_socket) {
    const dataChat = getChatsData();
    const { data_socket } = dataChat;
    return new ChatDialog({
      header: new Header({ title: data_socket.title, src: data_socket.avatar }),
      controlChat: new ControlChat(),
    });
  } else {
    return '<span>Выбериите чат чтобы отправить сообщение</span>';
  }
}
