import './backPanel.less';
import { templater } from '../../../../templater';
import { backPanelTmpl } from './backPanel.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import ButtonLink from '../../../../components/buttonLink';
import { router } from '../../../../index';
import { RoutePath } from '../../../../utils/router/route-path';

export class BackPanel extends Block {
  constructor() {
    super('div', { className: ['back-panel'] });
  }

  render(): DocumentFragment {
    const backPanelContext = {
      link: new ButtonLink({
        name: 'Назад',
        className: ['back-panel__link'],
        events: {
          click: () => router.go(RoutePath.CHAT),
        },
      }),
    };
    return compile(templater, backPanelTmpl, backPanelContext);
  }
}
