import './aurh.pcss';
import {compile} from "../../templater";
import {authTmpl} from "./auth.tmpl";
import SignIn from "./modules/signIn";
import SignUp from "./modules/signUp";
import {FunProps} from "../../models";

export const Auth: FunProps = () => {

    //Переменная хранящая в себе контент
    let content = SignIn()

    //Временная замена роутингу
    window.addEventListener('hashchange', ()=>{
        const {hash} = window.location
        if(hash.includes('signin')) {
            const auth = document.querySelector('.auth')
            const sighUp = document.querySelector('.sign-up')
            const sighIn = document.querySelector('.sign-in')
            sighUp?.remove()
             if(!sighIn) {
                 auth?.insertAdjacentHTML('afterbegin', SignIn())
             }
        }
        if(hash.includes('signup')) {
            const auth = document.querySelector('.auth')
            const sighIn = document.querySelector('.sign-in')
            const sighUp = document.querySelector('.sign-up')
            sighIn?.remove()
            if(!sighUp) {
                auth?.insertAdjacentHTML('afterbegin', SignUp())
            }
        }
    })

    return compile(authTmpl, {content})
}