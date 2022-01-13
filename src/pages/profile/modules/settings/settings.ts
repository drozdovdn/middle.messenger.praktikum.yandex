import './settinps.pcss'
import {InputProfile} from "../../../../components/inputProfile/inputProfile";
import {compile} from "../../../../templater";
import {settingsTmpl} from "./settings.tmpl";
import {FunProps} from "../../../../models";

const settingsContext = {
    data: [
        {
            input: InputProfile({label: 'Почта', name: 'email', value: 'pochta@yandex.ru'})
        },
        {
            input: InputProfile({label: 'Логин', name: 'login', value: 'ivanivanov'})
        },
        {
            input: InputProfile({label: 'Имя',  name: 'first_name',value: 'Иван'})
        },
        {
            input: InputProfile({label: 'Фамилия', name: 'second_name', value: 'Иванов'})
        },
        {
            input: InputProfile({label: 'Имя в чате', name: 'display_name', value: 'Иван'})
        },
        {
            input: InputProfile({label: 'Телефон', name: 'phone', value: '+7 (909) 967 30 30'})
        },
    ]
};

export const SettingsProfile:FunProps = () => {
    return compile(settingsTmpl, settingsContext)
}