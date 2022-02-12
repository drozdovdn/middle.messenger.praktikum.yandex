import './itemChat.less';
import { templater } from '../../../../templater';
import { itemChatTmpl } from './itemChat.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

type DataProps = {
  src: string;
  name: string;
  desc: string;
  date: string;
  counter?: number;
  className?: string[];
};

export class ItemChat extends Block {
  constructor(props: DataProps) {
    super('div', { ...props, className: [...props.className, 'item-chat'] });
  }
  render(): DocumentFragment {
    return compile(templater, itemChatTmpl, { ...this.props });
  }
}
