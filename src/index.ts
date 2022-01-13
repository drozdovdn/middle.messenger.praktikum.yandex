import './main.pcss';
import {compile} from "./templater";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import Error from "./pages/errors";
import Chat from "./pages/chat";

const root = document.querySelector('.root')

//Временные ссылки для демонстрации
const linksTemplate = `
    <nav class="links">
    <div>
        {{title}}
    </div>
    <ul class="links_list">
    <li class="links__item">
        <a href="{{profile.href}}">
            {{profile.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{error_500.href}}">
            {{error_500.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{error_404.href}}">
            {{error_404.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{home.href}}">
        {{home.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{chat.href}}">
        {{chat.name}}
        </a>
    </li>
    </ul>
    </nav>
`

const linksContext = {
    title: 'Временные ссылки для перехода на страницы:',
    profile: {
        href: '#profile',
        name: 'Profile'
    },
    error_500: {
        href: '#error#_500_',
        name: 'Страница ошибки 500'
    },
    error_404: {
        href: '#error#_404_',
        name: 'Страница ошибки 404'
    },
    home: {
        href: '#auth#signin',
        name: 'Auth'
    },
    chat: {
        href: '#chat',
        name: 'Chat'
    },
}



root.insertAdjacentHTML('afterbegin', compile(linksTemplate, linksContext))
root.insertAdjacentHTML('afterbegin', Auth())

//Временно вместо роутинга
window.addEventListener('hashchange', ()=>{
    const {hash} = window.location
    if(hash.includes('auth') || hash === '') {
        const auth = document.querySelector('.auth')
        const profile = document.querySelector('.profile')
        const errors = document.querySelector('.errors')
        const chat = document.querySelector('.chat')
        chat?.remove()
        profile?.remove()
        errors?.remove()
        if(!auth) {
            root?.insertAdjacentHTML('afterbegin', Auth())
        }
    }
    if(hash.includes('profile')) {
        const auth = document.querySelector('.auth')
        const errors = document.querySelector('.errors')
        const chat = document.querySelector('.chat')
        chat?.remove()
        auth?.remove()
        errors?.remove()
        Profile()
        // root?.insertAdjacentHTML('afterbegin', Profile())
    }
    if(hash.includes('chat')) {
        const auth = document.querySelector('.auth')
        const errors = document.querySelector('.errors')
        const profile = document.querySelector('.profile')
        auth?.remove()
        errors?.remove()
        profile?.remove()
        root?.insertAdjacentHTML('afterbegin', Chat())
    }
    if(hash.includes('error')) {
        const auth = document.querySelector('.auth')
        const profile = document.querySelector('.profile')
        const errors = document.querySelector('.errors')
        const chat = document.querySelector('.chat')
        chat?.remove()
        auth?.remove()
        profile?.remove()
        if(!errors) {
            root?.insertAdjacentHTML('afterbegin', Error())
        }
    }
})



