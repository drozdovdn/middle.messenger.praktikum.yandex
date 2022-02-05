import { templater } from '../../templater';
import { InputTmpl } from './input.tmpl';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import './input.less';

type DataProps = {
  type: string;
  name: string;
  label?: string;
  className?: string[];
  events?: {
    click?: (e?: Event) => void;
    change?: (e?: Event) => void;
    focus?: (e?: Event) => void;
    blur?: (e?: Event) => void;
  };
};

export class Input extends Block {
  constructor(props: DataProps) {
    super('label', props);
  }
  render(): DocumentFragment {
    return compile(templater, InputTmpl, { ...this.props });
  }
}
