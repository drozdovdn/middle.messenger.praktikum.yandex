import './chat.less';
import { templater } from '../../templater';
import { chatTmpl } from './chat.tmpl';
import itemChat from './subComponents/itemChat';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Search from './modules/search';
import { Header } from './modules/header/header';
import ControlChat from './modules/controlChat';
import ButtonLink from '../../components/buttonLink';
import { router } from '../../index';
import { RoutePath } from '../../utils/router/route-path';
import { getChatsData } from '../../actions/chat';

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
      return dataChat.data_list.map((item) => ({
        item: new itemChat({
          src: '#',
          name: item.title,
          desc: item.last_message.content,
          date: item.last_message.time,
          counter: item.unread_count,
          className: [],
        }),
      }));
    };
    const chatContext = {
      search,
      link: new ButtonLink({
        name: 'Профиль',
        className: ['chat__link'],
        events: {
          click: () => router.go(RoutePath.PROFILE),
        },
      }),
      chat: {
        data_list: dataList(dataChat),
      },
      header: new Header({ title: 'Иван', src: '#' }),
      controlChat: new ControlChat(),
    };

    return compile(templater, chatTmpl, chatContext);
  }
}
