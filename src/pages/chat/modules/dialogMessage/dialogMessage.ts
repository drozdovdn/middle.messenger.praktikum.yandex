import './dialogMessage.less';
import Block from "../../../../utils/block";
import {compile} from "../../../../utils/compile";
import {templater} from "../../../../templater";
import {DialogMessageTpml} from "./dialogMessage.tpml";
import {DataPropsItemChats} from "../../subComponents/itemChat/itemChat";
import Message from "../message";


export class DialogMessage extends Block {
  constructor(props: any) {
    super('div', {...props, className: ['dialog']});
  }

  render(): DocumentFragment {

    function dataMessages (data: any) {
      let result: { item: DataPropsItemChats }[] = [];
      if (Object.values(data).length) {
        result = Object.values(data).map((item: any) => {
          return {
            item: new Message({
              message: item.content,
              time: new Date(item.time).toLocaleString()
            })
          }
        })
      } else {
        result = [];
      }
      return result;
    }
    return compile(templater, DialogMessageTpml, {...this.props, data_message: this.props?.data_message ? dataMessages(this.props?.data_message) : ''});
  }
}
