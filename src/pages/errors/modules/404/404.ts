import '../error.less';
import { templater } from '../../../../templater';
import { errorTmpl } from '../error.tmpl';
import { FunProps } from '../../../../models';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class Error_404 extends Block {
  constructor() {
    super('div');
  }

  render(): DocumentFragment {
    const error404Context = {
      title: '404',
      desc: 'Не туда попали',
      className: '_404',
      link: {
        title: 'Назад к чатам',
        href: '/chat',
      },
    };

    return compile(templater, errorTmpl, error404Context);
  }
}
