import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { inputMessageTmpl } from './inputMessage.tmpl';
import './inputMessage.less';
import Input from '../../../../components/input';

type DataProps = {
  input: Input;
  events?: {
    click: (e?: Event) => void;
  };
};

export class InputMessage extends Block {
  constructor(props: DataProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return compile(templater, inputMessageTmpl, { ...this.props });
  }
}
