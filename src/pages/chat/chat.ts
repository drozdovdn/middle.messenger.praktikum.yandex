import './chat.less';
import { compile } from '../../templater';
import { chatTmpl } from './chat.tmpl';
import { FunProps } from '../../models';
import itemChat from "../../components/itemChat";

const chatContext = {
  chat: {
    search: {
      name: 'Поиск'
    },
    profile: {
      src: '',
      name: 'Профиль'
    }
  },
    data_list: [
      {
        item: itemChat({ src: '', name: 'Иван', desc: 'Текс посленего сообщения', date: '00:00', counter: 2})
      },
      {
        item: itemChat({ src: '', name: 'Иван 2', desc: 'Текс посленего сообщения 2', date: '00:00', counter: 1})
      },
      {
        item: itemChat({ src: '', name: 'Иван 2', desc: 'Текс посленего сообщения 2', date: '00:00', counter: 1})
      },
      {
        item: itemChat({ src: '', name: 'Иван 2', desc: 'Текс посленего сообщения 2', date: '00:00', counter: 1})
      },
      {
        item: itemChat({ src: '', name: 'Иван 2', desc: 'Текс посленего сообщения 2', date: '00:00', counter: 1})
      },
    ]
};

export const Chat: FunProps = () => {
  return compile(chatTmpl, chatContext);
};
