import './controlChat.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { controlChatTmpl } from './controlChat.tmpl';
import ButtonSettings from '../../subComponents/buttonSettings';
import InputMessage from '../inputMessage';
import Input from '../../../../components/input';

export class ControlChat extends Block {
  message: string;
  constructor() {
    super('div', { className: ['control-chat'] });
    this.message = '';
  }

  render(): DocumentFragment {
    const input = new Input({
      className: ['input--message'],
      placeholder: 'Сообщение',
      name: 'message',
      type: 'text',
      events: {
        change: (e) => {
          const target = e.target as HTMLInputElement;
          this.message = target.value;
        },
      },
    });

    const controlChatContext = {
      addFiles: new ButtonSettings({ src: './add_filles.svg' }),
      inputMessage: new InputMessage({ input }),
      sendMessage: new ButtonSettings({
        src: './send_message.svg',
        events: {
          click: () => {
            if (this.message === '') {
              throw Error('Поле не заполненно');
            } else {
              console.log(this.message);
            }
          },
        },
      }),
    };

    return compile(templater, controlChatTmpl, controlChatContext);
  }
}
