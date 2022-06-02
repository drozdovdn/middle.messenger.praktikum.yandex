import './addAvatarModal.less';
import { templater } from '../../templater';
import { addAvatarModalTmpl } from './addAvatarModal.tmpl';
import Button from '../../components/button';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Input from '../../components/input';
import { changeAvatar } from '../../actions/profile';

type AddAvatarModalProps = {
  events?: {
    click?: (e?: Event) => void;
  };
};

export class AddAvatarModal extends Block {
  file: File | null;
  constructor(props: AddAvatarModalProps) {
    super('div', { ...props, className: ['add-avatar-modal'] });
    this.file = null;
  }

  render(): DocumentFragment {
    const button = new Button({
      name: 'Поменять',
      className: [],
      events: {
        click: () => {
          if (this.file) {
            const data = new FormData();
            data.append('avatar', this.file);
            changeAvatar(data);
          }
        },
      },
    });

    const input = new Input({
      type: 'file',
      name: 'avatar',
      className: ['add-avatar-modal__input'],
      events: {
        change: (e) => {
          const target = e?.target as HTMLInputElement;
          const nameLabel = document.querySelector('.add-avatar-modal__name');
          const files = target.files;
          if (files && nameLabel) {
            this.file = files[0];
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
