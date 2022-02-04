import './itemControl.less';
import { templater } from '../../templater';
import { itemControlTmpl } from './itemControl.tmpl';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataProps = {
  title: string;
  className?: string;
};

export class ItemControl extends Block {
  constructor(props: DataProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return compile(templater, itemControlTmpl, {
      ...this.props,
      className: '',
    });
  }
}

// export const ItemControl: ItemControlProps = ({ title, className = '' }) => {
//   return compile(itemControlTmpl, { title, className });
// };
