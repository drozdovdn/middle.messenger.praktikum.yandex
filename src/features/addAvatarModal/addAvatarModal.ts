import './addAvatarModal.less';
import { templater } from '../../templater';
import { addAvatarModalTmpl } from './addAvatarModal.tmpl';
import Button from '../../components/button';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Input from '../../components/input';

export class AddAvatarModal extends Block {
  constructor() {
    super('div', { className: ['add-avatar-modal'] });
  }

  render(): DocumentFragment {
    const button = new Button({
      name: 'Поменять',
      className: [],
      events: {
        click: () => console.log('Поменять клик'),
      },
    });

    const input = new Input({
      type: 'file',
      name: 'avatar',
      className: ['add-avatar-modal__input'],
      events: {
        change: (e) => {
          const target = e.target as HTMLInputElement;
          const nameLabel = document.querySelector('.add-avatar-modal__name');
          const files = target.files;
          if (files && nameLabel) {
            nameLabel.textContent = files[0].name;
            nameLabel.classList.add('file-name');
            target.disabled = true;
          }
        },
      },
    });

    const addAvatarModalContext = {
      error: 'Ошибка, попробуйте еще раз',
      title: 'Загрузите файл',
      name: 'Выберите файл на компьюторе',
      input,
      button,
      warning: 'Нужно выбрать файл',
    };

    return compile(templater, addAvatarModalTmpl, addAvatarModalContext);
  }
}
