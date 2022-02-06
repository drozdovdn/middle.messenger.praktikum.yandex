import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { headerTmpl } from './header.tmpl';
import ButtonSettings from '../../subComponents/buttonSettings';
import './header.less';

export class Header extends Block {
  constructor(props) {
    super('div', { ...props, className: ['header'] });
  }

  render(): DocumentFragment {
    const headerContext = {
      buttonSettings: new ButtonSettings({
        src: './button_settings.svg',
        events: {
          click: () => console.log('Show modal settings'),
        },
      }),
    };
    return compile(templater, headerTmpl, { ...headerContext, ...this.props });
  }
}
