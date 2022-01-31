import {compile} from "../../templater";
import {itemChatTmpl} from "./itemChat.tmpl";
import './itemChat.less';

type DataProps = {
  src: string,
  name: string,
  desc: string,
  date: string,
  counter?: number
}

type ItemChatProps = (data: DataProps) => string;

export const ItemChat: ItemChatProps = ({src, name, desc, date, counter}) => {
  return compile(itemChatTmpl, {src, name, desc, date, counter})
}
