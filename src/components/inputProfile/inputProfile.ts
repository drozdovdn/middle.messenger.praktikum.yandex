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
};

export class InputProfile extends Block {
  constructor(props: DataProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return compile(templater, inputProfileTmpl, {
      ...this.props,
      type: 'text',
      disabled: 'disabled',
    });
  }
}

// export const InputProfile: InputProfileProps = ({ name, label, value, type = 'text', disabled = 'disabled', }) => {
//   return compile(inputProfileTmpl, { name, label, value, type, disabled });
// };
