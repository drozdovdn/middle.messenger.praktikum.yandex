import './message.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { messageTmpl } from './message.tmpl';

export class Message extends Block {
  constructor(props) {
    super('div', { ...props, className: ['message'] });
  }

  render(): DocumentFragment {
    console.log('$$', this.props)
    return compile(templater, messageTmpl, { ...this.props });
  }
}
