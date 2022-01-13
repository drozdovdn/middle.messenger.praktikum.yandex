import "./changePassword.pcss";
import InputProfile from "../../../../components/inputProfile";
import {compile} from "../../../../templater";
import {changePasswordTmpl} from "./changePassword.tmpl";
import {FunProps} from "../../../../models";


const changePasswordContext = {
    data : [
        {
            inputProfile: InputProfile({label: 'Старый пароль', name: 'oldPassword',  value: 'password', type: 'password', disabled: ''})
        },
        {
            inputProfile: InputProfile({label: 'Новый пароль', name: 'newPassword',value: 'password', type: 'password', disabled: ''})
        },
        {
            inputProfile: InputProfile({label: 'Повторите новый пароль', name: 'repeatNewPassword', value: 'password', type: 'password', disabled: ''})
        },
    ]
}

export const ChangePassword:FunProps = () => {
    return compile(changePasswordTmpl, changePasswordContext)
}