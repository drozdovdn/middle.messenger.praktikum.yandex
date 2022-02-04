import './avatar.less';
import { templater } from '../../../../templater';
import { avatarTmpl } from './avatar.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class Avatar extends Block {
  constructor() {
    super('div');
  }

  render(): DocumentFragment {
    const avatarContext = {
      src: '',
      name: 'Иван',
      text: 'Поменять аватар',
    };

    return compile(templater, avatarTmpl, avatarContext);
  }
}
