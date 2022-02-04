import './backPanel.less';
import { templater } from '../../../../templater';
import { backPanelTmpl } from './backPanel.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class BackPanel extends Block {
  constructor() {
    super('div');
  }

  render(): DocumentFragment {
    const backPanelContext = {
      link: {
        href: '#chat',
        name: 'Назад',
      },
    };
    return compile(templater, backPanelTmpl, backPanelContext);
  }
}
