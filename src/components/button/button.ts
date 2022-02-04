import { templater } from '../../templater';
import { buttonTmpl } from './button.tmpl';
import './button.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataType = {
  name: string;
  className?: string;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class Button extends Block {
  constructor(props: DataType) {
    super('div', props);
  }

  render(): DocumentFragment {
    return compile(templater, buttonTmpl, { ...this.props });
  }
}
