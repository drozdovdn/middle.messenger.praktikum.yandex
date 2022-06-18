import '../error.less';
import { templater } from '../../../../templater';
import { errorTmpl } from '../error.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import ButtonLink from '../../../../components/buttonLink';
import Router from '../../../../utils/router/router';
import { RoutePath } from '../../../../utils/router/route-path';

export class Error_404 extends Block {
  constructor() {
    super({ tagName: 'section', data: { className: ['error', '_404'] } });
  }

  render(): DocumentFragment {
    const error404Context = {
      title: '404',
      desc: 'Не туда попали',
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

    return compile(templater, errorTmpl, error404Context);
  }
}
