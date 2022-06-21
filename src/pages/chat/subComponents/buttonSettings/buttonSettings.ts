import './buttonSettings.less';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import { templater } from '../../../../templater';
import { buttonSettingsTmpl } from './buttonSettings.tmpl';

type DataProps = {
  src: string;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ButtonSettings extends Block {
  constructor(props: DataProps) {
    super({ tagName: 'div', data: { ...props, className: ['button__settings'] } });
  }

  render(): DocumentFragment {
    return compile(templater, buttonSettingsTmpl, { ...this.props });
  }
}
