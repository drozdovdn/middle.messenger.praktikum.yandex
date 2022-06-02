import './modal.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import { ModalTmpl } from './modal.tmpl';
import { templater } from '../../templater';

type DataProps = {
  content: DocumentFragment;
  className: string[];
  events?: {
    click: () => void;
  };
};

export class Modal extends Block {
  constructor(props: DataProps) {
    super({
      tabName: 'div',
      data: {
        ...props,
        className: props.className,
      },
    });
  }

  render(): DocumentFragment {
    return compile(templater, ModalTmpl, {
      ...this.props,
    });
  }
}
