import "./addAvatarModal.pcss";
import {compile} from "../../templater";
import {addAvatarModalTmpl} from "./addAvatarModal.tmpl";
import Button from "../../components/button";
import {FeatureProps} from "../../models";


const addAvatarModalContext = {
    error: 'Ошибка, попробуйте еще раз',
    title: 'Загрузите файл',
    name: 'Выберите файл на компьюторе',
    button: Button({name: 'Поменять'}),
    warning: 'Нужно выбрать файл'
}

export const AddAvatarModal:FeatureProps = () => {
    const profile = document.querySelector('.profile')

    profile?.insertAdjacentHTML('afterbegin', compile(addAvatarModalTmpl, addAvatarModalContext))
    const input: HTMLInputElement = document.querySelector('.add-avatar-modal__input')

    input.onchange = (e) => {
        const nameLabel = document.querySelector('.add-avatar-modal__name')
        const files = input.files
        if(files) {
            nameLabel.textContent = files[0].name;
            nameLabel.classList.add('file-name')
            input.disabled = true
        }
    }

}