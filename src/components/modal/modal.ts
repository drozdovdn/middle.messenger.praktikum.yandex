import './modal.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import { ModalTmpl } from './modal.tmpl';
import { templater } from '../../templater';
import ModalSettings from '../../pages/chat/subComponents/modalSettings';

type DataProps = {
  content: ModalSettings;
  className: string[];
  events?: {
    click: (e: Event) => void;
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
