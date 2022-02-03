import './title.less';
import { templater } from '../../templater';
import { titleTmpl } from './title.tmpl';
import { compile } from '../../utils/compile';
import Block from '../../utils/block';

export default class Title extends Block {
  constructor(props) {
    super('div', props);
  }
  render(): DocumentFragment {
    return compile(templater, titleTmpl, { ...this.props });
  }
}
