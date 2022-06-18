import './itemButtonSettings.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { itemButtonSettingsTmpl } from './itemButtonSettings.tmpl';

type DataProps = {
  src: string;
  title: string;
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ItemButtonSettings extends Block {
  constructor(props: DataProps) {
    super({ tagName: 'button', data: { ...props, className: ['item-button'] } });
  }

  render(): DocumentFragment {
    return compile(templater, itemButtonSettingsTmpl, { ...this.props });
  }
}
