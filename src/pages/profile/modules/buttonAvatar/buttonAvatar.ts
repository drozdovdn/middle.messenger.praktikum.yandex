import './buttonAvatar.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { buttonAvatarTmpl } from './buttonAvatar.tmpl';

type DataType = {
  text: string;
  src: string;
  className?: string[];
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ButtonAvatar extends Block {
  constructor(props: DataType) {
    super('button', { ...props, className: ['avatar__button'] });
  }

  render(): DocumentFragment {
    return compile(templater, buttonAvatarTmpl, { ...this.props });
  }
}
