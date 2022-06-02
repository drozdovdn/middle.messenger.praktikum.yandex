import './buttonLink.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import { templater } from '../../templater';
import { buttonLinkTmpl } from './buttonLink.tmpl';

type DataProps = {
  name: string;
  className?: string[];
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ButtonLink extends Block {
  constructor(props: DataProps) {
    super({ tagName: 'button', data: { ...props, className: props.className ? [...props.className, 'button-link'] : ['button-link'] } });
  }

  render(): DocumentFragment {
    return compile(templater, buttonLinkTmpl, { ...this.props });
  }
}
