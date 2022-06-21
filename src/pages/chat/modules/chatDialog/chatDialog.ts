import './chatDialog.less';
import Block from '@utils/block';
import { compile } from '@utils/compile';
import { templater } from '../../../../templater';
import { chatDialogTmpl } from './chatDialog.tmpl';

export class ChatDialog extends Block {
  constructor(props: Record<string, unknown>) {
    super({ tagName: 'div', data: { ...props, className: ['chat__dialog'] } });
  }

  render(): DocumentFragment {
    return compile(templater, chatDialogTmpl, { ...this.props });
  }
}
