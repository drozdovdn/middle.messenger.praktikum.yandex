import './modalSettings.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { modalSettingsTmpl } from './modalSettings.tmpl';

export class ModalSettings extends Block {
  constructor(props) {
    super('div', { ...props, className: ['modal-settings'] });
  }

  render(): DocumentFragment {
    return compile(templater, modalSettingsTmpl, { ...this.props });
  }
}
