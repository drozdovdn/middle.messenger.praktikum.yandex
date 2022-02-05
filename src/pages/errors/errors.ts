import Error_404 from './modules/404';
import Error_500 from './modules/500';
import { templater } from '../../templater';
import { errorsTmpl } from './errors.tmpl';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

export class Errors extends Block {
  constructor() {
    super('section', { className: ['errors'] });
  }

  render(): DocumentFragment {
    //Переменная хранящая в себе контент
    const { hash } = window.location;
    const content = hash.includes('_404_') ? new Error_404() : new Error_500();

    //Временная замена роутингу
    window.addEventListener('hashchange', () => {
      const { hash } = window.location;
      if (hash.includes('_404_')) {
        const _500 = document.querySelector('._500');
        const _404 = document.querySelector('._404');
        const errors = document.querySelector('.errors');
        _500?.remove();
        if (!_404) {
          errors.appendChild(new Error_404().getContent());
        }
      }
      if (hash.includes('_500_')) {
        const _404 = document.querySelector('._404');
        const _500 = document.querySelector('._500');
        const errors = document.querySelector('.errors');
        _404?.remove();
        if (!_500) {
          errors.appendChild(new Error_500().getContent());
        }
      }
    });
    return compile(templater, errorsTmpl, { content });
  }
}
