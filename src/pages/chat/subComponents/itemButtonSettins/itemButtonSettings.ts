import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { itemButtonSettingsTmpl } from './itemButtonSettings.tmpl';
import './itemButtonSettings.less';

type DataProps = {
  src: string;
  title: string;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ItemButtonSettings extends Block {
  constructor(props: DataProps) {
    super('button', { ...props, className: ['item-button'] });
  }

  render(): DocumentFragment {
    return compile(templater, itemButtonSettingsTmpl, { ...this.props });
  }
}
