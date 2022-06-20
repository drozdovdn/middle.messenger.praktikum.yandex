import './addDelete.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { addDeleteTmpl } from './addDelete.tmpl';
import Input from '@components/input';
import Button from '@components/button';
import InputForm from '@components/inputForm';

type DataProps = {
  title: string;
  input: Input | InputForm;
  className: string[];
  button: Button;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class AddDelete extends Block {
  constructor(props: DataProps) {
    super({ tagName: 'div', data: { ...props, className: props.className } });
  }

  render(): DocumentFragment {
    return compile(templater, addDeleteTmpl, { ...this.props });
  }
}
