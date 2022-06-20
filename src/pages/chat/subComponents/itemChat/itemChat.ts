import './itemChat.less';
import { templater } from '../../../../templater';
import { itemChatTmpl } from './itemChat.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';

export type DataPropsItemChats = {
  src: string;
  name: string;
  desc: string;
  date: string;
  counter?: number | string;
  className?: string[];
  events?: {
    click?: (e?: Event) => void;
  };
};

export class ItemChat extends Block {
  constructor(props: DataPropsItemChats) {
    super({ tagName: 'div', data: { ...props, className: props.className ? [...props.className, 'item-chat'] : ['item-chat'] } });
  }
  render(): DocumentFragment {
    return compile(templater, itemChatTmpl, { ...this.props });
  }
}
