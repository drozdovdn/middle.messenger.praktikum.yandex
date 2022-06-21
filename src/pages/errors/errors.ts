import './errors.less';
import Error_404 from './modules/404';
import Error_500 from './modules/500';
import { templater } from '../../templater';
import { errorsTmpl } from './errors.tmpl';
import Block from '@utils/block';
import { compile } from '@utils/compile';

export class Errors extends Block {
  constructor() {
    super({ tagName: 'section', data: { className: ['errors'] } });
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
        if (_500) {
          _500?.remove();
        }
        if (!_404) {
          errors?.appendChild(new Error_404().getContent() as Node);
        }
      }
      if (hash.includes('_500_')) {
        const _404 = document.querySelector('._404');
        const _500 = document.querySelector('._500');
        const errors = document.querySelector('.errors');
        if (_404) {
          _404?.remove();
        }
        if (!_500) {
          errors?.appendChild(new Error_500().getContent() as Node);
        }
      }
    });
    return compile(templater, errorsTmpl, { content });
  }
}
