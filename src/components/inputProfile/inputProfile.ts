import { templater } from '../../templater';
import { inputProfileTmpl } from './inputProfile.tmpl';
import './inputProfile.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataProps = {
  name: string;
  label: string;
  value: string;
  type?: string;
  disabled?: string;
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
    return compile(templater, inputProfileTmpl, { ...this.props, type: 'text', disabled: 'disabled' });
  }
}
