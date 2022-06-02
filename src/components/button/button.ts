import './button.less';
import { templater } from '../../templater';
import { buttonTmpl } from './button.tmpl';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataType = {
  name: string;
  className?: string[];
  events?: {
    click?: (e?: Event) => void;
  };
};

export class Button extends Block {
  constructor(props: DataType) {
    super('button', { ...props, className: props.className ? [...props.className, 'button'] : ['button'] });
  }

  render(): DocumentFragment {
    return compile(templater, buttonTmpl, { ...this.props });
  }
}
