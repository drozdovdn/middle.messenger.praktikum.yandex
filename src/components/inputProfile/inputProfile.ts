import { templater } from '../../templater';
import { inputProfileTmpl } from './inputProfile.tmpl';
import './inputProfile.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Input from '../input';

type DataProps = {
  input: Input;
  label: string;
  className?: string[];
};

export class InputProfile extends Block {
  constructor(props: DataProps) {
    super('label', {
      ...props,
      className: ['profile__label'],
    });
  }

  render(): DocumentFragment {
    return compile(templater, inputProfileTmpl, { ...this.props });
  }
}
