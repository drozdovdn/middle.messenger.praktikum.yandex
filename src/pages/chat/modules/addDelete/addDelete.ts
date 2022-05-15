import './addDelete.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { addDeleteTmpl } from './addDelete.tmpl';
import Input from '../../../../components/input';
import Button from '../../../../components/button';

type DataProps = {
  title: string;
  input: Input;
  button: Button;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class AddDelete extends Block {
  constructor(props: DataProps) {
    super('div', { ...props, className: ['add-delete-modal'] });
  }

  render(): DocumentFragment {
    return compile(templater, addDeleteTmpl, { ...this.props });
  }
}