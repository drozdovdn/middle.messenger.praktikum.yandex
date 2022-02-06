import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { buttonSettingsTmpl } from './buttonSettings.tmpl';
import './buttonSettings.less';

type DataProps = {
  src: string;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ButtonSettings extends Block {
  constructor(props: DataProps) {
    super('div', { ...props, className: ['button__settings'] });
  }

  render(): DocumentFragment {
    return compile(templater, buttonSettingsTmpl, { ...this.props });
  }
}
