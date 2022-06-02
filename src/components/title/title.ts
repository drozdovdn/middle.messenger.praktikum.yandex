import './title.less';
import { templater } from '../../templater';
import { titleTmpl } from './title.tmpl';
import { compile } from '../../utils/compile';
import Block from '../../utils/block';

type DataProps = {
  title: string;
  className?: string[];
};

export class Title extends Block {
  constructor(props: DataProps) {
    super('h1', { ...props, className: props.className ? [...props.className, 'modal__title'] : ['modal__title'] });
  }
  render(): DocumentFragment {
    return compile(templater, titleTmpl, { ...this.props });
  }
}
