import './itemControl.less';
import { templater } from '../../templater';
import { itemControlTmpl } from './itemControl.tmpl';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataProps = {
  title: string;
  className?: string[];
  events?: {
    click: () => void;
  };
};

export class ItemControl extends Block {
  constructor(props: DataProps) {
    super('button', {
      ...props,
      className: [...props.className, 'item-control'],
    });
  }

  render(): DocumentFragment {
    return compile(templater, itemControlTmpl, {
      ...this.props,
    });
  }
}
