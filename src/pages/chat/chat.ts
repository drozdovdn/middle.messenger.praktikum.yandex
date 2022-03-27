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
import { getChatsData } from '../../actions/chat';
import { createChat } from './utils';

export class Chat extends Block {
  constructor() {
    super('section', { className: ['chat'] });
  }

  render(): DocumentFragment {
    const search = new Search();
    const dataChat = getChatsData();

    const dataList = (dataChat) => {
      if (!dataChat?.data_list) {
        return [];
      }
      if (Object.values(dataChat?.data_list).length) {
        return Object.values(dataChat?.data_list).map((item) => ({
          item: new itemChat({
            src: '#',
            name: item?.title ?? '',
            desc: item?.last_message?.content ?? '',
            date: item?.last_message?.time ?? '',
            counter: item?.unread_count ?? '',
            className: [],
          }),
        }));
      } else {
        return [];
      }
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
      messages: Object.values(dataChat?.data_list).length !== 0 ? '' : 'Чаты не созданы',
      chat: {
        data_list: dataList(dataChat ?? []),
      },
    };

    return compile(templater, chatTmpl, chatContext);
  }
}
// dialog: new ChatDialog({
//   header: new Header({ title: 'Иван', src: '#' }),
//   controlChat: new ControlChat(),
// }),
