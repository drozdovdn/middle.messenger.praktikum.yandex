import './inputProfile.less';
import { templater } from '../../templater';
import { inputProfileTmpl } from './inputProfile.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import Input from '../input';

type DataProps = {
  input: Input;
  label: string;
  className?: string[];
};

export class InputProfile extends Block {
  constructor(props: DataProps) {
    super({
      tagName: 'label',
      data: {
        ...props,
        className: ['profile__label'],
      },
    });
  }

  render(): DocumentFragment {
    return compile(templater, inputProfileTmpl, { ...this.props });
  }
}
