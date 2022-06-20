import './inputForm.less';
import { templater } from '../../templater';
import { InputTmpl } from './input.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import Input from '../input';

type DataProps = {
  label: string;
  input: Input;
};

export class InputForm extends Block {
  constructor(props: DataProps) {
    super({ tagName: 'label', data: props });
  }
  render(): DocumentFragment {
    return compile(templater, InputTmpl, { ...this.props });
  }
}
