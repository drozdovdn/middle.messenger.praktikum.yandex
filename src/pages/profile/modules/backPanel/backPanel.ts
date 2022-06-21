import './backPanel.less';
import { templater } from '../../../../templater';
import { backPanelTmpl } from './backPanel.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import ButtonLink from '@components/buttonLink';
import { RoutePath } from '@utils/router/route-path';
import Router from '@utils/router/router';

export class BackPanel extends Block {
  constructor() {
    super({ tagName: 'div', data: { className: ['back-panel'] } });
  }

  render(): DocumentFragment {
    const backPanelContext = {
      link: new ButtonLink({
        name: 'Назад',
        className: ['back-panel__link'],
        events: {
          click: () => {
            const router = new Router('.root');
            router.go(RoutePath.CHAT);
          },
        },
      }),
    };
    return compile(templater, backPanelTmpl, backPanelContext);
  }
}
