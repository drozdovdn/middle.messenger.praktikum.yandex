import './chat.less';
import { templater } from '../../templater';
import { chatTmpl } from './chat.tmpl';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Search from './modules/search';
import ButtonLink from '../../components/buttonLink';
import Router from '../../utils/router/router';
import { RoutePath } from '../../utils/router/route-path';
import { createChat } from './utils';
import ChatList from './modules/chatList';
import { ChatProps } from '../../store/models';
import DialogWindow from './modules/dialogWindow';

type Props = {
  data_list: Record<string, ChatProps>;
};

export class Chat extends Block {
  soket: any;
  token: string | null;
  constructor(props?: Props) {
    super({ tagName: 'section', data: { ...props, className: ['chat'] } });
    this.soket = null;
    this.token = null;
  }

  render(): DocumentFragment {
    const search = new Search();

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
          click: () => {
            const router = new Router('.root');
            router.go(RoutePath.PROFILE);
          },
        },
      }),
      chat_list: new ChatList(),
      dialog: new DialogWindow({ _soket: this.soket, _token: this.token }),
    };

    return compile(templater, chatTmpl, chatContext);
  }
}
