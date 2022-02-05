import './chat.less';
import { templater } from '../../templater';
import { chatTmpl } from './chat.tmpl';
import itemChat from '../../components/itemChat';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Search from './modules/search';

export class Chat extends Block {
  constructor() {
    super('section', { className: ['chat'] });
  }

  render(): DocumentFragment {
    const search = new Search();

    const chatContext = {
      search,
      data_list: [
        {
          item: new itemChat({ src: '', name: 'Иван', desc: 'Текс посленего сообщения', date: '00:00', counter: 2, className: [] }),
        },
        {
          item: new itemChat({ src: '', name: 'Иван 2', desc: 'Текс посленего сообщения 2', date: '00:00', counter: 1, className: [] }),
        },
        {
          item: new itemChat({ src: '', name: 'Иван 24', desc: 'Текс посленего сообщения 5', date: '00:00', counter: 5, className: [] }),
        },
        {
          item: new itemChat({ src: '', name: 'Иван 23', desc: 'Текс посленего сообщения 1', date: '00:00', counter: 1, className: [] }),
        },
        {
          item: new itemChat({ src: '', name: 'Иван 21', desc: 'Текс посленего сообщения 4', date: '00:00', counter: 4, className: [] }),
        },
      ],
    };

    return compile(templater, chatTmpl, chatContext);
  }
}
