import {compile} from "../../../../templater";
import {errorTmpl} from "../error.tmpl";
import {FunProps} from "../../../../models";


const error500Context = {
    title: '500',
    desc: 'Мы уже фиксим',
    className: '_500',
    link: {
        title: 'Назад к чатам',
        href: '/chat'
    }
}

export const Error_500:FunProps = () => {
    return compile(errorTmpl, error500Context)
}