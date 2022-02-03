import { templater } from '../../templater';
import { InputTmpl } from './input.tmpl';
import './input.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataProps = {
  type: string;
  label: string;
  name: string;
  className?: string;
};

export default class Input extends Block {
  constructor(props: DataProps) {
    super('div', props);
  }
  render(): DocumentFragment {
    return compile(templater, InputTmpl, this.props);
  }
}
