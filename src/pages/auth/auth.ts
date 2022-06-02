import './aurh.less';
import { templater } from '../../templater';
import { authTmpl } from './auth.tmpl';
import { compile } from '../../utils/compile';
import Block from '../../utils/block';

export class Auth extends Block {
  constructor(props: Record<string, unknown>) {
    super({ tagName: 'div', data: props });
  }
  render(): DocumentFragment {
    return compile(templater, authTmpl, { ...this.props });
  }
}
