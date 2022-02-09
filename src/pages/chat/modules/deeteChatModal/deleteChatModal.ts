import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { deleteChatModalTmpl } from './deleteChatModal.tmpl';
import Button from '../../../../components/button';
import './deleteChatModal.less';

export class DeleteChatModal extends Block {
  constructor() {
    super('div', { className: ['delete-chat-modal'] });
  }

  render(): DocumentFragment {
    const deleteChatModalContext = {
      buttonYes: new Button({ name: 'Да', className: [''] }),
      buttonNo: new Button({ name: 'Нет', className: ['button-red'] }),
    };

    return compile(templater, deleteChatModalTmpl, deleteChatModalContext);
  }
}