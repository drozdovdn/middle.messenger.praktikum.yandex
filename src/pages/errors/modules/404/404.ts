import '../errors.pcss';
import {compile} from "../../../../templater";
import {errorTmpl} from "../error.tmpl";
import {FunProps} from "../../../../models";

const error404Context = {
    title: '404',
    desc: 'Не туда попали',
    className: '_404',
    link: {
        title: 'Назад к чатам',
        href: '/chat'
    }
}

export const Error_404:FunProps = () => {
    return compile(errorTmpl, error404Context)
}