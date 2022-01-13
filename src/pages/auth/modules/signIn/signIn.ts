import "../form.pcss";
import {formTmpl} from "../form.tmpl";
import Input from "../../../../components/input";
import {compile} from "../../../../templater";
import Title from "../../../../components/title";
import Button from "../../../../components/button";
import {FunProps} from "../../../../models";

const signInContext = {
    title: Title('Вход'),
    className: 'sign-in',
    data: [
        {
            input:  Input({label: 'Логин', type: 'text', name: 'login'})
        },
        {
            input:  Input({label: 'Пароль', type: 'password', name: 'password'})
        },
    ],
    button: Button({name: 'Авторизация'}),
    link: {
        title: 'Нет аккаунта?',
        href: '#auth#signup',
    }
}

export const SignIn: FunProps = () => {
    return compile(formTmpl, signInContext)
}
