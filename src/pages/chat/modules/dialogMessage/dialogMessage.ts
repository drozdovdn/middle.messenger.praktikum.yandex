import './dialogMessage.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { DialogMessageTpml } from './dialogMessage.tpml';
import Message from '../message';

export class DialogMessage extends Block {
  constructor(props: any) {
    super({ tagName: 'div', data: { ...props, className: ['dialog'] } });
  }

  render(): DocumentFragment {
    const dialog = document.querySelector('.dialog');
    console.log({ dialog });
    if (dialog) {
      dialog.scrollIntoView({
        behavior: 'auto',
        block: 'end',
      });
    }

    function dataMessages(data: any) {
      let result: { item: Message }[] = [];
      if (Object.values(data).length) {
        result = Object.values(data).map((item: any) => {
          return {
            item: new Message({
              message: item.content,
              time: new Date(item.time).toLocaleString(),
            }),
          };
        });
      } else {
        result = [];
      }
      return result;
    }
    return compile(templater, DialogMessageTpml, { ...this.props, data_message: this.props?.data_message ? dataMessages(this.props?.data_message) : [] });
  }
}
