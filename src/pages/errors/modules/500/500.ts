import '../error.less';
import { templater } from '../../../../templater';
import { errorTmpl } from '../error.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class Error_500 extends Block {
  constructor() {
    super('div', { className: ['error', '_500'] });
  }

  render(): DocumentFragment {
    const error500Context = {
      title: '500',
      desc: 'Мы уже фиксим',
      link: {
        title: 'Назад к чатам',
        href: '/chat',
      },
    };

    return compile(templater, errorTmpl, error500Context);
  }
}
