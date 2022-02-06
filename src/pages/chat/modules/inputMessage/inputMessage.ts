import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { inputMessageTmpl } from './inputMessage.tmpl';
import './inputMessage.less';

type DataProps = {
  events?: {
    click: (e?: Event) => void;
  };
};

export class InputMessage extends Block {
  constructor(props: DataProps) {
    super('label', { ...props, className: ['input_message'] });
  }

  render(): DocumentFragment {
    return compile(templater, inputMessageTmpl, { ...this.props });
  }
}
