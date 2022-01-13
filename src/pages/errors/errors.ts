import Error_404 from "./modules/404";
import Error_500 from "./modules/500";
import {compile} from "../../templater";
import {errorsTmpl} from "./errors.tmpl";
import {FunProps} from "../../models";

export const Errors:FunProps = () => {

    //Переменная хранящая в себе контент
    const {hash} = window.location
    let content = hash.includes('_404_') ? Error_404() : Error_500()

    //Временная замена роутингу
    window.addEventListener('hashchange', ()=>{
        const {hash} = window.location
        if(hash.includes('_404_')) {
            const _500 = document.querySelector('._500')
            const _404 = document.querySelector('._404')
            const errors = document.querySelector('.errors')
            _500?.remove()
            if(!_404) {
                errors?.insertAdjacentHTML('afterbegin', Error_404())
            }
        }
        if(hash.includes('_500_')) {
            const _404 = document.querySelector('._404')
            const _500 = document.querySelector('._500')
            const errors = document.querySelector('.errors')
            _404?.remove()
            if(!_500) {
                errors?.insertAdjacentHTML('afterbegin', Error_500())
            }
        }
    })

    return compile(errorsTmpl, {content})
}