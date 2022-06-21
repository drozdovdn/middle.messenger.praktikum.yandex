import '../error.less';
import { templater } from '../../../../templater';
import { errorTmpl } from '../error.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import ButtonLink from '@components/buttonLink';
import Router from '@utils/router/router';
import { RoutePath } from '@utils/router/route-path';

export class Error_500 extends Block {
  constructor() {
    super({ tagName: 'div', data: { className: ['error', '_500'] } });
  }

  render(): DocumentFragment {
    const error500Context = {
      title: '500',
      desc: 'Мы уже фиксим',
      link: new ButtonLink({
        name: 'Назад к чатам',
        className: ['error__link'],
        events: {
          click: () => {
            const router = new Router('.root');
            router.go(RoutePath.CHAT);
          },
        },
      }),
    };

    return compile(templater, errorTmpl, error500Context);
  }
}
