import Block from './utils/block';
import { templater } from './templater';
import ButtonExample from './exapmleButton';
import { compile } from './utils/compile';
import Button from './components/button';

const pageExample = `
<div>WELCOME PAGE</div>
<div>{{button}}</div>
`;

export default class PageExpml extends Block {
  constructor() {
    super('section');
  }

  render(): DocumentFragment {
    const button = new ButtonExample({
      name: 'JAMP',
      events: {
        click: () => console.log('>>>CLICK<<<'),
      },
    });

    const twoButton = new Button({
      name: 'JAMP2',
      events: {
        click: () => console.log('>>>CLICK@<<<'),
      },
    });

    return compile(templater, pageExample, { button: twoButton });
  }
}
