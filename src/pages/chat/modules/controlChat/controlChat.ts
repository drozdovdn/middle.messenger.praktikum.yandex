import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { controlChatTmpl } from './controlChat.tmpl';
import ButtonSettings from '../buttonSettings';
import InputMessage from '../inputMessage';
import './controlChat.less';

export class ControlChat extends Block {
  constructor() {
    super('div', { className: ['control-chat'] });
  }

  render(): DocumentFragment {
    const controlChatContext = {
      addFiles: new ButtonSettings({ src: './add_filles.svg' }),
      inputMessage: new InputMessage({}),
      sendMessage: new ButtonSettings({ src: './send_message.svg' }),
    };

    return compile(templater, controlChatTmpl, controlChatContext);
  }
}
