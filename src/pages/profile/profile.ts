import './profile.pcss';
import SettingsProfile from "./modules/settings";
import {compile} from "../../templater";
import {profileTmpl} from "./profile.tmpl";
import Avatar from "./modules/avatar";
import BackPanel from "./modules/backPanel";
import Control from "./modules/control";
import Button from "../../components/button";
import ChangePassword from "./modules/changePassword";
import {PageProps} from "../../models";
import AddAvatarModal from "../../features/addAvatarModal";

const profileContext = {
    backPanel: BackPanel(),
    avatar: Avatar(),
    settings: SettingsProfile(),
    control: Control()
}


export const Profile:PageProps = () => {

    const root = document.querySelector('.root')

    root?.insertAdjacentHTML('afterbegin', compile(profileTmpl, profileContext))

    const changeButton: HTMLButtonElement = document.querySelector('.item-control__change-data')
    const controlBlock: HTMLElement = document.querySelector('.control')
    const profileControl: HTMLElement = document.querySelector('.profile__control')
    const inputSettings: NodeListOf<HTMLInputElement> = document.querySelectorAll('.profile__input')
    changeButton.onclick = ()=> {
        controlBlock.classList.add('hidden')
        inputSettings.forEach(item => item.removeAttribute('disabled'))
        profileControl?.insertAdjacentHTML('afterbegin', Button({name: 'Сохранить', className: 'profile__save-button'}))

    }

    const changePasswordButton: HTMLButtonElement = document.querySelector('.item-control__change-password')
    const profileSettings: HTMLElement = document.querySelector('.profile__settings')
    const settingsBlock: HTMLElement = document.querySelector('.settings')
    changePasswordButton.onclick = () => {
        controlBlock.classList.add('hidden')
        settingsBlock.classList.add('hidden')
        profileSettings?.insertAdjacentHTML('afterbegin', ChangePassword())
        profileControl?.insertAdjacentHTML('afterbegin', Button({name: 'Сохранить', className: 'profile__save-button'}))
    }

    const avatarButton: HTMLElement = document.querySelector('.avatar__button')

    avatarButton.onclick = () => {
        AddAvatarModal()
    }
}