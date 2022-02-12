import './addDeleteUser.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { addDeleteUserTmpl } from './addDeleteUser.tmpl';

export class AddDeleteUser extends Block {
  constructor(props) {
    super('div', { ...props, className: ['add-delete-user-modal'] });
  }

  render(): DocumentFragment {
    return compile(templater, addDeleteUserTmpl, { ...this.props });
  }
}
