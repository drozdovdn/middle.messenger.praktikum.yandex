import './main.less';
import { templater } from './templater';
import Auth from './pages/auth';
import Profile from './pages/profile';
import Error from './pages/errors';
import Chat from './pages/chat';
import SignIn from './pages/auth/modules/signIn';
import Block from './utils/block';
import { compile } from './utils/compile';
//
const root = document.querySelector('.root');

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
`;

const linksContext = {
  title: 'Временные ссылки для перехода на страницы:',
  profile: {
    href: '#profile',
    name: 'Profile',
  },
  error_500: {
    href: '#error#_500_',
    name: 'Страница ошибки 500',
  },
  error_404: {
    href: '#error#_404_',
    name: 'Страница ошибки 404',
  },
  home: {
    href: '#auth#signin',
    name: 'Auth',
  },
  chat: {
    href: '#chat',
    name: 'Chat',
  },
};

class Links extends Block {
  constructor() {
    super('div');
  }

  render(): DocumentFragment {
    return compile(templater, linksTemplate, linksContext);
  }
}

function render(query, block) {
  const root = document.querySelector(query);
  root.appendChild(block.getContent());

  return root;
}

render('.root', new Links());

// root.insertAdjacentHTML('afterbegin', compile(linksTemplate, linksContext));
if (root) {
  // const content = new SignIn();
  // root.appendChild(content.getContent());
}

root.appendChild(new Auth().getContent());

//Временно вместо роутинга
window.addEventListener('hashchange', () => {
  const { hash } = window.location;
  if (hash.includes('auth') || hash === '') {
    const auth = document.querySelector('.auth');
    const profile = document.querySelector('.profile');
    const errors = document.querySelector('.errors');
    const chat = document.querySelector('.chat');
    chat?.remove();
    profile?.remove();
    errors?.remove();
    if (!auth) {
      root.appendChild(new Auth().getContent());
    }
  }
  if (hash.includes('profile')) {
    const auth = document.querySelector('.auth');
    const errors = document.querySelector('.errors');
    const chat = document.querySelector('.chat');
    chat?.remove();
    auth?.remove();
    errors?.remove();
    root.appendChild(new Profile().getContent());
  }
  if (hash.includes('chat')) {
    const auth = document.querySelector('.auth');
    const errors = document.querySelector('.errors');
    const profile = document.querySelector('.profile');
    auth?.remove();
    errors?.remove();
    profile?.remove();
    // root.appendChild(new Chat().getContent())
  }
  if (hash.includes('error')) {
    const auth = document.querySelector('.auth');
    const profile = document.querySelector('.profile');
    const errors = document.querySelector('.errors');
    const chat = document.querySelector('.chat');
    chat?.remove();
    auth?.remove();
    profile?.remove();
    if (!errors) {
      root.appendChild(new Error().getContent());
    }
  }
});
