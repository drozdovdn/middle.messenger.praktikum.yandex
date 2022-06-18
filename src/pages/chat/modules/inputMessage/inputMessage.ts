import './inputMessage.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { inputMessageTmpl } from './inputMessage.tmpl';
import Input from '../../../../components/input';

type DataProps = {
  input: Input;
  events?: {
    click: (e?: Event) => void;
  };
};

export class InputMessage extends Block {
  constructor(props: DataProps) {
    super({ tagName: 'div', data: { ...props } });
  }

  render(): DocumentFragment {
    return compile(templater, inputMessageTmpl, { ...this.props });
  }
}
