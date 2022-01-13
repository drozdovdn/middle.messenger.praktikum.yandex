import "./chat.pcss";
import {compile} from "../../templater";
import {chatTmpl} from "./chat.tmpl";
import {FunProps} from "../../models";

const chatContext = {
    data: 'Заглушка для страницы чата'
}


export const Chat: FunProps = () => {
    return compile(chatTmpl, chatContext)
}