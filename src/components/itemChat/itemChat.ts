import { templater } from '../../templater';
import { itemChatTmpl } from './itemChat.tmpl';
import './itemChat.less';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

type DataProps = {
  src: string;
  name: string;
  desc: string;
  date: string;
  counter?: number;
};

export class ItemChat extends Block {
  constructor(props: DataProps) {
    super('div', props);
  }
  render(): DocumentFragment {
    return compile(templater, itemChatTmpl, this.props);
  }
}

// export const ItemChat: ItemChatProps = ({ src, name, desc, date, counter }) => {
//   return compile(itemChatTmpl, { src, name, desc, date, counter });
// };
